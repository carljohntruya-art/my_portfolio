import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/projects.data';

interface ProjectGridProps {
  onProjectClick: (id: string) => void;
  limit?: number;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick, limit }) => {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {displayedProjects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onClick={onProjectClick} 
        />
      ))}
    </motion.div>
  );
};
