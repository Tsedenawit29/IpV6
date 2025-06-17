import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { TrashIcon, EnvelopeIcon, UserIcon, ChatBubbleBottomCenterTextIcon, QuestionMarkCircleIcon, CalendarIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('ipv6_contact_messages')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error } = await supabase
        .from('ipv6_contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Message deleted successfully');
      fetchMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message');
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
            Contact Messages
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-dark-text-secondary">
            View and manage messages from your contact form
          </p>
        </div>
      </div>

      <div className="bg-box-bg dark:bg-box-bg-dark rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-border">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            All Messages
          </h2>
          {messages.length === 0 ? (
            <p className="text-gray-500 dark:text-dark-text-secondary">No contact messages found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {messages.map((message) => (
                <div key={message.id} className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-6 flex flex-col">
                  <div className="flex-grow mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <QuestionMarkCircleIcon className="h-5 w-5 mr-2 text-primary" />
                      {message.subject}
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-3">
                      {message.message}
                    </p>
                    <div className="text-gray-500 dark:text-dark-text-secondary text-xs space-y-1">
                      <p className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        From: {message.name}
                      </p>
                      <p className="flex items-center">
                        <EnvelopeIcon className="h-4 w-4 mr-1" />

                        Email: <a href={`mailto:${message.email}`} className="text-[#00C389] hover:underline">{message.email}</a>
                      </p>
                      <p className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        Received: {new Date(message.submitted_at).toLocaleDateString()} at {new Date(message.submitted_at).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="text-red-600 hover:text-red-800 flex items-center"
                    >
                      <TrashIcon className="h-5 w-5 mr-1" />
                      Delete
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

export default ContactMessages; 