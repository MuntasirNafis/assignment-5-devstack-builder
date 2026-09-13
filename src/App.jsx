import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans text-slate-800">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
              DS
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Dev<span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="text-pink-600 font-semibold">Home</a>
            <a href="#" className="hover:text-slate-900">Technologies</a>
            <a href="#" className="hover:text-slate-900">Projects</a>
            <a href="#" className="hover:text-slate-900">About</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <button className="px-4 py-2 font-medium text-slate-700 hover:text-slate-900">Sign In</button>
            <button className="px-5 py-2 font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-sm hover:opacity-95 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}