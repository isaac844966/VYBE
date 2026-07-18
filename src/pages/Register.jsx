import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { registerWithEmail } from '../../firebase/authService';
import { registerSchema } from '../../utils/validation';
import { ROUTES } from '../../constants';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    setIsLoading(true);
    const result = await registerWithEmail(data.email, data.password, data.displayName);

    if (result.success) {
      toast.success('Account created successfully!');
      navigate(ROUTES.HOME);
    } else {
      toast.error(result.error || 'Registration failed');
    }
    setIsLoading(false);
  };

  const PasswordStrength = () => {
    if (!password) return null;

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    return (
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          {isLongEnough ? (
            <FiCheck className="text-success" size={16} />
          ) : (
            <div className="w-4 h-4 rounded-full border border-muted" />
          )}
          <span className={isLongEnough ? 'text-success' : 'text-muted'}>
            At least 8 characters
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {hasUppercase ? (
            <FiCheck className="text-success" size={16} />
          ) : (
            <div className="w-4 h-4 rounded-full border border-muted" />
          )}
          <span className={hasUppercase ? 'text-success' : 'text-muted'}>
            One uppercase letter
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {hasNumber ? (
            <FiCheck className="text-success" size={16} />
          ) : (
            <div className="w-4 h-4 rounded-full border border-muted" />
          )}
          <span className={hasNumber ? 'text-success' : 'text-muted'}>
            One number
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-surface pt-20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
          <h1 className="text-3xl font-bold text-text mb-2">Join Vybe</h1>
          <p className="text-muted">Create your account and start streaming</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
          {/* Display Name */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                {...register('displayName')}
                type="text"
                placeholder="John Doe"
                className="input-field pl-10"
              />
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
            </div>
            {errors.displayName && (
              <p className="text-danger text-sm mt-1">{errors.displayName.message}</p>
            )}
          </div>

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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Password
            </label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="input-field pl-10 pr-10"
              />
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text transition-smooth"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-danger text-sm mt-1">{errors.password.message}</p>
            )}
            <PasswordStrength />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register('confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="input-field pl-10 pr-10"
              />
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text transition-smooth"
              >
                {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-danger text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              {...register('agreeToTerms')}
              type="checkbox"
              className="w-4 h-4 rounded border border-border mt-1"
            />
            <span className="text-sm text-muted">
              I agree to the{' '}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-danger text-sm">{errors.agreeToTerms.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
            {!isLoading && <FiArrowRight size={18} />}
          </button>
        </form>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-muted">
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className="text-primary font-semibold hover:text-secondary transition-smooth">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;