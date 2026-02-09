import React from 'react';

export const SystemFlow: React.FC = () => {
  return (
    <div className="w-full py-8">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">schema</span>
        System Architecture Flow
      </h3>
      
      <div className="relative flex flex-col items-center gap-8">
        {/* Customer Section */}
        <div className="w-full max-w-sm border border-white/10 bg-surface rounded-xl p-4 relative group hover:border-primary/30 transition-colors">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/25">
            Customer
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-accent-cyan">shopping_cart</span>
              <div className="text-sm">
                <p className="font-semibold text-white">Place Order</p>
                <p className="text-text-secondary text-xs">Menu selection & customization</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <span className="material-symbols-outlined text-text-muted animate-bounce">arrow_downward</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-green-400">payments</span>
              <div className="text-sm">
                <p className="font-semibold text-white">Payment Selection</p>
                <div className="flex gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-white/10 rounded text-xs text-text-secondary">COD</span>
                  <span className="px-2 py-0.5 bg-primary/20 text-primary-light rounded text-xs border border-primary/30">GCash</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection */}
        <div className="h-8 w-px bg-white/10 border-l border-dashed border-white/20"></div>

        {/* Backend Logic */}
        <div className="w-full max-w-xs p-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 relative">
          <p className="absolute -top-3 left-4 bg-background px-2 text-xs text-primary font-mono">Backend Logic</p>
          <div className="flex items-center gap-2 mb-2">
             <span className="material-symbols-outlined text-yellow-500 text-sm">cloud_upload</span>
             <p className="text-sm text-text-secondary">Proof Upload (Multer)</p>
          </div>
           <div className="flex items-center gap-2">
             <span className="material-symbols-outlined text-accent-purple text-sm">notifications_active</span>
             <p className="text-sm text-text-secondary">Admin Notification (Socket.io)</p>
          </div>
        </div>

        {/* Connection */}
        <div className="h-8 w-px bg-white/10 border-l border-dashed border-white/20"></div>

        {/* Admin Section */}
        <div className="w-full max-w-sm border border-white/10 bg-surface rounded-xl p-4 relative hover:border-accent-purple/30 transition-colors">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Admin
          </div>
           <div className="space-y-3 mt-2">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
              <span className="material-symbols-outlined text-accent-purple">rate_review</span>
              <div className="text-sm">
                <p className="font-semibold text-white">Review Order</p>
                <p className="text-text-secondary text-xs">Validate GCash receipt & timestamps</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
               <div className="p-2 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                 <span className="text-green-400 text-xs font-bold">Approve</span>
               </div>
               <div className="p-2 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                 <span className="text-red-400 text-xs font-bold">Decline</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
