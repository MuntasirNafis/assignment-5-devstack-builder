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

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-6 text-gray-500 text-base leading-relaxed max-w-lg">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-sm hover:opacity-95 transition-all">
                Explore Technologies
              </button>
              <button className="px-6 py-3 font-medium text-slate-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3486380-2917522.png"
                alt="Stack Illustration"
                className="relative z-10 max-w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies data:", err);
        setLoading(false);
      });
  }, []);

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

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-6 text-gray-500 text-base leading-relaxed max-w-lg">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-sm hover:opacity-95 transition-all">
                Explore Technologies
              </button>
              <button className="px-6 py-3 font-medium text-slate-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3486380-2917522.png"
                alt="Stack Illustration"
                className="relative z-10 max-w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Pick one technology per category to build your ideal stack.</p>
        </div>

        {loading ? (
          <div className="py-20 text-center font-medium text-gray-400">Loading technologies...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Technology Cards will go here */}
            </div>
            <div className="lg:col-span-1">
              {/* Sidebar will go here */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 

import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies data:", err);
        setLoading(false);
      });
  }, []);

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

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-6 text-gray-500 text-base leading-relaxed max-w-lg">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-sm hover:opacity-95 transition-all">
                Explore Technologies
              </button>
              <button className="px-6 py-3 font-medium text-slate-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3486380-2917522.png"
                alt="Stack Illustration"
                className="relative z-10 max-w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Pick one technology per category to build your ideal stack.</p>
        </div>

        {loading ? (
          <div className="py-20 text-center font-medium text-gray-400">Loading technologies...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = selectedStack.some((item) => item.id === tech.id);
                return (
                  <div key={tech.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 p-1">
                          <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
                        </div>
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${tech.badgeColor}`}>
                          {tech.badge}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
                      <p className="mt-2 text-gray-500 text-xs leading-relaxed line-clamp-3">
                        {tech.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">{tech.category}</span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">{tech.difficulty}</span>
                        </div>
                        <span className="flex items-center gap-0.5 text-amber-500 font-semibold">
                          ★ {tech.rating}
                        </span>
                      </div>
                    </div>
                    <button
                      disabled={isAdded}
                      className={`mt-5 w-full py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isAdded
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-[#0f172a] text-white hover:bg-slate-800'
                      }`}
                    >
                      {isAdded ? 'Added to Stack' : 'Add to Stack'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-1">
              {/* Sidebar Placeholder */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


