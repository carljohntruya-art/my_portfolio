import React from 'react';
import { NavBar } from '@/components/NavBar';
import { BottomNav } from '@/components/BottomNav';
import { ChatWidget } from '@/components/ChatWidget';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const showBottomNav = [ROUTES.HOME, ROUTES.PROJECTS, ROUTES.STACK, ROUTES.CONTACT].includes(location.pathname);

  return (
    <div className="bg-background min-h-screen text-text-primary font-display flex flex-col">
       <div className="flex-1 pb-20">
          {children}
       </div>
       {showBottomNav && <BottomNav />}
       <ChatWidget />
    </div>
  );
};
