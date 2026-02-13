import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ProjectGrid } from '@/features/projects/components/ProjectGrid';
import { NavBar } from '@/components/NavBar';
import { ROUTES } from '@/constants/routes';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id: string) => {
    navigate(ROUTES.PROJECT_DETAILS(id));
  };

  return (
    <MainLayout>
      <NavBar title="Featured Projects" showBack={true} showMenu={false} />
      
      <Container size="lg">
        <Section animate className="pt-8">
          <div className="mb-12">
            <h1 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-4">
              Selected Works
            </h1>
            <p className="text-text-secondary text-base font-normal leading-relaxed max-w-2xl">
              A collection of full-stack applications, machine learning models, and system architectures designed for scale.
            </p>
          </div>

          <ProjectGrid onProjectClick={handleProjectClick} />
        </Section>
      </Container>
    </MainLayout>
  );
};

export default ProjectsPage;
