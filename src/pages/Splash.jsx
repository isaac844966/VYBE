import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { useAuth } from '../../context/AuthContext';

const Splash = () => {
  const { isAuthenticated } = useAuth();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-surface flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setIsAnimationComplete(true)}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl mb-8 shadow-soft-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white font-bold text-5xl">V</span>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-text mb-4">
          Vybe
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-xl text-muted mb-8">
          Stream Your Vibe
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted mb-12 leading-relaxed"
        >
          Discover, stream, and share your favorite music. Premium quality, infinite possibilities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={isAuthenticated ? ROUTES.HOME : ROUTES.LANDING}
            className="btn-primary inline-flex items-center justify-center gap-2 sm:text-lg"
          >
            Get Started
            <FiArrowRight size={20} />
          </Link>
          <Link
            to={ROUTES.LOGIN}
            className="btn-secondary inline-flex items-center justify-center gap-2 sm:text-lg"
          >
            Sign In
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Splash;