import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectLayout } from '@/layouts/ProjectLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useProjects } from '@/features/projects/hooks/useProjects';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProjectById } = useProjects();
  const project = getProjectById(id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Case Study`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white p-6">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Button onClick={() => navigate('/projects')}>View All Projects</Button>
      </div>
    );
  }

  return (
    <ProjectLayout title="Project Case Study">
      <Container size="md">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="pt-8 space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="accent">{project.category}</Badge>
              {(project.liveUrl || project.id === 'smart-personal-organize') && (
                <Badge variant="success">Live Demo</Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </motion.div>

          {/* Main Visual */}
          <motion.div variants={fadeInUp} className="w-full">
            <div className="w-full h-64 md:h-96 bg-surface-lighter rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
               {project.images?.[0] ? (
                 <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/1200x800/202020/FFF?text=${encodeURIComponent(project.title)}`;
                    }}
                 />
               ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50"></div>
                  <div className="text-center z-10">
                    <span className="material-symbols-outlined text-6xl text-white/20 mb-4">image</span>
                    <p className="text-text-secondary font-medium">Application Preview</p>
                  </div>
                </>
               )}
            </div>
          </motion.div>

          <div className="h-px bg-border w-full"></div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl font-bold text-white">The Challenge</h3>
              <p className="text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-xl font-bold text-white">The Solution</h3>
              <p className="text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <Card key={idx} className="text-center py-4 px-2">
                  <div className="text-primary font-bold text-2xl mb-1">{metric.value}</div>
                  <div className="text-text-secondary text-xs uppercase tracking-wider font-semibold">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </motion.div>
          )}

          {/* Features */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-xl font-bold text-white">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-text-secondary">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-8">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="secondary" fullWidth size="lg" leftIcon={<span className="material-symbols-outlined">code</span>}>
                  Source Code
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button fullWidth size="lg" leftIcon={<span className="material-symbols-outlined">rocket_launch</span>}>
                  Visit Live Demo
                </Button>
              </a>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </ProjectLayout>
  );
};

export default ProjectDetailsPage;
