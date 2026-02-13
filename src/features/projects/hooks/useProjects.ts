import { PROJECTS } from '../data/projects.data';

export const useProjects = () => {
  const getAllProjects = () => PROJECTS;
  
  const getProjectById = (id: string | undefined) => {
    return PROJECTS.find((project) => project.id === id);
  };

  const getFeaturedProjects = (count: number = 3) => {
    return PROJECTS.slice(0, count);
  };

  return {
    getAllProjects,
    getProjectById,
    getFeaturedProjects
  };
};
