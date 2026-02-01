import React from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import jusasImage from '../assets/jusas-tropical.png';
// @ts-ignore
import bipsuImage from '../assets/bipsu-dashboard.png';

export const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="flex items-center p-4 pb-3 justify-between">
          <button onClick={() => navigate(-1)} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Featured Projects</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-4 pt-4 space-y-8 max-w-lg mx-auto w-full">
        {/* Intro */}
        <div className="animate-fade-in-up">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight text-left mb-2">Selected Works</h1>
          <p className="text-text-secondary text-base font-normal leading-relaxed">
            A collection of full-stack applications, machine learning models, and system architectures designed for scale.
          </p>
        </div>

        {/* Project 1: Jusas Smoothie Tropical App */}
        <div className="animate-fade-in-up delay-100 group">
          <div className="flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-surface border border-slate-800">
            <div className="w-full h-48 bg-slate-800 relative overflow-hidden cursor-pointer" onClick={() => navigate('/project/jusas')}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: `url(${jusasImage})`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">Mobile/Web App</span>
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">UI/UX Focus</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white leading-tight">Jusas Smoothie Tropical App</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Create a smooth ordering experience for customers with menu browsing, smoothie customization, and order tracking.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">React Web</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">Tailwind CSS</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">Firebase/API</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => navigate('/project/jusas')} className="mt-2 flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all rounded-lg text-white text-sm font-medium">
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <a href="https://jusas-new.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-2 flex-shrink-0 flex items-center justify-center size-10 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] transition-all rounded-lg text-white" aria-label="Live Demo">
                   <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Bipsu Complaint System */}
        <div className="animate-fade-in-up delay-150 group">
          <div className="flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-surface border border-slate-800">
            <div className="w-full h-48 bg-slate-800 relative overflow-hidden cursor-pointer" onClick={() => navigate('/project/bipsu')}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: `url(${bipsuImage})`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">Administrative</span>
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">Web App</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white leading-tight">Bipsu Complaint System</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Enable students to submit complaints/issues, track status, and generate reports efficiently.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">React</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">Node/Express</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">MySQL</span>
              </div>
              <button onClick={() => navigate('/project/bipsu')} className="mt-2 w-full flex items-center justify-center gap-2 h-10 px-4 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] transition-all rounded-lg text-white text-sm font-medium">
                <span>View Details</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Project 2: Meat Freshness Detection */}
        <div className="animate-fade-in-up delay-[200ms] group">
          <div className="flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-surface border border-slate-800">
            <div className="w-full h-48 bg-slate-800 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqsgSUfbb8-kc63fgCrH7zL2HHVP1SSEq3dcvYhmHFuX3JFUXsRTQ2TaZ9z5v6Z3-bKVfTND6UUHRi1EFkFYg41xZnui57CUnSORoRqwhGXd0f4ys5e6hrD2X6OFgFeB6hR4HnysIZPG6-34e55HFAntGx5sR3y-Tbe2WOw1PIRKluWR0GEKnrb-2ehyGdYACZS_8LjHr7oKRALBLNq7GzjrAuiY2WzssH80RDXIyfE-AU705bcp7ACXNEduHvxI8FDbx2Hv6r9dkw")'}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">AI / ML</span>
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">Computer Vision</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white leading-tight">Meat Freshness Detection</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                AI-driven quality control using computer vision and CNNs to ensure food safety standards are met automatically.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">Python</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">TensorFlow</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">CNN</span>
              </div>
              <button className="mt-2 w-full flex items-center justify-center gap-2 h-10 px-4 bg-slate-800 hover:bg-slate-700 active:scale-[0.98] transition-all rounded-lg text-white text-sm font-medium">
                <span>View Model Architecture</span>
                <span className="material-symbols-outlined text-[18px]">visibility</span>
              </button>
            </div>
          </div>
        </div>

        {/* System Thinking Section */}
        <div className="animate-fade-in-up delay-[300ms]">
          <div className="flex items-center gap-2 mb-4 mt-2">
            <span className="material-symbols-outlined text-primary text-[24px]">schema</span>
            <h2 className="text-lg font-bold text-white">System Thinking</h2>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-surface p-6">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-base font-semibold text-white">TaskFlow Architecture</h3>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Auth Flow</span>
              </div>
              {/* Diagram */}
              <div className="flex flex-col items-center gap-4 text-center text-xs font-medium text-slate-300">
                <div className="flex items-center gap-4 w-full justify-center">
                  <div className="w-20 p-2 rounded border border-slate-600 bg-slate-800 shadow-sm">Client (React)</div>
                </div>
                {/* Arrow Down */}
                <div className="h-6 w-[1px] bg-slate-600 relative">
                   <div className="absolute -bottom-1 -left-1 w-2 h-2 border-r border-b border-slate-600 rotate-45"></div>
                </div>
                {/* Gateway */}
                <div className="flex items-center gap-4 w-full justify-center relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                  <div className="relative w-28 p-2 rounded border border-primary/50 bg-primary/10 shadow-[0_0_15px_rgba(43,43,238,0.15)] text-primary">
                    API Gateway
                  </div>
                </div>
                {/* Arrow Split */}
                <div className="flex justify-center gap-8 w-full h-6 relative">
                   <div className="h-full w-[1px] bg-slate-600 absolute left-1/2 -translate-x-1/2"></div>
                   <div className="absolute w-24 h-[1px] bg-slate-600 top-1/2 left-1/2 -translate-x-1/2"></div>
                   <div className="absolute bottom-0 left-[calc(50%-3rem)] h-3 w-[1px] bg-slate-600"></div>
                   <div className="absolute bottom-0 right-[calc(50%-3rem)] h-3 w-[1px] bg-slate-600"></div>
                </div>
                {/* Services */}
                <div className="flex justify-center gap-4 w-full">
                  <div className="w-20 p-2 rounded border border-slate-600 bg-slate-800 shadow-sm">Auth Svc</div>
                  <div className="w-20 p-2 rounded border border-slate-600 bg-slate-800 shadow-sm">Task Svc</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-text-secondary leading-relaxed">
                  Decoupled authentication service using JWTs and Redis for session management, ensuring stateless scalability across microservices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: TaskFlow */}
        <div className="animate-fade-in-up delay-[400ms] group">
          <div className="flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-surface border border-slate-800">
            <div className="w-full h-48 bg-slate-800 relative overflow-hidden">
               <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD65qbVlq9ih7vnuTIGMlWlXf-LBILs3aj1Bb-jRGUAi7nx_MITMk94bxthcnvVRbKN3d4ShtWifuKVyqj3SjOQTq-h0E_X042LVPhKXfWT5QMZLl49ps4slTVI0RKuP6Z42odwXG9OQrPOSUtxCDHfQpewtQCYscKAhyXFG0toY7cSTv4yqsu_vuiAeL7_EnJcrlyBW_w5yBM8-NlJJ2HFexDhEeyunMEJUx9imkXhW3ZrsNwP_UsqRqpf2-ExAKIhiU5z3HTwVdT0")'}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">SaaS</span>
                <span className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm text-white rounded-md border border-white/10">Productivity</span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white leading-tight">TaskFlow</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Scalable project management for remote teams featuring real-time updates via WebSockets.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">React</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">Socket.io</span>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md">PostgreSQL</span>
              </div>
              <button className="mt-2 w-full flex items-center justify-center gap-2 h-10 px-4 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all rounded-lg text-white text-sm font-medium">
                <span>View Case Study</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
