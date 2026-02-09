import React from 'react';
import { NavBar } from '../components/NavBar';
import { Card } from '../components/UI/Card';
import { Badge } from '../components/UI/Badge';

export const TechStack: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background pb-24 font-display">
      {/* Header */}
      <NavBar title="Tech Stack" showBack={true} showMenu={false} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 pt-8 space-y-12 max-w-4xl mx-auto w-full z-10">
        
        {/* Intro */}
        <div className="animate-fade-in-up">
            <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight text-left mb-2">CJ's Arsenal</h1>
            <p className="text-text-secondary text-base font-normal leading-relaxed">
              Full-Stack Developer <span className="text-primary mx-1">•</span> Specialized in scalable architectures
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-100">
          
          {/* Frontend Card */}
          <div className="col-span-1 md:col-span-2">
            <Card hoverEffect className="h-full relative overflow-hidden bg-surface group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-xl inline-flex items-center justify-center text-white border border-white/5">
                      <span className="material-symbols-outlined text-accent-cyan text-[28px]">devices</span>
                    </div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-widest border border-white/5 px-2 py-1 rounded">Client Side</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-4">Frontend Architecture</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React Native', 'Next.js 14', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                         <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
            </Card>
          </div>

          {/* Backend Card */}
          <div className="col-span-1">
            <Card hoverEffect className="h-full relative overflow-hidden bg-surface group">
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-pink/10 blur-[60px] rounded-full pointer-events-none"></div>
                 <div className="relative z-10 flex flex-col h-full gap-5">
                   <div className="p-3 bg-white/5 rounded-xl w-fit text-white border border-white/5">
                     <span className="material-symbols-outlined text-accent-pink text-[28px]">dns</span>
                   </div>
                   <div>
                     <h3 className="text-white text-lg font-bold leading-tight mb-3">Backend & API</h3>
                     <div className="flex flex-col gap-3">
                       <div className="flex items-center gap-3 text-sm text-text-secondary"><span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span> Node.js</div>
                       <div className="flex items-center gap-3 text-sm text-text-secondary"><span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></span> Go (Golang)</div>
                       <div className="flex items-center gap-3 text-sm text-text-secondary"><span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span> GraphQL</div>
                     </div>
                   </div>
                 </div>
            </Card>
          </div>

          {/* Data Store Card */}
          <div className="col-span-1">
             <Card hoverEffect className="h-full relative overflow-hidden bg-surface group">
                 <div className="relative z-10 flex flex-col h-full gap-5">
                   <div className="p-3 bg-white/5 rounded-xl w-fit text-white border border-white/5">
                     <span className="material-symbols-outlined text-yellow-400 text-[28px]">database</span>
                   </div>
                   <div>
                     <h3 className="text-white text-lg font-bold leading-tight mb-3">Data Store</h3>
                     <div className="flex flex-wrap gap-2">
                       {['PostgreSQL', 'Redis', 'Prisma'].map(t => (
                          <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                       ))}
                     </div>
                   </div>
                 </div>
            </Card>
          </div>

          {/* ML Card */}
          <div className="col-span-1 md:col-span-2">
            <Card noPadding hoverEffect className="h-40 relative group overflow-hidden bg-surface">
                <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6ElAk02JZ222P5AtymlWjgyWBnHkIissOtcXaKSO35kFht2Di4bRdnAOk_L2ROVSBnNBCpae5TO4kFap58MAYn_1Il6kceI4g-YIuVnxYS7nTwsN3to0gOWqoSql9H1-I21fjtT4DlHGE0jASPkAiWLjPdRog6zySZyYSPOuSIeioJfqOxEYtZb8krYcDruVMnaTSrTC1ULQSVwRqkH-0KuACiIiSGCXfdgvKmlJlh1ar_7rq0tQm5WfvBmlCjhTZAzYQwejMQvGc")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10"></div>
                <div className="relative z-20 p-6 flex items-center justify-between h-full">
                   <div className="flex flex-col gap-1">
                     <h3 className="text-white text-xl font-bold">Machine Learning</h3>
                     <p className="text-text-secondary text-sm">Python • TensorFlow • Pandas</p>
                   </div>
                   <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-glow-sm">
                     <span className="material-symbols-outlined text-white text-[28px]">psychology</span>
                   </div>
                </div>
            </Card>
          </div>
        </div>

        {/* Security Section */}
        <div className="flex flex-col gap-6 animate-fade-in-up delay-[200ms]">
          <div className="flex items-center gap-4">
             <h2 className="text-white tracking-tight text-xl font-bold whitespace-nowrap">Security & Best Practices</h2>
             <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Card className="flex items-center gap-4 !p-4" hoverEffect>
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-[24px]">security</span>
                </div>
                <div>
                   <p className="text-white text-base font-bold">RBAC Implementation</p>
                   <p className="text-text-secondary text-xs">Granular Role-Based Access Control</p>
                </div>
             </Card>
             <Card className="flex items-center gap-4 !p-4" hoverEffect>
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-[24px]">vpn_key</span>
                </div>
                <div>
                   <p className="text-white text-base font-bold">JWT Authentication</p>
                   <p className="text-text-secondary text-xs">Stateless Scalable Sessions</p>
                </div>
             </Card>
          </div>
          
          {/* Code Snippet - Use a Card wrapper to match style */}
          <Card noPadding className="w-full bg-[#0d0d16] border-white/10 !shadow-2xl overflow-hidden group">
             <div className="bg-[#1a1a26] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="text-xs font-mono text-white/30">auth.middleware.ts</div>
             </div>
             <div className="p-6 overflow-x-auto">
               <pre className="font-mono text-xs leading-relaxed text-slate-300">
                 <span className="text-accent-pink">const</span> <span className="text-blue-400">verifyToken</span> <span className="text-white">=</span> <span className="text-yellow-300">(</span><span className="text-orange-300">req</span>, <span className="text-orange-300">res</span>, <span className="text-orange-300">next</span><span className="text-yellow-300">)</span> <span className="text-accent-pink">{'=>'}</span> <span className="text-yellow-300">{'{'}</span><br/>
                 <span className="text-slate-500">  // Extract Bearer token</span><br/>
                 <span className="text-accent-pink">  const</span> <span className="text-white">token</span> <span className="text-white">=</span> <span className="text-white">req.headers</span><span className="text-accent-cyan">[</span><span className="text-green-300">'authorization'</span><span className="text-accent-cyan">]</span>;<br/><br/>
                 <span className="text-accent-pink">  if</span> <span className="text-purple-400">(</span><span className="text-white">!token</span><span className="text-purple-400">)</span> <span className="text-accent-pink">return</span> <span className="text-white">res.</span><span className="text-blue-400">status</span><span className="text-purple-400">(</span><span className="text-orange-300">403</span><span className="text-purple-400">)</span>;<br/><br/>
                 <span className="text-white">  jwt.</span><span className="text-blue-400">verify</span><span className="text-purple-400">(</span><span className="text-white">token</span>, <span className="text-white">config.secret</span>, <span className="text-blue-400">(</span><span className="text-orange-300">err</span>, <span className="text-orange-300">user</span><span className="text-blue-400">)</span> <span className="text-accent-pink">{'=>'}</span> <span className="text-blue-400">{'{'}</span><br/>
                 <span className="text-accent-pink">    if</span> <span className="text-accent-cyan">(</span><span className="text-orange-300">err</span><span className="text-accent-cyan">)</span> <span className="text-accent-pink">return</span> <span className="text-white">res.</span><span className="text-blue-400">sendStatus</span><span className="text-accent-cyan">(</span><span className="text-orange-300">403</span><span className="text-accent-cyan">)</span>;<br/>
                 <span className="text-white">    req.user</span> <span className="text-white">=</span> <span className="text-orange-300">user</span>;<br/>
                 <span className="text-blue-400">    next()</span>;<br/>
                 <span className="text-blue-400">  {'}'}</span><span className="text-purple-400">)</span>;<br/>
                 <span className="text-yellow-300">{'}'}</span>
               </pre>
             </div>
             <div className="h-0.5 w-full bg-gradient-to-r from-primary via-accent-cyan to-primary opacity-50"></div>
          </Card>
        </div>

      </div>
    </div>
  );
};
