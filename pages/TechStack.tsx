import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TechStack: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-dark pb-24">
      {/* Header */}
      <div className="flex flex-col gap-2 p-4 pb-2 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center h-12 justify-between">
          <button onClick={() => navigate(-1)} className="text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined" style={{fontSize: '24px'}}>arrow_back</span>
          </button>
          <div className="flex items-center justify-end">
            <button className="text-[#9d9db9] hover:text-white transition-colors text-sm font-bold tracking-wide shrink-0 flex items-center gap-1">
              <span className="material-symbols-outlined" style={{fontSize: '18px'}}>mail</span>
              CONTACT
            </button>
          </div>
        </div>
        <div>
          <p className="text-white tracking-tight text-[32px] font-bold leading-tight">Tech Stack</p>
          <p className="text-[#9d9db9] text-sm font-normal leading-normal pt-1">
            CJ's Arsenal <span className="text-primary mx-1">•</span> Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="flex flex-col p-4 gap-4">
        <div className="grid grid-cols-2 gap-3 auto-rows-min">
          
          {/* Frontend Card */}
          <div className="col-span-2 relative group overflow-hidden rounded-2xl bg-surface border border-white/10 shadow-lg hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
            <div className="p-5 flex flex-col h-full justify-between gap-4">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-white/5 rounded-lg inline-flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-accent-cyan">devices</span>
                </div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Client Side</span>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-3">Frontend Architecture</h3>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Next.js 14', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                     <span key={tech} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="col-span-1 relative group overflow-hidden rounded-2xl bg-surface border border-white/10 shadow-lg hover:border-primary/50 transition-all duration-300">
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-pink/10 blur-[40px] rounded-full pointer-events-none"></div>
             <div className="p-4 flex flex-col h-full gap-3">
               <div className="p-2 bg-white/5 rounded-lg w-fit text-white">
                 <span className="material-symbols-outlined text-accent-pink">dns</span>
               </div>
               <div>
                 <h3 className="text-white text-lg font-bold leading-tight mb-2">Backend & API</h3>
                 <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-sm text-[#9d9db9]"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Node.js</div>
                   <div className="flex items-center gap-2 text-sm text-[#9d9db9]"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Go (Golang)</div>
                   <div className="flex items-center gap-2 text-sm text-[#9d9db9]"><span className="w-1.5 h-1.5 rounded-full bg-white"></span> GraphQL</div>
                 </div>
               </div>
             </div>
          </div>

          {/* Data Store Card */}
          <div className="col-span-1 relative group overflow-hidden rounded-2xl bg-surface border border-white/10 shadow-lg hover:border-primary/50 transition-all duration-300">
             <div className="p-4 flex flex-col h-full gap-3">
               <div className="p-2 bg-white/5 rounded-lg w-fit text-white">
                 <span className="material-symbols-outlined text-yellow-400">database</span>
               </div>
               <div>
                 <h3 className="text-white text-lg font-bold leading-tight mb-2">Data Store</h3>
                 <div className="flex flex-wrap gap-2">
                   {['PostgreSQL', 'Redis', 'Prisma'].map(t => (
                      <span key={t} className="px-2 py-1 rounded bg-white/5 text-[10px] text-white border border-white/5">{t}</span>
                   ))}
                 </div>
               </div>
             </div>
          </div>

          {/* ML Card */}
          <div className="col-span-2 relative group overflow-hidden rounded-2xl bg-surface border border-white/10 shadow-lg h-32 hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6ElAk02JZ222P5AtymlWjgyWBnHkIissOtcXaKSO35kFht2Di4bRdnAOk_L2ROVSBnNBCpae5TO4kFap58MAYn_1Il6kceI4g-YIuVnxYS7nTwsN3to0gOWqoSql9H1-I21fjtT4DlHGE0jASPkAiWLjPdRog6zySZyYSPOuSIeioJfqOxEYtZb8krYcDruVMnaTSrTC1ULQSVwRqkH-0KuACiIiSGCXfdgvKmlJlh1ar_7rq0tQm5WfvBmlCjhTZAzYQwejMQvGc")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent z-10"></div>
            <div className="relative z-20 p-5 flex items-center justify-between h-full">
               <div className="flex flex-col">
                 <h3 className="text-white text-lg font-bold">Machine Learning</h3>
                 <p className="text-[#9d9db9] text-xs mt-1">Python • TensorFlow • Pandas</p>
               </div>
               <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                 <span className="material-symbols-outlined text-white">psychology</span>
               </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="h-4"></div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 px-1">
             <h2 className="text-white tracking-tight text-xl font-bold">Security & Best Practices</h2>
             <div className="h-[1px] bg-white/10 flex-grow ml-2"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
             <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-white/5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                   <p className="text-white text-sm font-bold">RBAC</p>
                   <p className="text-[#9d9db9] text-[10px]">Role-Based Access</p>
                </div>
             </div>
             <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-white/5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">vpn_key</span>
                </div>
                <div>
                   <p className="text-white text-sm font-bold">JWT Auth</p>
                   <p className="text-[#9d9db9] text-[10px]">Stateless Sessions</p>
                </div>
             </div>
          </div>
          
          {/* Code Snippet */}
          <div className="w-full rounded-xl overflow-hidden bg-[#0d0d16] border border-white/10 shadow-2xl mt-1 group">
             <div className="bg-[#1a1a26] px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="text-[10px] font-mono text-white/30">auth.middleware.ts</div>
             </div>
             <div className="p-4 overflow-x-auto no-scrollbar">
               <pre className="font-mono text-[11px] leading-relaxed">
                 <span className="text-accent-pink">const</span> <span className="text-blue-400">verifyToken</span> <span className="text-white">=</span> <span className="text-yellow-300">(</span><span className="text-orange-300">req</span>, <span className="text-orange-300">res</span>, <span className="text-orange-300">next</span><span className="text-yellow-300">)</span> <span className="text-accent-pink">{'=>'}</span> <span className="text-yellow-300">{'{'}</span><br/>
                 <span className="text-white/50">  // Extract Bearer token</span><br/>
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
          </div>
        </div>
      </div>
    </div>
  );
};
