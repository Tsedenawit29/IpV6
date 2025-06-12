import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PlusIcon, TrashIcon, LinkIcon, DocumentTextIcon, TagIcon, StarIcon, UserIcon, PencilIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    url: '',
    image_url: '',
    file_url: '',
    tags: [],
    rating: 0,
    author: '',
  });
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedFileFile, setSelectedFileFile] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const categories = ['Documentation', 'Tool', 'Article', 'Video', 'Tutorial', 'Course'];
  const types = ['Link', 'Image Upload', 'File Upload'];

  useEffect(() => {
    fetchResources();
  }, []);

  async function fetchResources() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('ipv6.resources')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResources(data || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
      toast.error('Failed to load resources');
    } finally {
      setLoading(false);
    }
  }

  async function handleFileUpload(event, type) {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${type === 'image' ? 'resource-images' : 'resource-files'}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(type === 'image' ? 'resource-images' : 'resource-files')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(type === 'image' ? 'resource-images' : 'resource-files')
        .getPublicUrl(filePath);

      if (type === 'image') {
        setFormData(prev => ({ ...prev, image_url: publicUrl }));
        setSelectedImageFile(file);
      } else if (type === 'file') {
        setFormData(prev => ({ ...prev, file_url: publicUrl }));
        setSelectedFileFile(file);
      }

      toast.success(`${type === 'image' ? 'Image' : 'File'} uploaded successfully`);
    } catch (error) {
      console.error(`Error uploading ${type}:`, error);
      toast.error(`Failed to upload ${type}`);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('ipv6.resources')
        .insert([{
          ...formData,
          tags: formData.tags.length > 0 ? formData.tags : [],
          created_at: new Date().toISOString(),
        }]);

      if (error) throw error;

      toast.success('Resource created successfully');
      setFormData({
        title: '',
        description: '',
        category: '',
        type: '',
        url: '',
        image_url: '',
        file_url: '',
        tags: [],
        rating: 0,
        author: '',
      });
      setSelectedImageFile(null);
      setSelectedFileFile(null);
      fetchResources();
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error creating resource:', error);
      toast.error(error.message || 'Failed to create resource');
    }
  }

  async function handleUpdate(resourceData) {
    try {
      const { id, ...updates } = resourceData;
      const { error } = await supabase
        .from('ipv6.resources')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      toast.success('Resource updated successfully');
      setIsFormOpen(false);
      setSelectedResource(null);
      fetchResources();
    } catch (error) {
      console.error('Error updating resource:', error);
      toast.error(error.message || 'Failed to update resource');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this resource?')) return;

    try {
      const { error } = await supabase
        .from('ipv6.resources')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Resource deleted successfully');
      fetchResources();
    } catch (error) {
      console.error('Error deleting resource:', error);
      toast.error('Failed to delete resource');
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Resources
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-dark-text-secondary">
            Manage your educational resources and tools
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedResource(null);
            setIsFormOpen(true);
          }}
          className="btn btn-primary flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Resource
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-dark-border mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {selectedResource ? 'Edit Resource' : 'Create New Resource'}
          </h2>
          <form onSubmit={selectedResource ? (e) => handleUpdate({ ...formData, id: selectedResource.id }) : handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              >
                <option value="">Select Type</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* URL Input (conditional) */}
            {formData.type === 'Link' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>
            )}

            {/* Conditional rendering for Image Upload / File Upload / URL input */}
            {formData.type === 'Image Upload' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Image Upload
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-dark-border border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition-colors">
                  <div className="space-y-1 text-center">
                    {formData.image_url ? (
                      <img src={formData.image_url} alt="Resource" className="mx-auto h-32 w-auto object-cover rounded-md mb-2" />
                    ) : (
                      <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600 dark:text-dark-text-secondary">
                      <label
                        htmlFor="image-upload"
                        className="relative cursor-pointer bg-white dark:bg-dark-bg-tertiary rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                      >
                        <span>Upload an image</span>
                        <input
                          id="image-upload"
                          name="image-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => handleFileUpload(e, 'image')}
                          disabled={uploading}
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            )}

            {formData.type === 'File Upload' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  File Upload
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-dark-border border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition-colors">
                  <div className="space-y-1 text-center">
                    {formData.file_url ? (
                      <a href={formData.file_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-center">
                        <DocumentTextIcon className="h-6 w-6 mr-2" />
                        {selectedFileFile ? selectedFileFile.name : 'View uploaded file'}
                      </a>
                    ) : (
                      <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600 dark:text-dark-text-secondary">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white dark:bg-dark-bg-tertiary rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => handleFileUpload(e, 'file')}
                          disabled={uploading}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-dark-text-secondary">Any file type up to 10MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* Other form fields for tags, rating, author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Tags (comma-separated)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TagIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.tags.join(', ')}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="e.g., networking, security, education"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Rating (1-5)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <StarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) || 0 })}
                  min="0"
                  max="5"
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Author
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || uploading}
                className={`btn btn-primary ${
                  (loading || uploading) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {selectedResource ? 'Update Resource' : 'Create Resource'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Resource List */}
      <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-border">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            All Resources
          </h2>
          {resources.length === 0 ? (
            <p className="text-gray-500 dark:text-dark-text-secondary">No resources found. Add a new resource to get started.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md overflow-hidden flex flex-col">
                  {resource.image_url && (
                    <div className="relative w-full h-48">
                      <img
                        src={resource.image_url}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-2 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="text-gray-500 dark:text-dark-text-secondary text-xs space-y-1">
                      <p className="flex items-center">
                        <LinkIcon className="h-4 w-4 mr-1" />
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {resource.type === 'Link' ? 'View Link' : 'Download File'}
                        </a>
                      </p>
                      <p className="flex items-center">
                        <TagIcon className="h-4 w-4 mr-1" />
                        {resource.category}
                      </p>
                      {resource.author && (
                        <p className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          {resource.author}
                        </p>
                      )}
                      {resource.rating > 0 && (
                        <p className="flex items-center">
                          <StarIcon className="h-4 w-4 mr-1 text-yellow-400" />
                          {resource.rating} / 5
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {resource.tags && resource.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 dark:bg-dark-border text-gray-700 dark:text-dark-text-secondary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-dark-bg-tertiary flex justify-end space-x-2">
                    <button
                      onClick={() => {
                        setSelectedResource(resource);
                        setFormData({ ...resource, tags: resource.tags ? resource.tags.join(', ') : '' });
                        setIsFormOpen(true);
                      }}
                      className="text-primary hover:text-primary-dark"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(resource.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resources; 