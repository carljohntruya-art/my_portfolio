import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ROUTES } from '@/constants/routes';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-20%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px]"></div>
      </div>

      <Container size="md" className="z-10">
        <Section animate className="pt-24 flex flex-col gap-24">
          {/* Hero */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Available for hire</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">Full-Stack</span> Experiences
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg font-normal leading-relaxed max-w-xl mb-8">
              Computer Science Student & Full-Stack Developer focused on clean UI, scalable backends, and bridging the gap between theory and product.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                onClick={() => navigate(ROUTES.PROJECTS)}
                size="lg"
                rightIcon={<span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
                className="px-8"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => navigate(ROUTES.CONTACT)}
                variant="secondary"
                size="lg"
                leftIcon={<span className="material-symbols-outlined text-[20px]">mail</span>}
                className="px-8"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Capabilities */}
          <motion.div 
             variants={fadeInUp} 
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
          >
              <div className="mb-8">
                 <p className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Capabilities</p>
                 <h3 className="text-2xl font-bold text-white">Modern Engineering Stack</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-accent-cyan mb-4 text-4xl">data_object</span>
                    <span className="text-sm font-medium text-slate-300 text-center">Frontend Architecture</span>
                  </Card>
                  <Card className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-green-400 mb-4 text-4xl">dns</span>
                    <span className="text-sm font-medium text-slate-300 text-center">Backend Systems</span>
                  </Card>
                  <Card className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-accent-pink mb-4 text-4xl">cloud</span>
                    <span className="text-sm font-medium text-slate-300 text-center">Cloud Infrastructure</span>
                  </Card>
              </div>
          </motion.div>

          {/* About */}
          <motion.div 
             variants={fadeInUp}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-text-muted">
              <div className="h-px flex-1 bg-border"></div>
              <h2 className="text-sm font-bold uppercase tracking-widest">About Me</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            
            <Card className="flex flex-col gap-8 p-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-surface-lighter ring-4 ring-primary/20 flex-shrink-0 overflow-hidden">
                    <img 
                      alt="CJ Avatar" 
                      className="w-full h-full object-cover" 
                      src="./assets/cjj.jpg"
                      onError={(e) => {
                          (e.target as HTMLImageElement).src = `./assets/cjj.jpg`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">CJ</h3>
                    <p className="text-sm text-primary font-bold">CS Student @Biliran Province State University</p>
                  </div>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  I don't just write code; I build systems. Currently pursuing my CS degree, I blend academic fundamentals like algorithms and data structures with modern full-stack development.
                </p>
                
                <div className="border-t border-white/5 pt-6">
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Core Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-4 py-1.5 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
            </Card>
          </motion.div>
        </Section>
      </Container>
    </MainLayout>
  );
};

export default Home;
