// Validation Schemas
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  rememberMe: yup.boolean(),
});

export const registerSchema = yup.object().shape({
  displayName: yup.string().required('Full name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/[0-9]/, 'Password must contain a number'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  agreeToTerms: yup.boolean().oneOf([true], 'You must agree to the terms'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});
