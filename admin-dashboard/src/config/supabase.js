import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vyatfkqmezubsgafsuak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXRma3FtZXp1YnNnYWZzdWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MDE4ODUsImV4cCI6MjA2NTI3Nzg4NX0._Lyc85xTgA8KQ9Yw9mO0nQctIEIe7pdSKFbMP7JHgn0';

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