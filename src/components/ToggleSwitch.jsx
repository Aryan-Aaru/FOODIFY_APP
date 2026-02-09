import React from 'react';

const ToggleSwitch = ({ enabled, onChange }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onChange(); }}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
      enabled ? 'bg-red-500' : 'bg-gray-200'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

export default ToggleSwitch;
