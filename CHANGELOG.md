# Changelog - UI Refactoring & Design System

## [2024-05-23] - Design System Implementation & UI Standardization

### Added

- **Design System Configuration**: Centralized color palette, typography scales, border radius, and shadow tokens in `tailwind.config` (within `index.html`) to ensure consistency.
  - New Colors: `primary`, `background`, `surface`, `text-primary`, `text-secondary`, `accent-cyan`, `accent-pink`.
  - New Shadows: `card`, `card-hover`, `glow`, `glow-sm`.
- **Reusable Components**:
  - `Button.tsx`: Supports variants (primary, secondary, outline, ghost), sizes, loading states, and icons.
  - `Card.tsx`: Standardized container with consistent border, background, and hover effects.
  - `Badge.tsx`: Pill-shaped tags for technologies and status indicators.
  - `NavBar.tsx`: Updated to be more flexible, supporting custom right actions (e.g., GitHub link) and using Material Symbols.
  - `BottomNav.tsx`: Updated to use design system tokens.

### Changed

- **Home Page (`Home.tsx`)**:
  - Refactored to use `Button`, `Card`, and `Badge` components.
  - Aligned spacing and typography with the new system.
  - Updated background gradients and colors.
- **Projects Page (`Projects.tsx`)**:
  - Implemented `NavBar` and standard `Card` layouts.
  - Consistent width (`max-w-4xl`) enforced.
  - Project cards now use the design system.
- **Tech Stack Page (`TechStack.tsx`)**:
  - Replaced Bento Grid implementation with standard `Card` components.
  - Improved layout and responsiveness.
- **Contact Page (`Contact.tsx`)**:
  - Standardized form inputs and `Button` usage.
  - Consistent background and spacing.
- **Project Detail Page (`ProjectDetail.tsx`)**:
  - Merged Jusas and Bipsu layouts into a consistent structure using `NavBar`, `Card`, and `Badge`.
  - Replaced hardcoded styles with semantic tokens.
  - Added specific "Challenges & Solutions" sections using `Card` components.
- **Global Styles**:
  - Updated `index.html` to define the comprehensive Tailwind theme.
  - Ensured all pages use `font-display` (Inter) and `font-mono` (JetBrains Mono) correctly.

### Removed

- **Ad-hoc Styling**: Removed inline hardcoded hex values and specific border radii in favor of utility classes (e.g., `rounded-xl`, `bg-surface`, `text-text-secondary`).
- **Duplicate Code**: Reduced repetition in Project Detail layouts and headers.

### Notes

- All icons now use `Material Symbols Outlined` for consistency and to avoid missing dependencies.
- The application now defaults to a dark theme (`color-scheme: dark`).
