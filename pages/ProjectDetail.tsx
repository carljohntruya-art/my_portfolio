import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SystemFlow } from '../components/jusas/SystemFlow';
import { Wireframes } from '../components/jusas/Wireframes';
import { DatabaseSchema } from '../components/jusas/DatabaseSchema';
// @ts-ignore
import bipsuImage from '../assets/bipsu-dashboard.png';
// @ts-ignore
import jusasImage from '../assets/jusas-tropical.png';

export const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'Customer' | 'Admin'>('Customer');

  // If specific project is Jusas, render the custom layout
  if (id === 'jusas') {
    return (
      <div className="bg-background-dark min-h-screen flex flex-col font-display text-white transition-colors duration-200 pb-24">
         {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center justify-between p-4 max-w-lg mx-auto">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">arrow_back</span>
            </button>
            <h2 className="text-base font-bold leading-tight tracking-tight opacity-100 transition-opacity duration-300">Project Case Study</h2>
             {/* GitHub Button - Mobile Optimized */}
            <a href="https://github.com/carljohntruya-art/Jusas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-10 rounded-full hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">code</span>
            </a>
          </div>
        </header>

        <main className="flex-1 w-full max-w-lg mx-auto">
          {/* Project Title Area */}
          <div className="px-5 pt-6 pb-2">
            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">Mobile/Web App</span>
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider">Live Demo</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white leading-[1.1]">Jusas Smoothie Tropical App</h1>
              <p className="text-gray-400 text-base mt-2 leading-relaxed">
                 Create a smooth ordering experience for customers of Jusas Smoothie Tropical, with menu browsing, smoothie customization, and order tracking.
              </p>
            </div>
            
            {/* Tech Pills */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {['React Web', 'Tailwind', 'Firebase/API'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-slate-800 shadow-sm whitespace-nowrap text-sm font-medium text-gray-300">
                  <span className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'}`}></span> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="px-5 mb-6">
            <img src={jusasImage} alt="Jusas App UI" className="w-full rounded-xl border border-slate-800 shadow-lg" />
          </div>

          <div className="h-px bg-slate-800 mx-5 my-2"></div>

          {/* Visual Content: System Flow */}
          <div className="px-5 mt-4">
              <SystemFlow />
          </div>

          <div className="h-px bg-slate-800 mx-5 my-6"></div>

          {/* Visual Content: Wireframes */}
          <div className="px-5">
             <Wireframes />
          </div>

          <div className="h-px bg-slate-800 mx-5 my-6"></div>

          {/* Visual Content: Database */}
           <div className="px-5">
             <DatabaseSchema />
          </div>

          {/* Feature Highlights & CTA */}
          <div className="px-5 mt-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-4">Challenges & Solutions</h3>
            <div className="bg-surface border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
               <div>
                  <h4 className="font-bold text-white text-sm">📱 Optimized UI</h4>
                  <p className="text-gray-400 text-sm mt-1">Designed for low-end devices ensuring smooth interactions and accessibility.</p>
               </div>
               <div>
                  <h4 className="font-bold text-white text-sm">⚡ Fast Image Load</h4>
                  <p className="text-gray-400 text-sm mt-1">Implemented lazy loading and optimized assets for instant visual feedback on mobile networks.</p>
               </div>
               <div>
                  <h4 className="font-bold text-white text-sm">🔄 Seamless Workflow</h4>
                  <p className="text-gray-400 text-sm mt-1">Streamlined the ordering process to minimize clicks and reduce abandonment rates.</p>
               </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
               <a href="https://github.com/carljohntruya-art/Jusas" target="_blank" rel="noopener noreferrer" className="w-full h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center gap-2 transition-colors border border-slate-700 text-white font-bold">
                 <span className="material-symbols-outlined">code</span> View Source Code
               </a>
               <a href="https://jusas-new.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full h-12 bg-primary hover:bg-blue-600 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20 text-white font-bold">
                 <span className="material-symbols-outlined">rocket_launch</span> Visit Live Demo
               </a>
            </div>
          </div>

        </main>
      </div>
    );
  }

  // Bipsu Complaint System
  if (id === 'bipsu') {
    return (
      <div className="bg-background-dark min-h-screen flex flex-col font-display text-white transition-colors duration-200 pb-24">
         {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center justify-between p-4 max-w-lg mx-auto">
            <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-800 transition-colors group">
              <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">arrow_back</span>
            </button>
            <h2 className="text-base font-bold leading-tight tracking-tight opacity-100 transition-opacity duration-300">Project Case Study</h2>
          </div>
        </header>

        <main className="flex-1 w-full max-w-lg mx-auto">
          {/* Project Title Area */}
          <div className="px-5 pt-6 pb-2">
            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">Web Application</span>
                <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider">Admin System</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white leading-[1.1]">Bipsu Complaint System</h1>
              <p className="text-gray-400 text-base mt-2 leading-relaxed">
                Enable students to submit complaints/issues, track status, and generate reports efficiently.
              </p>
            </div>
            
            {/* Tech Pills */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {['React', 'Node/Express', 'MySQL', 'JWT Auth', 'Tailwind'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-slate-800 shadow-sm whitespace-nowrap text-sm font-medium text-gray-300">
                  <span className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'}`}></span> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="px-5 mb-6">
            <img src={bipsuImage} alt="Bipsu Dashboard UI" className="w-full rounded-xl border border-slate-800 shadow-lg" />
          </div>

          {/* Feature Highlights & Challenges */}
          <div className="px-5 mt-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 mb-8">
                <li>Complaint submission form with categorization</li>
                <li>Status tracking dashboard for students and admins</li>
                <li>Notification system and reporting tools</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">Challenges & Solutions</h3>
            <div className="bg-surface border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
               <div>
                  <h4 className="font-bold text-white text-sm">🔒 Secure Authentication</h4>
                  <p className="text-gray-400 text-sm mt-1">Implemented JWT-based authentication to ensure secure access to student and admin portals.</p>
               </div>
               <div>
                  <h4 className="font-bold text-white text-sm">⚡ Real-time Updates</h4>
                  <p className="text-gray-400 text-sm mt-1">Used efficient polling/websockets to reflect complaint status changes instantly.</p>
               </div>
               <div>
                  <h4 className="font-bold text-white text-sm">📊 User-Friendly Dashboard</h4>
                  <p className="text-gray-400 text-sm mt-1">Designed a clean, intuitive interface for admins to manage high volumes of reports.</p>
               </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
               <button className="w-full h-12 bg-slate-800/50 cursor-not-allowed rounded-lg flex items-center justify-center gap-2 transition-colors border border-slate-700 text-gray-500 font-bold">
                 <span className="material-symbols-outlined">lock</span> Source Private
               </button>
            </div>
          </div>

        </main>
      </div>
    );
  }

  // Fallback for other projects or unknown IDs
  return (
    <div className="bg-background-dark min-h-screen flex items-center justify-center flex-col gap-4 text-white">
      <h1 className="text-2xl font-bold">Project Not Found</h1>
      <button onClick={() => navigate(-1)} className="text-primary hover:underline">
        Go Back
      </button>
    </div>
  );
};
