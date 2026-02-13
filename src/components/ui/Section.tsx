import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  animate = true
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        'py-16 md:py-24',
        animate && 'animate-fade-in-up',
        className
      )}
    >
      {children}
    </section>
  );
};
