import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import supabase from '../config/supabase';

const FileUpload = ({ onUpload, type = 'image', value, onChange }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const bucket = type === 'image' ? 'images' : 'files';
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${bucket}/${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      onChange(publicUrl);
      onUpload(publicUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Failed to upload file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [type, onChange, onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: type === 'image' 
      ? { 'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'] }
      : { 'application/*': ['.pdf', '.doc', '.docx'] },
    maxSize: type === 'image' ? 5242880 : 10485760, // 5MB for images, 10MB for files
    multiple: false
  });

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (urlInput) {
      onChange(urlInput);
      onUpload(urlInput);
      setUrlInput('');
      setShowUrlInput(false);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive 
            ? 'border-secondary-light dark:border-secondary-dark bg-secondary-light/10 dark:bg-secondary-dark/10' 
            : 'border-gray-300 dark:border-gray-600 hover:border-secondary-light dark:hover:border-secondary-dark'
          }`}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary-light dark:border-secondary-dark"></div>
          </div>
        ) : isDragActive ? (
          <p className="text-secondary-light dark:text-secondary-dark">Drop the file here...</p>
        ) : (
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              Drag and drop a {type} here, or click to select
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              {type === 'image' 
                ? 'Supports: JPEG, PNG, GIF, WebP (max 5MB)'
                : 'Supports: PDF, DOC, DOCX (max 10MB)'}
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {value && (
        <div className="flex items-center justify-between">
          {type === 'image' ? (
            <img
              src={value}
              alt="Uploaded"
              className="h-20 w-20 object-cover rounded"
            />
          ) : (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-light dark:text-secondary-dark hover:text-opacity-80"
            >
              View File
            </a>
          )}
          <button
            type="button"
            onClick={() => onChange('')}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="text-secondary-light dark:text-secondary-dark hover:text-opacity-80"
        >
          {showUrlInput ? 'Cancel' : 'Or enter URL manually'}
        </button>
      </div>

      {showUrlInput && (
        <form onSubmit={handleUrlSubmit} className="flex gap-2">
          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder={`Enter ${type} URL`}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-secondary-light dark:bg-secondary-dark text-white rounded-md hover:bg-opacity-90"
          >
            Add URL
          </button>
        </form>
      )}
    </div>
  );
};

export default FileUpload; 