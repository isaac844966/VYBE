import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiMail, FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { sendPasswordReset } from '../../firebase/authService';
import { forgotPasswordSchema } from '../../utils/validation';
import { ROUTES } from '../../constants';
import { useAuth } from '../../context/AuthContext';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await sendPasswordReset(data.email);

    if (result.success) {
      setSubmittedEmail(data.email);
      setIsSubmitted(true);
      toast.success('Password reset email sent!');
    } else {
      toast.error(result.error || 'Failed to send reset email');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-surface pt-20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h1 className="text-3xl font-bold text-text mb-2">Reset Password</h1>
              <p className="text-muted">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className="input-field pl-10"
                  />
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                </div>
                {errors.email && (
                  <p className="text-danger text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
                {!isLoading && <FiArrowRight size={18} />}
              </button>
            </form>

            {/* Back to Login */}
            <div className="text-center">
              <Link
                to={ROUTES.LOGIN}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-smooth"
              >
                <FiArrowLeft size={18} />
                Back to login
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6"
              >
                <FiCheckCircle className="text-success" size={40} />
              </motion.div>

              <h1 className="text-2xl font-bold text-text mb-2">Check your email</h1>
              <p className="text-muted mb-2">
                We've sent a password reset link to
              </p>
              <p className="font-semibold text-text mb-6">{submittedEmail}</p>

              <div className="bg-surface rounded-xl p-4 mb-6">
                <p className="text-sm text-muted">
                  Click the link in the email to reset your password. The link will expire in 1 hour.
                </p>
              </div>

              {/* Back to Login */}
              <Link
                to={ROUTES.LOGIN}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Back to login
              </Link>

              {/* Resend */}
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-3 text-primary font-semibold hover:text-secondary transition-smooth text-sm"
              >
                Didn't receive the email? Try again
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPassword;