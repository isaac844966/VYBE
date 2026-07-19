import React from 'react';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-surface flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.h1
          className="text-9xl font-bold text-primary mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>

        <h2 className="text-3xl font-bold text-text mb-2">Page Not Found</h2>
        <p className="text-muted mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link to={ROUTES.HOME} className="btn-primary inline-flex items-center gap-2">
          <FiHome size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;