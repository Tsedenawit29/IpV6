import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PlusIcon, PencilIcon, TrashIcon, PhotoIcon, CalendarIcon, UserIcon, TagIcon, BookOpenIcon, QueueListIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    short_description: '',
    image_url: '',
    file_url: '',
    category: '',
    author: 'Admin',
    published_on: new Date().toISOString().split('T')[0],
    read_time: '5 min read'
  });
  const [selectedPost, setSelectedPost] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const categories = ['news', 'tutorials', 'case-studies'];

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('ipv6_blog_posts')
        .select('*')
        .order('published_on', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  }

  async function handleFileUpload(event, type) {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) return;

      // Check authentication first
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session) {
        toast.error('Please log in to upload files');
        return;
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `public/${fileName}`;

      // Determine which bucket to use based on type
      const bucket = type === 'image' ? 'blog-images' : 'blog-files';

      // Show uploading toast
      const uploadToast = toast.loading(`Uploading ${type}...`);

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true,
          contentType: file.type
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        toast.error(`Failed to upload ${type}: ${uploadError.message}`, { id: uploadToast });
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      if (type === 'image') {
        setFormData(prev => ({ ...prev, image_url: publicUrl }));
      } else {
        setFormData(prev => ({ ...prev, file_url: publicUrl }));
      }

      // Show success toast
      toast.success(`${type === 'image' ? 'Image' : 'File'} uploaded successfully`, { id: uploadToast });
    } catch (error) {
      console.error(`Error uploading ${type}:`, error);
      toast.error(`Failed to upload ${type}: ${error.message}`);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Validate required fields
      if (!formData.image_url) {
        throw new Error('Please upload an image');
      }
      if (!formData.category || !categories.includes(formData.category)) {
        throw new Error('Please select a valid category');
      }

      const { error } = await supabase
        .from('ipv6_blog_posts')
        .insert([formData]);

      if (error) throw error;

      toast.success('Blog post created successfully');
      setFormData({
        title: '',
        short_description: '',
        image_url: '',
        file_url: '',
        category: '',
        author: 'Admin',
        published_on: new Date().toISOString().split('T')[0],
        read_time: '5 min read'
      });
      fetchPosts();
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast.error(error.message || 'Failed to create blog post');
    }
  }

  async function handleUpdate(postData) {
    try {
      const { id, ...updates } = postData;
      const { error } = await supabase
        .from('ipv6_blog_posts')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      toast.success('Blog post updated successfully');
      setIsFormOpen(false);
      setSelectedPost(null);
      fetchPosts();
    } catch (error) {
      console.error('Error updating blog post:', error);
      toast.error(error.message || 'Failed to update blog post');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const { error } = await supabase
        .from('ipv6_blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Blog post deleted successfully');
      fetchPosts();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error('Failed to delete blog post');
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
            Blog Posts
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-dark-text-secondary">
            Manage your blog content and create new posts
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedPost(null);
            setIsFormOpen(true);
          }}
          className="btn btn-primary flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Blog Post
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-dark-border mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {selectedPost ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          <form onSubmit={selectedPost ? (e) => handleUpdate({ ...formData, id: selectedPost.id }) : handleSubmit} className="space-y-6">
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

            {/* Short Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Short Description
              </label>
              <textarea
                value={formData.short_description}
                onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
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

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Image Upload (Required)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-dark-border border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition-colors">
                <div className="space-y-1 text-center">
                  {formData.image_url ? (
                    <img src={formData.image_url} alt="Blog Post" className="mx-auto h-32 w-auto object-cover rounded-md mb-2" />
                  ) : (
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                  )}
                  <div className="flex text-sm text-gray-600 dark:text-dark-text-secondary">
                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-dark">
                      <span>Upload an image</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'image')}
                        required={!formData.image_url}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* File Upload (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                File Upload (Optional)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-dark-border border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition-colors">
                <div className="space-y-1 text-center">
                  {formData.file_url ? (
                    <div className="flex items-center justify-center">
                      <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-600 dark:text-dark-text-secondary">
                        File uploaded
                      </span>
                    </div>
                  ) : (
                    <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                  )}
                  <div className="flex text-sm text-gray-600 dark:text-dark-text-secondary">
                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-dark">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={(e) => handleFileUpload(e, 'file')}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Author */}
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
                  required
                />
              </div>
            </div>

            {/* Published Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Published Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  value={formData.published_on}
                  onChange={(e) => setFormData({ ...formData, published_on: e.target.value })}
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                Read Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BookOpenIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.read_time}
                  onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                  className="w-full pl-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="e.g., 5 min read"
                  required
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-dark-text-secondary hover:text-gray-900 dark:hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={uploading}
                className={`btn btn-primary ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {uploading ? 'Uploading...' : selectedPost ? 'Update Blog Post' : 'Create Blog Post'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Blog Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg p-6 border border-gray-100 dark:border-dark-border"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                  {post.category}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedPost(post);
                    setFormData(post);
                    setIsFormOpen(true);
                  }}
                  className="p-2 text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
              {post.short_description}
            </p>

            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-dark-text-secondary">
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {new Date(post.published_on).toLocaleDateString()}
              </div>
            </div>

            <div className="mt-2 text-sm text-gray-500 dark:text-dark-text-secondary flex items-center">
              <BookOpenIcon className="h-4 w-4 mr-1" />
              {post.read_time}
            </div>

            {post.file_url && (
              <a
                href={post.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center text-primary hover:text-primary-dark"
              >
                <DocumentTextIcon className="h-5 w-5 mr-1" />
                Download File
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPosts; 