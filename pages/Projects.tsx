import React from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import jusasImage from '../assets/jusas-tropical.png';
// @ts-ignore
import bipsuImage from '../assets/bipsu-dashboard.png';

import { NavBar } from '../components/NavBar';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { Badge } from '../components/UI/Badge';

export const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background pb-24 font-display">
      {/* Navbar */}
      <NavBar title="Featured Projects" showBack={true} showMenu={false} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 pt-8 space-y-12 max-w-4xl mx-auto w-full z-10">
        {/* Intro */}
        <div className="animate-fade-in-up">
          <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight text-left mb-4">Selected Works</h1>
          <p className="text-text-secondary text-base font-normal leading-relaxed max-w-2xl">
            A collection of full-stack applications, machine learning models, and system architectures designed for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: Jusas Smoothie Tropical App */}
            <div className="animate-fade-in-up delay-100 group">
              <Card noPadding hoverEffect className="h-full flex flex-col">
                <div className="w-full h-56 bg-surface-hover relative overflow-hidden cursor-pointer flex-shrink-0" onClick={() => navigate('/project/jusas')}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{backgroundImage: `url(${jusasImage})`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">Mobile/Web</Badge>
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">UI/UX</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white leading-tight">Jusas Smoothie App</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    Create a smooth ordering experience for customers with menu browsing, smoothie customization, and order tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="primary">React</Badge>
                    <Badge variant="primary">Tailwind</Badge>
                    <Badge variant="primary">Firebase</Badge>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <Button 
                        onClick={() => navigate('/project/jusas')} 
                        size="sm" 
                        fullWidth
                        rightIcon={<span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
                    >
                      Case Study
                    </Button>
                    <a href="https://jusas-new.vercel.app" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                        <Button variant="secondary" size="sm" className="px-3">
                            <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                        </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
    
            {/* Project 2: Bipsu Complaint System */}
            <div className="animate-fade-in-up delay-150 group">
              <Card noPadding hoverEffect className="h-full flex flex-col">
                <div className="w-full h-56 bg-surface-hover relative overflow-hidden cursor-pointer flex-shrink-0" onClick={() => navigate('/project/bipsu')}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{backgroundImage: `url(${bipsuImage})`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">Admin</Badge>
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">Web App</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white leading-tight">Bipsu Complaint System</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    Enable students to submit complaints, track status, and generate reports efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="primary">React</Badge>
                    <Badge variant="primary">Node/Express</Badge>
                    <Badge variant="primary">MySQL</Badge>
                  </div>
                  <div className="mt-2">
                    <Button 
                        onClick={() => navigate('/project/bipsu')} 
                        size="sm" 
                        fullWidth
                        variant="secondary"
                        rightIcon={<span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
    
            {/* Project 3: Meat Freshness Detection */}
            <div className="animate-fade-in-up delay-[200ms] group">
              <Card noPadding hoverEffect className="h-full flex flex-col">
                <div className="w-full h-56 bg-surface-hover relative overflow-hidden flex-shrink-0">
                   <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqsgSUfbb8-kc63fgCrH7zL2HHVP1SSEq3dcvYhmHFuX3JFUXsRTQ2TaZ9z5v6Z3-bKVfTND6UUHRi1EFkFYg41xZnui57CUnSORoRqwhGXd0f4ys5e6hrD2X6OFgFeB6hR4HnysIZPG6-34e55HFAntGx5sR3y-Tbe2WOw1PIRKluWR0GEKnrb-2ehyGdYACZS_8LjHr7oKRALBLNq7GzjrAuiY2WzssH80RDXIyfE-AU705bcp7ACXNEduHvxI8FDbx2Hv6r9dkw")'}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">AI / ML</Badge>
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">CV</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white leading-tight">Meat Freshness AI</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    AI-driven quality control using computer vision and CNNs to ensure food safety standards.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="primary">Python</Badge>
                    <Badge variant="primary">TensorFlow</Badge>
                    <Badge variant="primary">CNN</Badge>
                  </div>
                   <div className="mt-2">
                    <Button 
                        size="sm" 
                        fullWidth
                        variant="secondary"
                        rightIcon={<span className="material-symbols-outlined text-[18px]">visibility</span>}
                    >
                      Model Architecture
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
    
            {/* Project 4: TaskFlow */}
            <div className="animate-fade-in-up delay-[400ms] group">
              <Card noPadding hoverEffect className="h-full flex flex-col">
                <div className="w-full h-56 bg-surface-hover relative overflow-hidden flex-shrink-0">
                   <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD65qbVlq9ih7vnuTIGMlWlXf-LBILs3aj1Bb-jRGUAi7nx_MITMk94bxthcnvVRbKN3d4ShtWifuKVyqj3SjOQTq-h0E_X042LVPhKXfWT5QMZLl49ps4slTVI0RKuP6Z42odwXG9OQrPOSUtxCDHfQpewtQCYscKAhyXFG0toY7cSTv4yqsu_vuiAeL7_EnJcrlyBW_w5yBM8-NlJJ2HFexDhEeyunMEJUx9imkXhW3ZrsNwP_UsqRqpf2-ExAKIhiU5z3HTwVdT0")'}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">SaaS</Badge>
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-white/10">Productivity</Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                   <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white leading-tight">TaskFlow</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    Scalable project management for remote teams featuring real-time updates via WebSockets.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="primary">React</Badge>
                    <Badge variant="primary">Socket.io</Badge>
                    <Badge variant="primary">PostgreSQL</Badge>
                  </div>
                   <div className="mt-2">
                    <Button 
                        size="sm" 
                        fullWidth
                        variant="primary"
                        rightIcon={<span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
        </div>

        {/* System Thinking Section - Full Width */}
        <div className="animate-fade-in-up delay-[300ms] col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 mt-2">
            <span className="material-symbols-outlined text-primary text-[24px]">schema</span>
            <h2 className="text-lg font-bold text-white">System Thinking</h2>
          </div>
          <Card className="p-8">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-lg font-semibold text-white">TaskFlow Architecture</h3>
                <Badge variant="accent">Auth Flow</Badge>
            </div>
            {/* Diagram - Kept mostly as is but cleaned up classes */}
            <div className="flex flex-col items-center gap-4 text-center text-xs font-medium text-slate-300 mb-8">
                <div className="flex items-center gap-4 w-full justify-center">
                  <div className="w-24 py-3 rounded border border-border bg-surface-lighter shadow-sm">Client (React)</div>
                </div>
                
                {/* Connector */}
                <div className="h-8 w-[1px] bg-border relative"></div>
                
                {/* Gateway */}
                <div className="flex items-center gap-4 w-full justify-center relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                  <div className="relative w-32 py-3 rounded border border-primary/50 bg-primary/10 text-primary shadow-glow-sm">
                    API Gateway
                  </div>
                </div>
                
                {/* Connector Split */}
                <div className="flex justify-center w-full h-8 relative">
                   <div className="h-full w-[1px] bg-border absolute left-1/2 -translate-x-1/2"></div>
                   <div className="absolute w-40 h-[1px] bg-border top-1/2 left-1/2 -translate-x-1/2"></div>
                   <div className="absolute bottom-0 left-[calc(50%-5rem)] h-4 w-[1px] bg-border"></div>
                   <div className="absolute bottom-0 right-[calc(50%-5rem)] h-4 w-[1px] bg-border"></div>
                </div>
                
                {/* Services */}
                <div className="flex justify-center gap-20 w-full">
                  <div className="w-24 py-3 rounded border border-border bg-surface-lighter shadow-sm">Auth Svc</div>
                  <div className="w-24 py-3 rounded border border-border bg-surface-lighter shadow-sm">Task Svc</div>
                </div>
            </div>
            
            <div className="pt-6 border-t border-white/5">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Decoupled authentication service using JWTs and Redis for session management, ensuring stateless scalability across microservices.
                </p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};
