import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'Customer' | 'Admin'>('Customer');

  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display text-white transition-colors duration-200 pb-24">
       {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-slate-800 transition-colors group">
            <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">arrow_back</span>
          </button>
          <h2 className="text-base font-bold leading-tight tracking-tight opacity-100 transition-opacity duration-300">Jusas Smoothie</h2>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-800 transition-colors group">
            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">code</span>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto">
        <div className="px-5 pt-6 pb-2">
          <div className="flex flex-col gap-1 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">E-Commerce</span>
              <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider">Completed</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white leading-[1.1]">Jusas Tropical Smoothie</h1>
            <p className="text-gray-400 text-base mt-2 leading-relaxed">
              Full-Stack solution bridging digital convenience with tropical refreshment.
            </p>
          </div>
          
          {/* Tech Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['Node.js', 'React', 'MySQL', 'Tailwind', 'AWS'].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-slate-800 shadow-sm whitespace-nowrap text-sm font-medium text-gray-300">
                <span className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-400' : 'bg-green-400'}`}></span> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="px-4 mt-4">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-surface group">
             <div className="w-full h-full bg-center bg-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCrf89fm_ResQYZ767pKnoIVR0BrpJ3MCNuPyX27HrzjawgQbRg0xAjNbp6suwWeOXtrZg65MxPHMqyCxUblGhb95hPY0EQ1yfWsLPc2YIwF41Mfc2VO1Z3tFhvb7FuHEWaYBVaEt53oazkgkPZkjP6O320QNg4H2UosApHv-5DE8K2e5LvVFsm3pzpkhSfxhBQp_Ge28MKJh45i_mJTAfFgloskjcmJFIZjvGkWQOx3Xnx3Rd5PVB8CtqRKfjSkuyxhLNTo03VT_w")'}}></div>
             <div className="absolute bottom-3 left-3 z-20">
               <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                 <span className="material-symbols-outlined text-white text-[16px]">devices</span>
                 <span className="text-white text-xs font-medium">Responsive Design</span>
               </div>
             </div>
          </div>
          <p className="mt-6 text-gray-300 leading-relaxed text-sm">
            A solo-developed platform handling the complete lifecycle of a smoothie shop. Features include real-time inventory tracking, a custom-built cart system, and simulated secure payments via GCash.
          </p>
        </div>

        <div className="h-px bg-slate-800 mx-5 my-8"></div>

        {/* Workflow */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Workflow Breakdown</h3>
            <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View Live Demo</span>
          </div>
          
          <div className="bg-surface p-1 rounded-lg flex mb-6 relative border border-slate-800">
            <button onClick={() => setActiveTab('Customer')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all relative z-10 ${activeTab === 'Customer' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}>Customer</button>
            <button onClick={() => setActiveTab('Admin')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all relative z-10 ${activeTab === 'Admin' ? 'bg-primary text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}>Admin</button>
          </div>

          <div className="border border-slate-800 bg-surface rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-[#151525]">
               <div className="flex items-center gap-2">
                 <div className="flex -space-x-1">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500"></div>
                 </div>
                 <span className="text-xs text-gray-400 ml-2">store.jusas.com/checkout</span>
               </div>
            </div>
            <div className="aspect-video bg-[#0c0c16] w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBh1T0nC7lABSRRHzcq_wBi4IqPMEEN9j4ikO4kHnbitnNjrZrTZ0BXkiGp1xAyzt_7oBfIWZ0f3S9Sf0a2IFbl5z8FWoCP1Ow--gyeDlF1hYDMqvbdGWimOGjAgQZw5kGiIXDe8Ew5l388odJKANb-_j_zDk_XReLvZcT8kS1vDhcPVumVeilF766Cb_N6fE0BftQvl4oXKr_eWetaWSBTNuw561lCj-htIvckxQsy5H3av95eqmmVbuw3patT2RbLIvSDC_eLNu4j")'}}></div>
            <div className="p-4">
              <h4 className="font-bold text-white mb-1">Seamless Checkout</h4>
              <p className="text-xs text-gray-400 leading-normal">
                Users can customize sugar levels and toppings. State is managed via React Context to persist cart data across sessions locally.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Architecture */}
        <div className="px-4 mt-10">
          <h3 className="text-lg font-bold mb-4 text-white">Technical Architecture</h3>
          <div className="relative bg-surface border border-slate-800 rounded-xl p-6">
            <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            <div className="relative flex flex-col items-center gap-6 z-10">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="h-16 w-full rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">laptop_chromebook</span> Frontend (React)
                  </span>
                </div>
                <div className="h-6 w-0.5 bg-gray-600 relative"></div>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="h-16 w-full rounded-lg bg-[#151525] border border-gray-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-green-500">dns</span> REST API (Node/Express)
                  </span>
                </div>
                <div className="h-6 w-0.5 bg-gray-600"></div>
              </div>
              <div className="h-12 w-3/4 rounded-full border-2 border-gray-600 flex items-center justify-center bg-transparent">
                 <span className="text-gray-400 font-medium text-xs flex items-center gap-2">
                   <span className="material-symbols-outlined text-[16px]">database</span> MySQL Database
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="px-4 mt-10 grid grid-cols-1 gap-4">
          <h3 className="text-lg font-bold text-white">Key Features</h3>
          <div className="flex rounded-lg bg-surface border border-slate-800 overflow-hidden shadow-sm">
             <div className="w-1/3 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvQCqlgJWb1GrENvrZ6rDrrtnjcsoMZ7MNBmyaINaYi-r5DONM0YqIkpTaSJn1ObT0Ka2-sAKOX9TqBWUB8_s-EC41YI7i3tt7waitvwFv9vc8B9gqIfIT6kCvtRcvSAq31BQUZE03Usur7eUV941VwWGwQT3-K2aQdwCuA7irF89D_niH46M6ej1rlwMo99ONPlCMJ_6a3O3yEDaQDNEO6BdD0oqMEH5RCciDp6K0tI9R-W3IhRaiYMGQwCu21KDzPH6PTov7MF_t")'}}></div>
             <div className="p-4 w-2/3 flex flex-col justify-center">
               <div className="size-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                 <span className="material-symbols-outlined text-blue-500 text-[18px]">payments</span>
               </div>
               <h4 className="font-bold text-white text-sm">GCash Mock</h4>
               <p className="text-xs text-gray-400 mt-1">Simulated payment gateway integration handling success, failure, and timeout states.</p>
             </div>
          </div>
          <div className="flex rounded-lg bg-surface border border-slate-800 overflow-hidden shadow-sm">
             <div className="p-4 w-2/3 flex flex-col justify-center">
               <div className="size-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
                 <span className="material-symbols-outlined text-purple-500 text-[18px]">monitoring</span>
               </div>
               <h4 className="font-bold text-white text-sm">Sales Analytics</h4>
               <p className="text-xs text-gray-400 mt-1">Visualizing daily revenue and top-selling flavors using Chart.js on the admin panel.</p>
             </div>
             <div className="w-1/3 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBB3I8vyhbUYyxnBzPrYL2sTPFGtd5RtGPy2P4CSDjWBMe5YyeU-_bsT0K8jQyDPS_StbFXIb0nxsDH9aneOUwqkfxCHC_rZGoaqYeaShG7t78gA9e2EA5W2rASpNCTc-ILG7v3yRoiHYDBGnmX18KQPrgx4b2ISV3oNx4j4SwClmi9I5V5hjfnTUyHwZoe7y4Wf1fnVurw_LIaZzHgnbRnenbU1Sp6BXRHYRWl3etUVlCzePxyQWF-ERu-H3vz-nb9O6bBEyw-5H05")'}}></div>
          </div>
        </div>

      </main>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button onClick={() => navigate('/contact')} className="group flex items-center justify-center rounded-full bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 pr-5 pl-4 py-3 h-14">
          <span className="material-symbols-outlined mr-2 group-hover:animate-pulse">mail</span>
          <span className="font-bold tracking-wide">Contact CJ</span>
        </button>
      </div>
    </div>
  );
};
