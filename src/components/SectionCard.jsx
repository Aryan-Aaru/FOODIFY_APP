import React from 'react';

const SectionCard = ({ title, action, children, className = "" }) => (
  <div className={`bg-white rounded-3xl p-6 shadow-sm mb-6 ${className}`}>
    {(title || action) && (
      <div className="flex justify-between items-center mb-4 px-2">
        {title && <h2 className="text-lg font-bold text-gray-800">{title}</h2>}
        {action}
      </div>
    )}
    <div className="flex flex-col">
      {children}
    </div>
  </div>
);

export default SectionCard;
