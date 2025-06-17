import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import toast from 'react-hot-toast';
import ConnectionTest from '../components/ConnectionTest';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [showConnectionTest, setShowConnectionTest] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-dark-bg-secondary p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <div>
          <img
            className="mx-auto h-16 w-auto"
            src="/logo.jpg"
            alt="IPv6 Awareness"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-[#00C389] focus:border-[#00C389] focus:z-10 sm:text-sm dark:bg-dark-bg-secondary"
                placeholder="Email address"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-[#00C389] focus:border-[#00C389] focus:z-10 sm:text-sm dark:bg-dark-bg-secondary"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full hover:bg-[#009C6B]"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        {showConnectionTest && (
          <div className="mt-8">
            <ConnectionTest />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login; 