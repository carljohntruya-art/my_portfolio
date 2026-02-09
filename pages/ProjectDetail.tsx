import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SystemFlow } from '../components/jusas/SystemFlow';
import { Wireframes } from '../components/jusas/Wireframes';
import { DatabaseSchema } from '../components/jusas/DatabaseSchema';
// @ts-ignore
import bipsuImage from '../assets/bipsu-dashboard.png';
// @ts-ignore
import jusasImage from '../assets/jusas-tropical.png';

import { NavBar } from '../components/NavBar';
import { Card } from '../components/UI/Card';
import { Badge } from '../components/UI/Badge';
import { Button } from '../components/UI/Button';

export const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // If specific project is Jusas, render the custom layout
  if (id === 'jusas') {
    return (
      <div className="bg-background min-h-screen flex flex-col font-display text-white transition-colors duration-200 pb-24">
         {/* Header */}
         <NavBar 
            title="Project Case Study" 
            showBack={true} 
            showMenu={false}
            rightAction={
              <a href="https://github.com/carljohntruya-art/Jusas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors group">
                <span className="material-symbols-outlined text-text-secondary group-hover:text-white transition-colors">code</span>
              </a>
            }
         />

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-8 space-y-12">
          {/* Project Title Area */}
          <div>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Badge variant="accent">Mobile/Web App</Badge>
                <Badge variant="success">Live Demo</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">Jusas Smoothie Tropical App</h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                 Create a smooth ordering experience for customers of Jusas Smoothie Tropical, with menu browsing, smoothie customization, and order tracking.
              </p>
            </div>
            
            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {['React Web', 'Tailwind', 'Firebase/API'].map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>

          <div className="w-full">
            <img src={jusasImage} alt="Jusas App UI" className="w-full rounded-xl border border-white/10 shadow-lg" />
          </div>

          <div className="h-px bg-border w-full"></div>

          {/* Visual Content: System Flow */}
          <div>
              <SystemFlow />
          </div>

          <div className="h-px bg-border w-full"></div>

          {/* Visual Content: Wireframes */}
          <div>
             <Wireframes />
          </div>

          <div className="h-px bg-border w-full"></div>

          {/* Visual Content: Database */}
           <div>
             <DatabaseSchema />
          </div>

          {/* Feature Highlights & CTA */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Challenges & Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <Card className="flex flex-col gap-2">
                  <h4 className="font-bold text-white text-base">📱 Optimized UI</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Designed for low-end devices ensuring smooth interactions and accessibility.</p>
               </Card>
               <Card className="flex flex-col gap-2">
                  <h4 className="font-bold text-white text-base">⚡ Fast Image Load</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Implemented lazy loading and optimized assets for instant visual feedback on mobile networks.</p>
               </Card>
               <Card className="flex flex-col gap-2">
                  <h4 className="font-bold text-white text-base">🔄 Seamless Workflow</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Streamlined the ordering process to minimize clicks and reduce abandonment rates.</p>
               </Card>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <a href="https://github.com/carljohntruya-art/Jusas" target="_blank" rel="noopener noreferrer" className="flex-1">
                 <Button variant="secondary" fullWidth size="lg" leftIcon={<span className="material-symbols-outlined">code</span>}>
                    View Source Code
                 </Button>
               </a>
               <a href="https://jusas-new.vercel.app" target="_blank" rel="noopener noreferrer" className="flex-1">
                 <Button fullWidth size="lg" leftIcon={<span className="material-symbols-outlined">rocket_launch</span>}>
                    Visit Live Demo
                 </Button>
               </a>
            </div>
          </div>

        </main>
      </div>
    );
  }

  // Bipsu Complaint System
  if (id === 'bipsu') {
    return (
      <div className="bg-background min-h-screen flex flex-col font-display text-white transition-colors duration-200 pb-24">
         {/* Header */}
         <NavBar title="Project Case Study" showBack={true} showMenu={false} />

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-8 space-y-12">
          {/* Project Title Area */}
          <div>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Badge variant="accent">Web Application</Badge>
                <Badge variant="primary">Admin System</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">Bipsu Complaint System</h1>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
                Enable students to submit complaints/issues, track status, and generate reports efficiently.
              </p>
            </div>
            
            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Node/Express', 'MySQL', 'JWT Auth', 'Tailwind'].map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>

          <div className="w-full">
            <img src={bipsuImage} alt="Bipsu Dashboard UI" className="w-full rounded-xl border border-white/10 shadow-lg" />
          </div>

          {/* Feature Highlights & Challenges */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
            <Card className="mb-8">
                <ul className="list-disc list-inside text-text-secondary text-sm space-y-3">
                    <li>Complaint submission form with categorization</li>
                    <li>Status tracking dashboard for students and admins</li>
                    <li>Notification system and reporting tools</li>
                </ul>
            </Card>

            <h3 className="text-xl font-bold text-white mb-6">Challenges & Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <Card className="flex flex-col gap-2">
                  <h4 className="font-bold text-white text-base">🔒 Secure Authentication</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Implemented JWT-based authentication to ensure secure access to student and admin portals.</p>
               </Card>
               <Card className="flex flex-col gap-2">
                  <h4 className="font-bold text-white text-base">⚡ Real-time Updates</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Used efficient polling/websockets to reflect complaint status changes instantly.</p>
               </Card>
               <Card className="flex flex-col gap-2">
                  <h4 className="font-bold text-white text-base">📊 User-Friendly Dashboard</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">Designed a clean, intuitive interface for admins to manage high volumes of reports.</p>
               </Card>
            </div>

            <div className="mt-8">
               <Button disabled fullWidth variant="secondary" leftIcon={<span className="material-symbols-outlined">lock</span>}>
                 Source Private
               </Button>
            </div>
          </div>

        </main>
      </div>
    );
  }

  // Fallback for other projects or unknown IDs
  return (
    <div className="bg-background min-h-screen flex items-center justify-center flex-col gap-4 text-white font-display">
      <h1 className="text-2xl font-bold">Project Not Found</h1>
      <Button variant="ghost" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};
