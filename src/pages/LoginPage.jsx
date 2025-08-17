import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
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
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=500"
              className="mx-auto h-12 w-auto mb-4"
            />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white text-center">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Not a member?{' '}
              <a href="#" className="font-semibold text-[#4FD1C5] hover:text-[#168A8A] transition-colors duration-200">
                Start a 14 day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] border border-transparent focus:border-[#168A8A] transition"
              />
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
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] border border-transparent focus:border-[#168A8A] transition"
              />
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
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-[#168A8A] to-[#0B2C36] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-[#0B2C36] hover:to-[#168A8A] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2 cursor-pointer"
              >
                Sign in
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
                className="flex items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#168A8A] hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 48 48"><g><path fill="#FFC107" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.7 7-11.3 7-6.6 0-12-5.4-12-12s5.4-12 12-12c2.6 0 5 .8 7 2.3l5.7-5.7C33.3 5.1 28.9 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.4-4z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c2.6 0 5 .8 7 2.3l5.7-5.7C33.3 5.1 28.9 3 24 3c-7.2 0-13.4 3.8-17 9.7z"/><path fill="#4CAF50" d="M24 43c4.8 0 9.3-1.6 12.8-4.4l-5.9-4.8C28.7 35.3 26.4 36 24 36c-5.6 0-10.3-3.6-12-8.5l-6.6 5.1C7.9 39.2 15.4 43 24 43z"/><path fill="#1976D2" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.1 3-3.5 5.3-6.3 6.5l6.6 5.1C41.1 37.2 44 30.7 44 24c0-5.523-4.477-10-10-10z"/></g></svg>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  