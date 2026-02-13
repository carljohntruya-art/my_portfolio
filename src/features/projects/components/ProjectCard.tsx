import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    techStack: string[];
    images: string[];
  };
  onClick: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div variants={fadeInUp}>
      <Card 
        noPadding 
        hoverEffect 
        onClick={() => onClick(project.id)}
        className="h-full flex flex-col group"
      >
        <div className="w-full h-56 bg-surface-hover relative overflow-hidden flex-shrink-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ 
              backgroundImage: project.images?.[0] ? `url(${project.images[0]})` : 'none',
              backgroundColor: '#1c1c27'
            }}
          >
            {!project.images?.[0] && (
              <div className="flex items-center justify-center h-full">
                <span className="material-symbols-outlined text-4xl text-white/10">image</span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-3 left-3 flex gap-2">
            <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">
              {project.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6 flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="primary">{tech}</Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="primary">+{project.techStack.length - 3}</Badge>
            )}
          </div>
          <div className="pt-2">
            <Button 
              variant="secondary" 
              size="sm" 
              fullWidth
              rightIcon={<span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
            >
              View Case Study
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
