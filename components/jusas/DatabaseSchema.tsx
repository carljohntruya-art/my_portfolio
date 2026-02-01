import React from 'react';

export const DatabaseSchema: React.FC = () => {
  const tables = [
    {
      name: 'Users',
      color: 'border-blue-500',
      header: 'bg-blue-500/20',
      fields: ['id (PK)', 'email', 'password_hash', 'role (enum)', 'created_at']
    },
    {
      name: 'Orders',
      color: 'border-green-500',
      header: 'bg-green-500/20',
      fields: ['id (PK)', 'user_id (FK)', 'total_amount', 'status (enum)', 'proof_url']
    },
    {
      name: 'OrderItems',
      color: 'border-purple-500',
      header: 'bg-purple-500/20',
      fields: ['id (PK)', 'order_id (FK)', 'product_id (FK)', 'quantity', 'subtotal']
    },
    {
      name: 'Products',
      color: 'border-yellow-500',
      header: 'bg-yellow-500/20',
      fields: ['id (PK)', 'name', 'price', 'stock_qty', 'category_id']
    }
  ];

  return (
    <div className="w-full py-8">
       <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">database</span>
        Database Architecture
      </h3>

      <div className="overflow-x-auto pb-4">
        <div className="flex flex-wrap justify-center gap-6 min-w-[300px]">
          {tables.map((table) => (
            <div key={table.name} className={`w-40 bg-slate-800 rounded-lg border-t-4 ${table.color} shadow-lg overflow-hidden`}>
              <div className={`${table.header} p-2 text-center border-b border-slate-700`}>
                <span className="text-xs font-bold text-white uppercase tracking-wider">{table.name}</span>
              </div>
              <div className="p-3 space-y-1.5">
                {table.fields.map((field, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] text-gray-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                    {field}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Relationships Hint */}
        <div className="mt-6 flex justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
             <div className="w-4 h-0.5 bg-slate-600"></div>
             <span>One to Many</span>
             <div className="w-4 h-0.5 bg-slate-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
