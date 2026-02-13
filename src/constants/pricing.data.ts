export const APP_TYPES = [
  { 
    id: 'portfolio', 
    label: 'Portfolio Site', 
    icon: 'person',
    description: 'Personal showcase of work and skills.',
    baseRange: { min: 2000, max: 5000 }
  },
  { 
    id: 'blog', 
    label: 'Blog / Content', 
    icon: 'article',
    description: 'Dynamic content publishing platform.',
    baseRange: { min: 3000, max: 6000 }
  },
  { 
    id: 'pwa', 
    label: 'Mobile PWA', 
    icon: 'phone_android',
    description: 'Installable web app for mobile devices.',
    baseRange: { min: 8000, max: 13000 }
  },
  { 
    id: 'ecommerce', 
    label: 'E-Commerce', 
    icon: 'shopping_cart',
    description: 'Online store with cart and payments.',
    baseRange: { min: 10000, max: 15000 }
  },
  { 
    id: 'social', 
    label: 'Social App', 
    icon: 'groups',
    description: 'Community platform with user interactions.',
    baseRange: { min: 12000, max: 18000 }
  },
  { 
    id: 'saas', 
    label: 'SaaS Platform', 
    icon: 'cloud',
    description: 'Software as a Service subscription tool.',
    baseRange: { min: 15000, max: 20000 }
  },
  { 
    id: 'marketplace', 
    label: 'Marketplace', 
    icon: 'storefront',
    description: 'Platform connecting buyers and sellers.',
    baseRange: { min: 20000, max: 30000 }
  }
] as const;

export const DEPLOYMENT_TYPES = [
  { id: 'deployed', label: 'Deployed (Hosting + Domain)', icon: 'cloud_upload' },
  { id: 'localhost', label: 'Localhost Only (Code)', icon: 'laptop' }
] as const;

export const COMPLEXITY_LEVELS = [
  { id: 'simple', label: 'Simple' },
  { id: 'medium', label: 'Medium' },
  { id: 'advanced', label: 'Advanced' }
] as const;

// Complexity Multipliers
export const COMPLEXITY_MULTIPLIERS = {
  simple: 1,
  medium: 1.5,
  advanced: 2.5
};

// Deployment Multipliers
export const DEPLOYMENT_MULTIPLIERS = {
  localhost: 0.4, // 60% discount for localhost
  deployed: 1     // Standard price
};

export type AppTypeId = typeof APP_TYPES[number]['id'];
export type DeploymentTypeId = typeof DEPLOYMENT_TYPES[number]['id'];
export type ComplexityId = typeof COMPLEXITY_LEVELS[number]['id'];

export function getProjectPriceRange(appTypeId: string, deploymentId: string, complexityId: string) {
  const appType = APP_TYPES.find(t => t.id === appTypeId);
  if (!appType || !deploymentId || !complexityId) return null;

  let min = appType.baseRange.min;
  let max = appType.baseRange.max;

  // Apply Complexity Multiplier
  const complexityMult = COMPLEXITY_MULTIPLIERS[complexityId as keyof typeof COMPLEXITY_MULTIPLIERS] || 1;
  min *= complexityMult;
  max *= complexityMult;

  // Apply Deployment Multiplier
  const deploymentMult = DEPLOYMENT_MULTIPLIERS[deploymentId as keyof typeof DEPLOYMENT_MULTIPLIERS] || 1;
  min *= deploymentMult;
  max *= deploymentMult;

  return {
    min: Math.round(min / 100) * 100, // Round to nearest 100
    max: Math.round(max / 100) * 100
  };
}

export function formatPrice(amount: number): string {
  return `₱${amount.toLocaleString('en-PH')}`;
}
