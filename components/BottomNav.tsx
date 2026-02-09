import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: 'home', label: 'Home', path: RoutePath.HOME },
    { icon: 'grid_view', label: 'Projects', path: RoutePath.PROJECTS },
    { icon: 'description', label: 'Stack', path: RoutePath.STACK }, // Using Stack as "Resume" equivalent for this demo
    { icon: 'mail', label: 'Contact', path: RoutePath.CONTACT },
  ];

  return (
    <div className="fixed bottom-0 w-full z-40 bg-surface/90 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex justify-around items-center h-16 px-2 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center w-16 h-full transition-colors gap-1 ${
              isActive(item.path)
                ? 'text-primary'
                : 'text-text-secondary hover:text-primary'
            }`}
          >
            <span className={`material-symbols-outlined text-[24px] ${isActive(item.path) ? 'filled' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
