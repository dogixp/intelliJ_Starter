import React from 'react';
import { Shortcut } from '../types';
import { ShortcutKey } from './ShortcutKey';

interface ShortcutItemProps {
  shortcut: Shortcut;
}

export const ShortcutItem: React.FC<ShortcutItemProps> = ({ shortcut }) => {
  const renderKeys = (keys: string[]) => (
    <div className="flex items-center space-x-1.5">
      {keys.map((key, i) => (
        <React.Fragment key={i}>
          <ShortcutKey>{key}</ShortcutKey>
          {i < keys.length - 1 && <span className="text-gray-500 text-sm">+</span>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-900/60 rounded-lg border border-gray-700/50">
      <p className="flex-1 text-gray-300 mb-3 sm:mb-0 mr-4">{shortcut.description}</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-6">
        <div className="flex items-center space-x-3">
          <span className="w-8 flex-shrink-0 text-xs font-semibold text-gray-400 uppercase">mac</span>
          {renderKeys(shortcut.mac)}
        </div>
        <div className="flex items-center space-x-3">
          <span className="w-8 flex-shrink-0 text-xs font-semibold text-gray-400 uppercase">win</span>
          {renderKeys(shortcut.win)}
        </div>
      </div>
    </div>
  );
};
