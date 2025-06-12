import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import toast from 'react-hot-toast';
import ConnectionTest from '../components/ConnectionTest';
import { PhotoIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [showConnectionTest, setShowConnectionTest] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ image: null });
  const [uploading, setUploading] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedFileFile, setSelectedFileFile] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          navigate('/'); // Navigate to dashboard if logged in
        }
      } catch (error) {
        console.error('Session check error:', error);
        setShowConnectionTest(true);
      }
    };
    checkUser();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, check if the Supabase client is properly initialized
      if (!supabase) {
        throw new Error('Supabase client not initialized');
      }

      // Attempt to sign in with retry logic
      const maxRetries = 3;
      let lastError = null;

      for (let i = 0; i < maxRetries; i++) {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password.trim(),
          });

          if (error) {
            throw error;
          }

          if (data?.user) {
            toast.success('Logged in successfully!');
            navigate('/'); // Navigate to dashboard
            return;
          }
        } catch (error) {
          lastError = error;
          if (error.message.includes('Failed to fetch')) {
            // Only retry on network errors
            if (i < maxRetries - 1) {
              setRetryCount(i + 1);
              await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
              continue;
            }
          }
          throw error;
        }
      }

      if (lastError) {
        throw lastError;
      }
    } catch (error) {
      console.error('Login error details:', error);
      let errorMessage = 'Failed to login. ';
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage += 'Please check your email and password.';
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage += 'Please confirm your email address.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage += `Network error. Please check your internet connection. (Attempt ${retryCount + 1}/3)`;
        setShowConnectionTest(true);
      } else {
        errorMessage += error.message || 'Please try again.';
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setRetryCount(0);
    }
  };

  // Function to handle file uploads for both images and general files
  async function handleFileUpload(event, type) {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      // Dynamic bucket name based on type
      const filePath = `${type === 'image' ? 'resource-images' : 'resource-files'}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(type === 'image' ? 'resource-images' : 'resource-files') // <-- Dynamic bucket selection
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(type === 'image' ? 'resource-images' : 'resource-files') // <-- Dynamic bucket selection
        .getPublicUrl(filePath);

      // Update appropriate formData field based on type
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark-bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-dark-bg-secondary p-8 rounded-xl shadow-lg">
        <div>
          <img
            className="mx-auto h-16 w-auto"
            src="/logo2.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-dark-text-primary">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-dark-text-secondary">
            Please use your admin credentials
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-dark-border placeholder-gray-500 dark:placeholder-dark-text-secondary text-gray-900 dark:text-dark-text-primary rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-dark-bg-tertiary"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-dark-border placeholder-gray-500 dark:placeholder-dark-text-secondary text-gray-900 dark:text-dark-text-primary rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:bg-dark-bg-tertiary"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading ? 'bg-primary-dark cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
            >
              {loading ? `Signing in...${retryCount > 0 ? ` (Attempt ${retryCount + 1}/3)` : ''}` : 'Sign in'}
            </button>
          </div>
        </form>

        {showConnectionTest && (
          <div className="mt-8">
            <ConnectionTest />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
            Featured Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-dark-border border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition-colors">
            <div className="space-y-1 text-center">
              {formData.image ? (
                <img src={formData.image} alt="Featured" className="mx-auto h-32 w-auto object-cover rounded-md mb-2" />
              ) : (
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
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
                    onChange={(e) => handleFileUpload(e, 'image')} // <-- Call with type 'image'
                    disabled={uploading}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-dark-text-secondary">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Conditional rendering for Image Upload / File Upload / URL input */}
        {formData.type === 'Image Upload' && ( // <-- Only show if type is 'Image Upload'
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
              Image Upload
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-dark-border border-dashed rounded-lg hover:border-primary dark:hover:border-primary transition-colors">
              <div className="space-y-1 text-center">
                {formData.image_url ? (
                  <img src={formData.image_url} alt="Resource" className="mx-auto h-32 w-auto object-cover rounded-md mb-2" />
                ) : (
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
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
                      onChange={(e) => handleFileUpload(e, 'image')} // <-- Call with type 'image'
                      disabled={uploading}
                      accept="image/*" // Restrict to image files
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-dark-text-secondary">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        )}

        {formData.type === 'File Upload' && ( // <-- Only show if type is 'File Upload'
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
                      onChange={(e) => handleFileUpload(e, 'file')} // <-- Call with type 'file'
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
      </div>
    </div>
  );
};

export default Login; 