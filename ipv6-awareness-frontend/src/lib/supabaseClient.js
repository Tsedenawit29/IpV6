import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vyatfkqmezubsgafsuak.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXRma3FtZXp1YnNnYWZzdWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MDE4ODUsImV4cCI6MjA2NTI3Nzg4NX0._Lyc85xTgA8KQ9Yw9mO0nQctIEIe7pdSKFbMP7JHgn0';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'public'
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Test connection
const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('ipv6_resources')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Database connection test failed:', error);
    } else {
      console.log('Successfully connected to database');
    }
  } catch (error) {
    console.error('Connection test failed:', error);
  }
};

testConnection(); 