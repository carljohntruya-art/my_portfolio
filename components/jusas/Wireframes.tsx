import React from 'react';

export const Wireframes: React.FC = () => {
  return (
    <div className="w-full py-8">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">devices</span>
        Interface Wireframes
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Customer Mobile View */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">Customer Mobile App</h4>
          <div className="relative w-[280px] h-[580px] bg-background-light rounded-[3rem] border-4 border-surface shadow-2xl overflow-hidden flex flex-col">
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-surface rounded-b-xl w-32 mx-auto z-20"></div>
            
            {/* Phone Screen */}
            <div className="flex-1 bg-background text-white overflow-hidden relative flex flex-col">
              {/* Header */}
              <div className="pt-8 pb-2 px-4 flex justify-between items-center border-b border-border">
                <div className="size-8 rounded-full bg-surface"></div>
                <div className="h-3 w-20 bg-surface rounded-full"></div>
                <div className="size-8 rounded-full bg-surface"></div>
              </div>

              {/* Hero */}
              <div className="p-4">
                <div className="h-32 w-full bg-surface rounded-xl mb-4 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-primary/20"></div>
                </div>
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2 noscroll">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-8 w-20 bg-surface rounded-full shrink-0"></div>
                  ))}
                </div>
                
                {/* Product List */}
                <div className="space-y-3">
                  {[1, 2].map(i => (
                     <div key={i} className="flex gap-3 p-2 bg-surface/50 rounded-lg border border-border">
                        <div className="size-16 bg-surface-lighter rounded-md"></div>
                        <div className="flex-1 space-y-2 py-1">
                          <div className="h-3 w-3/4 bg-surface-lighter rounded"></div>
                          <div className="h-2 w-1/2 bg-surface-lighter rounded"></div>
                          <div className="flex justify-between items-center mt-2">
                             <div className="h-3 w-10 bg-primary/20 rounded"></div>
                             <div className="size-6 bg-primary rounded-full flex items-center justify-center">
                               <span className="text-[10px]">+</span>
                             </div>
                          </div>
                        </div>
                     </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="mt-auto h-16 bg-surface-lighter/80 backdrop-blur border-t border-border flex justify-around items-center px-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className={`size-8 rounded-full ${i===1 ? 'bg-primary/20 text-primary' : 'bg-transparent text-text-muted'} flex items-center justify-center`}>
                     <div className={`size-4 rounded-sm ${i===1 ? 'bg-primary' : 'bg-surface'}`}></div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

        {/* Admin Dashboard View */}
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">Admin Dashboard</h4>
          <div className="w-full max-w-sm h-[400px] bg-background-light rounded-lg border border-border shadow-xl overflow-hidden flex flex-col">
            {/* Browser Bar */}
            <div className="h-8 bg-surface border-b border-border flex items-center px-3 gap-2">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/50"></div>
                <div className="size-3 rounded-full bg-yellow-500/50"></div>
                <div className="size-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex-1 mx-4 h-5 bg-background/50 rounded flex items-center px-2">
                <span className="text-[10px] text-text-muted">jusas-admin.com/orders</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex">
              {/* Sidebar */}
              <div className="w-16 bg-surface border-r border-border flex flex-col items-center py-4 gap-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="size-8 rounded bg-surface-lighter"></div>
                 ))}
              </div>

              {/* Main Area */}
              <div className="flex-1 p-4 bg-background">
                <div className="flex justify-between items-center mb-4">
                   <div className="h-5 w-32 bg-surface rounded"></div>
                   <div className="h-8 w-24 bg-primary rounded"></div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                   <div className="h-20 bg-surface border border-border rounded-lg p-3">
                      <div className="h-3 w-12 bg-surface-lighter rounded mb-2"></div>
                      <div className="h-6 w-20 bg-surface-lighter rounded"></div>
                   </div>
                   <div className="h-20 bg-surface border border-border rounded-lg p-3">
                      <div className="h-3 w-12 bg-surface-lighter rounded mb-2"></div>
                      <div className="h-6 w-20 bg-surface-lighter rounded"></div>
                   </div>
                </div>

                {/* Table */}
                <div className="border border-border rounded-lg overflow-hidden">
                   <div className="h-8 bg-surface border-b border-border"></div>
                   {[1,2,3].map(i => (
                     <div key={i} className="h-10 bg-background-light border-b border-border flex items-center px-2 gap-2">
                        <div className="size-6 bg-surface rounded-full"></div>
                        <div className="h-2 w-16 bg-surface rounded"></div>
                        <div className="h-2 w-16 bg-surface rounded ml-auto"></div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
