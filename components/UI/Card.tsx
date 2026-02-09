import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  noPadding = false
}) => {
  return (
    <div 
      className={`
        relative overflow-hidden bg-surface border border-border rounded-xl shadow-card
        ${hoverEffect ? 'hover:border-primary/30 hover:shadow-card-hover transition-all duration-300' : ''}
        ${noPadding ? '' : 'p-6'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
