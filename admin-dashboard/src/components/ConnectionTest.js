import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const ConnectionTest = () => {
  const [status, setStatus] = useState('Testing connection...');
  const [error, setError] = useState(null);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const testConnection = async () => {
      const addDetail = (message, type = 'info') => {
        setDetails(prev => [...prev, { message, type, timestamp: new Date().toISOString() }]);
      };

      try {
        addDetail('Starting connection test...');

        // Test 1: Network Diagnostics
        try {
          addDetail('Running network diagnostics...');
          
          // Test internet connectivity
          const internetTest = await fetch('https://www.google.com', { 
            method: 'HEAD',
            signal: AbortSignal.timeout(5000)
          });
          addDetail('Internet connection: OK', 'success');

          // Test DNS resolution
          const dnsTest = await fetch('https://dns.google/resolve?name=qgxqjqjqjqjqjqjqjqjq.supabase.co', {
            signal: AbortSignal.timeout(5000)
          });
          const dnsData = await dnsTest.json();
          addDetail(`DNS lookup result: ${JSON.stringify(dnsData)}`, 'info');

        } catch (err) {
          addDetail(`Network diagnostics failed: ${err.message}`, 'error');
        }

        // Test 2: Direct IP Connection
        try {
          addDetail('Testing direct IP connection...');
          const response = await fetch('https://qgxqjqjqjqjqjqjqjqjq.supabase.co/rest/v1/', {
            method: 'HEAD',
            headers: {
              'apikey': supabase.supabaseKey,
              'Authorization': `Bearer ${supabase.supabaseKey}`
            },
            signal: AbortSignal.timeout(5000)
          });
          addDetail(`Direct connection successful: ${response.status}`, 'success');
        } catch (err) {
          addDetail(`Direct connection failed: ${err.message}`, 'error');
        }

        // Test 3: Supabase Client
        try {
          addDetail('Testing Supabase client...');
          const { data, error } = await Promise.race([
            supabase.from('health_check').select('*').limit(1),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Supabase client timeout')), 5000)
            )
          ]);
          
          if (error) throw error;
          addDetail('Supabase client test successful', 'success');
        } catch (err) {
          addDetail(`Supabase client test failed: ${err.message}`, 'error');
        }

        setStatus('Connection test completed');
      } catch (err) {
        console.error('Connection test error:', err);
        setError(err.message);
        setStatus('Connection failed');
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-dark-bg-tertiary rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Connection Test</h2>
      <div className="space-y-2">
        <p>Status: <span className={error ? 'text-red-500' : 'text-green-500'}>{status}</span></p>
        {error && (
          <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        )}
        <div className="mt-4">
          <h3 className="font-medium mb-2">Connection Details:</h3>
          <pre className="bg-gray-50 dark:bg-dark-bg-secondary p-2 rounded text-sm overflow-x-auto">
            {JSON.stringify({
              url: supabase.supabaseUrl,
              key: supabase.supabaseKey?.substring(0, 10) + '...',
            }, null, 2)}
          </pre>
        </div>
        <div className="mt-4">
          <h3 className="font-medium mb-2">Test Results:</h3>
          <div className="space-y-1">
            {details.map((detail, index) => (
              <div 
                key={index}
                className={`p-2 rounded text-sm ${
                  detail.type === 'error' 
                    ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                    : detail.type === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                    : 'bg-gray-50 dark:bg-gray-900/20'
                }`}
              >
                {detail.message}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-medium mb-2">Troubleshooting Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Check if you can access <a href="https://qgxqjqjqjqjqjqjqjqjq.supabase.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Supabase URL</a> directly in your browser</li>
            <li>Verify your internet connection is working</li>
            <li>Check if your DNS settings are correct</li>
            <li>Try using a different network (e.g., mobile hotspot)</li>
            <li>Check if your firewall is blocking the connection</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ConnectionTest; 