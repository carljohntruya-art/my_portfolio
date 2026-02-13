# Portfolio Feature-Based Architecture

This project follows a **Scalable Feature-Based Architecture** designed for long-term growth and clean separation of concerns.

## 🏗️ Folder Structure

- **src/app**: Application-level setup (Providers, Router).
- **src/layouts**: Shared UI layouts (MainLayout, ProjectLayout).
- **src/pages**: Page-level components that compose features and UI.
- **src/features**: Domain-specific logic and components.
  - **projects**: Project grid, cards, data, and hooks.
  - **hero**: Hero section components.
- **src/components/ui**: Reusable atomic UI components (Button, Card, Badge).
- **src/lib**: Core utilities and shared logic (animations, tailwind utils).
- **src/constants**: Application constants (routes, theme).
- **src/assets**: Static assets organized by project.

## 🚀 Adding a New Project

To add a new project, you only need to:

1. Open `src/features/projects/data/projects.data.ts`.
2. Add a new project object following the data structure.
3. Add relevant images to `src/assets/images/projects/your-project-id/`.

The dynamic routing will automatically handle the new project at `/projects/your-project-id`.

## 🛠️ Tech Stack Refactor

- **Routing**: Centralized in `src/constants/routes.ts`.
- **Styling**: Refactored to use `cn()` utility for flexible Tailwind classes.
- **Animations**: Centralized in `src/lib/animations.ts` using Framer Motion.
