import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, data, onClose, onSave }) => {
  const [form, setForm] = useState(data || {});

  useEffect(() => {
    setForm(data || {});
  }, [data]);

  if (!isOpen) return null;

  // Example: Adjust fields as needed for your use case
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Event</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSave(form);
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={form.title || ''}
              onChange={e => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              value={form.description || ''}
              onChange={e => setForm({ ...form, description: e.target.value })}
              required
            />
          </div>
          {/* Add more fields as needed */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#00C389] text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;