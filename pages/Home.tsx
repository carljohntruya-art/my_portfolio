import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background-dark text-white overflow-hidden pb-20">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-20%] w-[400px] h-[400px] bg-purple-900/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background-dark/70 border-b border-white/5">
        <h2 className="text-xl font-bold leading-tight tracking-tight flex-1">CJ.dev</h2>
        <div className="flex items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 text-white hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 pt-8 pb-12 w-full max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl z-10">
        {/* Intro */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">Available for hire</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Full-Stack</span> Experiences
          </h1>
          <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-md">
            Computer Science Student & Full-Stack Developer focused on clean UI, scalable backends, and bridging the gap between theory and product.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <button 
            onClick={() => navigate(RoutePath.PROJECTS)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold tracking-wide shadow-lg shadow-primary/25 transition-all transform active:scale-95"
          >
            <span>View Projects</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <button 
            onClick={() => navigate(RoutePath.CONTACT)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-base font-bold tracking-wide backdrop-blur-sm transition-all active:scale-95"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </button>
        </div>

        {/* Core Competencies Card */}
        <div className="relative w-full rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-white/20 to-white/0 mb-12 shadow-2xl shadow-black/20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="relative flex flex-col items-start justify-end rounded-2xl bg-white/5 backdrop-blur-xl p-6 md:p-8 h-full">
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <span className="material-symbols-outlined text-[80px] text-white">code</span>
            </div>
            <div className="relative z-10 w-full">
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Core Competencies</p>
              <h3 className="text-2xl font-bold text-white mb-4">Modern Engineering Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-blue-400 mb-1">data_object</span>
                  <span className="text-xs font-medium text-slate-300">React</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-green-400 mb-1">dns</span>
                  <span className="text-xs font-medium text-slate-300">Node.js</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-orange-400 mb-1">cloud</span>
                  <span className="text-xs font-medium text-slate-300">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
            <h2 className="text-xl font-bold text-white whitespace-nowrap">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
          <div className="bg-[#151528] rounded-2xl p-6 shadow-sm border border-white/5">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex-shrink-0 overflow-hidden">
                  <img 
                    alt="CJ Avatar" 
                    className="w-full h-full object-cover" 
                    src="./assets/cjj.jpg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">CJ</h3>
                  <p className="text-sm text-primary font-medium">CS Student @Biliran Province State University</p>
                </div>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                I don't just write code; I build systems. Currently pursuing my CS degree, I blend academic fundamentals like algorithms and data structures with modern full-stack development.
              </p>
              <div className="mt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Python', 'PostgreSQL', 'Docker', 'Tailwind', 'Next.js'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
