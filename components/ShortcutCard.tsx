
import React from 'react';
import { ShortcutCategory } from '../types';
import { ShortcutItem } from './ShortcutItem';

interface ShortcutCardProps {
  category: ShortcutCategory;
}

export const ShortcutCard: React.FC<ShortcutCardProps> = ({ category }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-2xl font-bold text-blue-300 mb-2">{category.title}</h2>
      <p className="text-gray-400 mb-6">{category.description}</p>
      <div className="space-y-4">
        {category.shortcuts.map((shortcut, index) => (
          <ShortcutItem key={index} shortcut={shortcut} />
        ))}
      </div>
    </div>
  );
};
