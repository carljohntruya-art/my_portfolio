import React from 'react';
import { Menu, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ title = "CJ.dev", showBack = false, showMenu = true }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background-dark/80 border-b border-white/5">
      {showBack ? (
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center rounded-full h-10 w-10 text-white hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
      ) : (
        <div className="w-10"></div> 
      )}
      
      <h2 className={`text-xl font-bold leading-tight tracking-tight flex-1 ${showBack ? 'text-center' : ''}`}>
        {title}
      </h2>
      
      {showMenu ? (
        <button className="flex items-center justify-center rounded-lg h-10 w-10 text-white hover:bg-white/10 transition-colors">
          <Menu size={24} />
        </button>
      ) : (
        <div className="w-10"></div>
      )}
    </header>
  );
};