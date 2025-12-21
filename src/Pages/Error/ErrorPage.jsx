import React from 'react';
import { Link } from 'react-router';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 transition-colors duration-300">
      <div className="max-w-md w-full text-center">
        {/* Animated 404 Header */}
        <div className="relative">
          <h1 className="text-[12rem] font-black text-slate-200 dark:text-slate-900 leading-none select-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">
            Oops! Lost in the Stacks?
          </p>
        </div>

        {/* Message */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Page Not Found
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            The book you're looking for might have been mislabeled or moved to a different shelf in our digital library.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-all"
          >
            <FaArrowLeft /> Go Back
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all"
          >
            <FaHome /> Back to Home
          </Link>
        </div>

        {/* Visual Decoration (Optional) */}
        <div className="mt-16 grid grid-cols-3 gap-4 opacity-20 dark:opacity-10">
          <div className="h-1 bg-slate-400 rounded-full"></div>
          <div className="h-1 bg-indigo-500 rounded-full"></div>
          <div className="h-1 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;