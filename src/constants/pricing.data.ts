export const APP_TYPES = [
  { id: 'portfolio', label: 'Portfolio Site', icon: 'person' },
  { id: 'ecommerce', label: 'E-Commerce', icon: 'shopping_cart' },
  { id: 'saas', label: 'SaaS Platform', icon: 'cloud' },
  { id: 'pwa', label: 'Mobile PWA', icon: 'phone_android' }
];

export const DEPLOYMENT_TYPES = [
  { id: 'deployed', label: 'Deployed (with hosting)', icon: 'cloud_upload' },
  { id: 'localhost', label: 'Localhost Only', icon: 'laptop' }
];

export const COMPLEXITY_LEVELS = [
  { id: 'simple', label: 'Simple' },
  { id: 'medium', label: 'Medium' },
  { id: 'advanced', label: 'Advanced' }
];

export const PRICING_MATRIX = {
  deployed: {
    simple: { min: 10000, max: 13500 },
    medium: { min: 15000, max: 18500 },
    advanced: { min: 20000, max: 25000 }
  },
  localhost: {
    simple: { min: 1500, max: 2500 },
    medium: { min: 3000, max: 4500 },
    advanced: { min: 5000, max: 8000 }
  }
} as const;

export type AppTypeId = typeof APP_TYPES[number]['id'];
export type DeploymentTypeId = typeof DEPLOYMENT_TYPES[number]['id'];
export type ComplexityId = typeof COMPLEXITY_LEVELS[number]['id'];

export function formatPrice(amount: number): string {
  return `₱${amount.toLocaleString('en-PH')}`;
}
