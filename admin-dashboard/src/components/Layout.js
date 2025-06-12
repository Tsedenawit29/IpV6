import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <div className="w-64 bg-primary-light dark:bg-primary-dark shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-secondary-light dark:text-secondary-dark">Admin Dashboard</h1>
        </div>
        <nav className="mt-4">
          <Link to="/dashboard" className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/our-work" className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white transition-colors">
            Our Work
          </Link>
          <Link to="/resources" className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white transition-colors">
            Resources
          </Link>
          <Link to="/events" className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white transition-colors">
            Events
          </Link>
          <Link to="/news" className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white transition-colors">
            News
          </Link>
          <Link to="/contact-messages" className="block px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white transition-colors">
            Contact Messages
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-text-light dark:text-text-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 