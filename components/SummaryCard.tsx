import React from 'react';
import { SummaryItem } from '../types';
import { ShortcutKey } from './ShortcutKey';

interface SummaryCardProps {
  title: string;
  items: SummaryItem[];
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, items }) => {
  const renderKeys = (keys: string[]) => (
    <div className="flex items-center space-x-1 flex-wrap gap-y-1">
      {keys.map((key, i) => (
        <ShortcutKey key={i}>{key}</ShortcutKey>
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/50 rounded-xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-3 bg-gray-900/70 rounded-lg">
            <p className="flex-1 text-lg text-gray-200 mb-2 lg:mb-0 mr-4">{item.description}</p>
            <div className="flex flex-col sm:flex-row items-center w-full lg:w-auto gap-2 sm:gap-4">
              <div className="flex w-full sm:w-auto items-center gap-3">
                <span className="w-8 flex-shrink-0 text-xs font-semibold text-gray-400 uppercase">mac</span>
                {renderKeys(item.mac)}
              </div>
              <div className="hidden sm:block h-6 border-l border-gray-600"></div>
              <div className="flex w-full sm:w-auto items-center gap-3">
                <span className="w-8 flex-shrink-0 text-xs font-semibold text-gray-400 uppercase">win</span>
                {renderKeys(item.win)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
