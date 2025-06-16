import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import FileUpload from './FileUpload';
import DeleteConfirmation from './DeleteConfirmation';

const DataTable = ({
  tableName,
  columns,
  formFields,
  title,
  onEdit,
  onDelete,
  onAdd,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState({ isOpen: false, id: null });

  useEffect(() => {
    fetchData();
  }, [tableName]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const { error } = await supabase
          .from(tableName)
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from(tableName)
          .insert([formData]);
        if (error) throw error;
      }
      setIsModalOpen(false);
      setFormData({});
      setEditingId(null);
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    setDeleteConfirmation({ isOpen: true, id });
  };

  const confirmDelete = async () => {
    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', deleteConfirmation.id);
      if (error) throw error;
      fetchData();
    } catch (error) {
      setError(error.message);
    } finally {
      setDeleteConfirmation({ isOpen: false, id: null });
    }
  };

  const renderFormField = (field) => {
    if (field.type === 'file' || field.type === 'image') {
      return (
        <FileUpload
          type={field.type}
          currentUrl={formData[field.name] || ''}
          folder={tableName}
          onUploadComplete={(url) => setFormData({ ...formData, [field.name]: url })}
        />
      );
    }

    if (field.type === 'select') {
      return (
        <div className="relative">
          <select
            className="appearance-none w-full bg-primary-light dark:bg-primary-dark border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-sai-teal focus:border-sai-teal"
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
            required={field.required}
          >
            <option value="">Select {field.label}</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      );
    }

    if (field.type === 'textarea') {
      return (
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark leading-tight focus:outline-none focus:ring-sai-teal focus:border-sai-teal bg-primary-light dark:bg-primary-dark"
          name={field.name}
          value={formData[field.name] || ''}
          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
          required={field.required}
          rows={4}
        />
      );
    }

    return (
      <input
        type={field.type || 'text'}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-light dark:text-text-dark leading-tight focus:outline-none focus:ring-sai-teal focus:border-sai-teal bg-primary-light dark:bg-primary-dark"
        name={field.name}
        value={formData[field.name] || ''}
        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
        required={field.required}
      />
    );
  };

  const renderFormFields = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {renderFormField(field)}
          </div>
        ))}
      </div>
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <button
          onClick={() => {
            setFormData({});
            setEditingId(null);
            setIsModalOpen(true);
          }}
          className="btn btn-primary"
        >
          Add New
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-dark-bg-secondary shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-dark-bg-tertiary">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-dark-text-secondary uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-bg-secondary divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-[#00C389]/5 dark:hover:bg-[#00C389]/10">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-text-light dark:text-text-dark">
                    {column.render ? column.render(item) : item[column.key]}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-[#00C389] hover:text-[#009C6B] mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {editingId ? 'Edit Item' : 'Add New Item'}
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingId(null);
                  setFormData({});
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFormFields()}
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingId(null);
                    setFormData({});
                  }}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {editingId ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmation
        isOpen={deleteConfirmation.isOpen}
        onClose={() => setDeleteConfirmation({ isOpen: false, id: null })}
        onConfirm={confirmDelete}
        title="Delete Confirmation"
        message="Are you sure you want to delete this item? This action cannot be undone."
      />
    </div>
  );
};

export default DataTable; 