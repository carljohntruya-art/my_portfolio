import React from 'react';
import { NavBar } from '@/components/NavBar';
import { ChatWidget } from '@/components/ChatWidget';

interface ProjectLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ 
  children, 
  title = "Project Case Study" 
}) => {
  return (
    <div className="bg-background min-h-screen flex flex-col font-display text-white transition-colors duration-200">
       <NavBar 
          title={title} 
          showBack={true} 
          showMenu={false}
       />
       <main className="flex-1 pb-24">
          {children}
       </main>
       <ChatWidget />
    </div>
  );
};
