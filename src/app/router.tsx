import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

// Lazy load pages for better bundle performance
const Home = lazy(() => import('@/pages/Home'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails'));
const TechStack = lazy(() => import('@/pages/TechStack'));
const Contact = lazy(() => import('@/pages/Contact'));

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    }>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path={ROUTES.STACK} element={<TechStack />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
