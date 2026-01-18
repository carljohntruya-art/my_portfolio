export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  category: string;
  imageUrl: string;
  fullImageAlt?: string;
  architecture?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export enum RoutePath {
  HOME = '/',
  PROJECTS = '/projects',
  STACK = '/stack',
  CONTACT = '/contact',
  PROJECT_DETAIL = '/project/:id'
}
