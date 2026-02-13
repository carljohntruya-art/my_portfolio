import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { NavBar } from '@/components/NavBar';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const TechStack: React.FC = () => {
  return (
    <MainLayout>
      <NavBar title="Tech Stack" showBack={true} showMenu={false} />

      <Container size="md">
        <Section animate className="pt-8 space-y-12">
          {/* Intro */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight text-left mb-2">CJ's Arsenal</h1>
              <p className="text-text-secondary text-base font-normal leading-relaxed">
                Full-Stack Developer <span className="text-primary mx-1">•</span> Specialized in scalable architectures
              </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Frontend Card */}
            <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2">
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
            </motion.div>

            {/* Backend Card */}
            <motion.div variants={fadeInUp} className="col-span-1">
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
            </motion.div>

            {/* Data Store Card */}
            <motion.div variants={fadeInUp} className="col-span-1">
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
            </motion.div>
          </motion.div>

          {/* Security Section */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
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
          </motion.div>
        </Section>
      </Container>
    </MainLayout>
  );
};

export default TechStack;
