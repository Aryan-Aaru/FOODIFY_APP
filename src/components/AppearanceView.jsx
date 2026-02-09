import React, { useState } from 'react';
import { ArrowLeft, Sun, Moon, Monitor, Check } from 'lucide-react';
import SectionCard from './SectionCard';

const AppearanceView = ({ onBack }) => {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const themes = [
    {
      id: 'light',
      name: 'Light Mode',
      description: 'Clean and bright interface',
      icon: Sun,
      preview: 'bg-white border-gray-200'
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      description: 'Easy on the eyes at night',
      icon: Moon,
      preview: 'bg-gray-900 border-gray-700'
    },
    {
      id: 'auto',
      name: 'Auto',
      description: 'Matches your system settings',
      icon: Monitor,
      preview: 'bg-gradient-to-br from-white to-gray-900'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-full transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Appearance</h2>
      </div>

      <SectionCard title="Theme Preference">
        <div className="space-y-3 p-2">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const isSelected = selectedTheme === theme.id;

            return (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {/* Preview Box */}
                <div className={`w-16 h-16 rounded-xl border-2 ${theme.preview} flex items-center justify-center`}>
                  <Icon size={24} className={isSelected ? 'text-red-500' : 'text-gray-400'} />
                </div>

                {/* Theme Info */}
                <div className="flex-1 text-left">
                  <h3 className={`font-bold mb-1 ${isSelected ? 'text-red-600' : 'text-gray-900'}`}>
                    {theme.name}
                  </h3>
                  <p className="text-sm text-gray-500">{theme.description}</p>
                </div>

                {/* Check Mark */}
                {isSelected && (
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Check size={18} className="text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* Color Accent */}
      <SectionCard title="Accent Color">
        <div className="grid grid-cols-6 gap-3 p-2">
          {['red', 'blue', 'green', 'purple', 'orange', 'pink'].map((color) => (
            <button
              key={color}
              className={`aspect-square rounded-2xl bg-${color}-500 hover:scale-110 transition-transform border-4 ${
                color === 'red' ? 'border-gray-900' : 'border-transparent'
              }`}
              title={`${color} accent`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3 px-2">Currently using Red accent (default)</p>
      </SectionCard>

      {/* Preview */}
      <SectionCard title="Preview">
        <div className="p-6 bg-gray-50 rounded-2xl space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <div className="h-3 bg-gray-200 rounded w-24 mb-1"></div>
                <div className="h-2 bg-gray-100 rounded w-32"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded"></div>
              <div className="h-2 bg-gray-100 rounded w-5/6"></div>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500">Sample card preview</p>
        </div>
      </SectionCard>

      {/* Save Button */}
      <button className="w-full py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition shadow-md shadow-red-500/20">
        Apply Changes
      </button>

      {/* Note */}
      <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4">
        <p className="text-sm text-yellow-900">
          <strong>Note:</strong> Some appearance changes will take effect after refreshing the app.
        </p>
      </div>
    </div>
  );
};

export default AppearanceView;