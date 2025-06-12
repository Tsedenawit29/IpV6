import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qgxqjqjqjqjqjqjqjqjq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFneHFqcWpxanFqcWpxanFqcWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MjQ5NzAsImV4cCI6MjA1NTUwMDk3MH0.2QZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQ';

const supabase = createClient(supabaseUrl, supabaseKey);

// Create storage buckets if they don't exist
const initializeStorage = async () => {
  try {
    // Create images bucket
    const { data: imagesBucket, error: imagesError } = await supabase
      .storage
      .createBucket('images', {
        public: true,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
      });

    // Create files bucket
    const { data: filesBucket, error: filesError } = await supabase
      .storage
      .createBucket('files', {
        public: true,
        fileSizeLimit: 10485760, // 10MB
        allowedMimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      });

    if (imagesError) console.error('Error creating images bucket:', imagesError);
    if (filesError) console.error('Error creating files bucket:', filesError);
  } catch (error) {
    console.error('Error initializing storage:', error);
  }
};

// Initialize storage on module load
initializeStorage();

export default supabase; 