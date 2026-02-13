import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavBarProps {
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
  rightAction?: React.ReactNode;
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ 
  title = "CJ.dev", 
  showBack = false, 
  showMenu = true,
  rightAction,
  className = ''
}) => {
  const navigate = useNavigate();

  return (
    <header className={cn(
      "sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border transition-all duration-300",
      className
    )}>
      {showBack ? (
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center rounded-full h-10 w-10 text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
      ) : (
        <div className="w-10"></div> 
      )}
      
      <h2 className={cn(
        "text-xl font-bold leading-tight tracking-tight flex-1 truncate px-2",
        showBack && 'text-center',
        rightAction && 'text-left'
      )}>
        {title}
      </h2>
      
      {rightAction ? (
        <div className="flex items-center">{rightAction}</div>
      ) : showMenu ? (
        <button className="flex items-center justify-center rounded-lg h-10 w-10 text-white hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
      ) : (
        <div className="w-10"></div>
      )}
    </header>
  );
};
