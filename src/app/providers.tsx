import React from 'react';
import { HashRouter } from 'react-router-dom';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  // Add other providers here (Theme, Auth, Analytics, etc.)
  return (
    <HashRouter>
      {children}
    </HashRouter>
  );
};
