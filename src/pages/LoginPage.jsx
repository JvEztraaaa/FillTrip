import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Check for success message from signup
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear the message from navigation state
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await login({
        email: formData.email,
        password: formData.password
      });

      if (result.success) {
        navigate('/map');
      } else {
        setSubmitError(result.error);
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-gray-900 overflow-hidden">
      {/* Left: Image Section - Hidden on smaller screens */}
      <div className="hidden lg:flex lg:w-7/12 w-full h-64 lg:h-auto items-center justify-center relative">
        <img
          src="/images/login-bg.avif"
          alt="Workspace"
          className="object-cover w-full h-full lg:rounded-none rounded-b-2xl shadow-lg opacity-60"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Right: Login Form Section - Full width on smaller screens */}
      <div
        className="flex w-full lg:w-5/12 items-center justify-center py-12 px-6 lg:px-16 z-10 relative bg-gray-900"
        style={{
          background: window.innerWidth >= 1024 ? 'linear-gradient(to top, rgba(22,138,138,0.6) 0%, rgba(22,138,138,0.4) 20%, rgba(22,138,138,0.2) 40%, rgba(22,138,138,0.1) 60%, transparent 80%)' : 'none',
        }}
      >
        {/* Back to Home positioned at top left */}
        <div className="absolute top-6 left-6 lg:left-8">
          <Link to="/" className="text-sm text-[#4FD1C5] hover:text-[#168A8A] font-semibold transition-colors duration-200">
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <img
              alt="Your Company"
              src="/images/logo.svg"
              className="mx-auto h-14 w-auto mb-4"
            />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white text-center">Log in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              New to FillTrip?{' '}
              <Link to="/signup" className="font-semibold text-[#4FD1C5] hover:text-[#168A8A] transition-colors duration-200">
                Create an account.
              </Link>
            </p>
            {successMessage && (
              <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-md p-3">
                <p className="text-green-400 text-sm text-center">{successMessage}</p>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className={`mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] border transition ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#168A8A]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                  Password
                </label>
                <a href="#" className="text-sm font-semibold text-[#4FD1C5] hover:text-[#168A8A] transition-colors duration-200">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className={`mt-2 block w-full rounded-md bg-white/5 px-3 py-2 pr-10 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] border transition ${
                    errors.password ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-[#168A8A]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#4FD1C5] transition-colors duration-200"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[#168A8A] focus:ring-[#4FD1C5]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            {submitError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3">
                <p className="text-red-400 text-sm">{submitError}</p>
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-[#168A8A] to-[#0B2C36] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-[#0B2C36] hover:to-[#168A8A] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-700" />
              <span className="mx-4 text-gray-400 text-sm">Or continue with</span>
              <div className="flex-grow border-t border-gray-700" />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#168A8A] hover:text-white cursor-pointer"
              >
                <svg className="h-5 w-5" viewBox="0 0 48 48"><g><path fill="#FFC107" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.7 7-11.3 7-6.6 0-12-5.4-12-12s5.4-12 12-12c2.6 0 5 .8 7 2.3l5.7-5.7C33.3 5.1 28.9 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.4-4z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c2.6 0 5 .8 7 2.3l5.7-5.7C33.3 5.1 28.9 3 24 3c-7.2 0-13.4 3.8-17 9.7z" /><path fill="#4CAF50" d="M24 43c4.8 0 9.3-1.6 12.8-4.4l-5.9-4.8C28.7 35.3 26.4 36 24 36c-5.6 0-10.3-3.6-12-8.5l-6.6 5.1C7.9 39.2 15.4 43 24 43z" /><path fill="#1976D2" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.1 3-3.5 5.3-6.3 6.5l6.6 5.1C41.1 37.2 44 30.7 44 24c0-5.523-4.477-10-10-10z" /></g></svg>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
