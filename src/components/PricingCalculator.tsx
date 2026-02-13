import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  APP_TYPES, 
  DEPLOYMENT_TYPES, 
  COMPLEXITY_LEVELS, 
  getProjectPriceRange, 
  formatPrice,
  AppTypeId,
  DeploymentTypeId,
  ComplexityId 
} from '@/constants/pricing.data';
import { Card } from '@/components/ui/Card';

interface PricingCalculatorProps {
  onSelectionChange: (selections: {
    appType: string;
    deployment: string;
    complexity: string;
    suggestedPrice: string;
    budget: string;
  }) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectionChange }) => {
  const [appType, setAppType] = useState<AppTypeId | ''>('');
  const [deployment, setDeployment] = useState<DeploymentTypeId | ''>('');
  const [complexity, setComplexity] = useState<ComplexityId | ''>('');
  const [budget, setBudget] = useState('');

  const calculatePriceRange = () => {
    const range = getProjectPriceRange(appType, deployment, complexity);
    if (range) {
      return `${formatPrice(range.min)} - ${formatPrice(range.max)}`;
    }
    return '';
  };

  useEffect(() => {
    onSelectionChange({
      appType: APP_TYPES.find(t => t.id === appType)?.label || '',
      deployment: DEPLOYMENT_TYPES.find(t => t.id === deployment)?.label || '',
      complexity: COMPLEXITY_LEVELS.find(t => t.id === complexity)?.label || '',
      suggestedPrice: calculatePriceRange(),
      budget: budget
    });
  }, [appType, deployment, complexity, budget]);

  return (
    <div className="flex flex-col gap-8 w-full animate-fade-in">
      {/* App Type Selection */}
      <div className="space-y-4">
        <label className="text-sm font-bold text-text-muted uppercase tracking-widest">1. Select App Type</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {APP_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setAppType(type.id as AppTypeId)}
              className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
                appType === type.id 
                  ? 'bg-primary/10 border-primary text-primary shadow-glow-sm' 
                  : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">{type.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-tight">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Deployment & Complexity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="text-sm font-bold text-text-muted uppercase tracking-widest">2. Deployment</label>
          <div className="flex flex-col gap-2">
            {DEPLOYMENT_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setDeployment(type.id as DeploymentTypeId)}
                className={`flex items-center gap-4 px-5 h-14 rounded-xl border transition-all ${
                  deployment === type.id 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10'
                }`}
              >
                <span className="material-symbols-outlined">{type.icon}</span>
                <span className="text-sm font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold text-text-muted uppercase tracking-widest">3. Complexity</label>
          <div className="flex flex-col gap-2">
            {COMPLEXITY_LEVELS.map((level) => (
              <button
                key={level.id}
                type="button"
                onClick={() => setComplexity(level.id as ComplexityId)}
                className={`flex items-center justify-between px-5 h-14 rounded-xl border transition-all ${
                  complexity === level.id 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10'
                }`}
              >
                <span className="text-sm font-medium">{level.label}</span>
                {complexity === level.id && (
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Budget & Suggestions */}
      <div className="pt-4 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1 space-y-4">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Your Preferred Budget (₱)</label>
            <input
              type="text"
              placeholder="e.g. 15,000"
              value={budget}
              onChange={(e) => setBudget(e.target.value.replace(/[^0-9]/g, ''))}
              className="w-full h-14 px-5 rounded-xl bg-surface border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary transition-all"
            />
          </div>

          <div className="flex-1">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">Suggested Price Range</p>
              <div className="flex items-baseline gap-2">
                {calculatePriceRange() ? (
                  <span className="text-2xl font-black text-white">{calculatePriceRange()}</span>
                ) : (
                  <span className="text-sm text-text-muted italic">Select options to see estimate</span>
                )}
                <span className="text-[10px] font-bold text-primary uppercase ml-auto">ESTIMATE</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
