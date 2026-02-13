import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  noPadding?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  noPadding = false,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative overflow-hidden bg-surface border border-border rounded-xl shadow-card transition-all duration-300",
        hoverEffect && "hover:border-primary/30 hover:shadow-card-hover cursor-pointer",
        !noPadding && "p-6",
        className
      )}
    >
      {children}
    </div>
  );
};
