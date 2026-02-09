import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'success';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'secondary', 
  className = '',
  icon
}) => {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-surface-lighter text-text-secondary border-white/5",
    accent: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    outline: "bg-transparent border-white/20 text-text-secondary",
  };

  return (
    <span 
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border
        ${variants[variant]} 
        ${className}
      `}
    >
      {icon && <span className="text-[1.1em]">{icon}</span>}
      {children}
    </span>
  );
};
