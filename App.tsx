import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { TechStack } from './pages/TechStack';
import { ProjectDetail } from './pages/ProjectDetail';
import { Contact } from './pages/Contact';
import { BottomNav } from './components/BottomNav';
import { ChatWidget } from './components/ChatWidget';
import { RoutePath } from './types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Show bottom nav on all main routes
  const showBottomNav = (Object.values(RoutePath) as string[]).includes(location.pathname);

  return (
    <div className="bg-background min-h-screen text-text-primary font-display">
       <div className="min-h-screen pb-16">
          {children}
       </div>
       {showBottomNav && <BottomNav />}
       <ChatWidget />
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.PROJECTS} element={<Projects />} />
          <Route path={RoutePath.STACK} element={<TechStack />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
