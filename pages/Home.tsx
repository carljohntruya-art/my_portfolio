import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { Badge } from '../components/UI/Badge';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background text-white overflow-hidden pb-20 font-display">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-20%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/80 border-b border-white/5">
        <h2 className="text-xl font-bold leading-tight tracking-tight flex-1">CJ.dev</h2>
        <div className="flex items-center justify-end">
          <Button variant="ghost" size="sm" className="!p-2">
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 pt-12 pb-16 w-full max-w-4xl mx-auto z-10 gap-16">
        {/* Intro */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">Available for hire</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Full-Stack</span> Experiences
          </h1>
          <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-xl mb-8">
            Computer Science Student & Full-Stack Developer focused on clean UI, scalable backends, and bridging the gap between theory and product.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button 
              onClick={() => navigate(RoutePath.PROJECTS)}
              size="lg"
              rightIcon={<span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
              className="px-8 shadow-glow"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => navigate(RoutePath.CONTACT)}
              variant="secondary"
              size="lg"
              leftIcon={<span className="material-symbols-outlined text-[20px]">mail</span>}
              className="px-8"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Core Competencies Card */}
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="mb-4">
               <p className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Capabilities</p>
               <h3 className="text-2xl font-bold text-white">Modern Engineering Stack</h3>
            </div>
            
            <Card className="grid grid-cols-1 md:grid-cols-3 gap-4" hoverEffect>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-accent-cyan mb-2 text-3xl">data_object</span>
                  <span className="text-sm font-medium text-slate-300">Frontend Architecture</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-green-400 mb-2 text-3xl">dns</span>
                  <span className="text-sm font-medium text-slate-300">Backend Systems</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-accent-pink mb-2 text-3xl">cloud</span>
                  <span className="text-sm font-medium text-slate-300">Cloud Infrastructure</span>
                </div>
            </Card>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center gap-4 text-text-muted">
            <div className="h-px flex-1 bg-border"></div>
            <h2 className="text-sm font-bold uppercase tracking-widest">About Me</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          
          <Card className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-surface-lighter ring-2 ring-border flex-shrink-0 overflow-hidden">
                  <img 
                    alt="CJ Avatar" 
                    className="w-full h-full object-cover" 
                    src="./assets/cjj.jpg"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=CJ&background=2b2bee&color=fff';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CJ</h3>
                  <p className="text-sm text-primary font-medium">CS Student @Biliran Province State University</p>
                </div>
              </div>
              <p className="text-text-secondary text-base leading-loose">
                I don't just write code; I build systems. Currently pursuing my CS degree, I blend academic fundamentals like algorithms and data structures with modern full-stack development.
              </p>
              
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
