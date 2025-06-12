import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vyatfkqmezubsgafsuak.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXRma3FtZXp1YnNnYWZzdWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MDE4ODUsImV4cCI6MjA2NTI3Nzg4NX0._Lyc85xTgA8KQ9Yw9mO0nct IEIe7pdSKFbMP7JHgn0';

// Basic check for environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please check your .env file.');
  // You might want to throw an error or handle this more gracefully in a production app
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Initialize the blog_posts table if it doesn't exist
const initializeBlogPostsTable = async () => {
  try {
    const { error } = await supabase.rpc('create_blog_posts_table');
    if (error) {
      console.error('Error creating blog_posts table:', error);
    }
  } catch (error) {
    console.error('Error initializing blog_posts table:', error);
  }
};

// Call the initialization function
initializeBlogPostsTable(); 