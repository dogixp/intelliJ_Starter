
import React from 'react';

interface ShortcutKeyProps {
  children: React.ReactNode;
}

export const ShortcutKey: React.FC<ShortcutKeyProps> = ({ children }) => {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[24px] h-7 px-2 py-1 bg-gray-700 text-gray-200 border border-gray-600 border-b-2 rounded-md font-mono text-sm shadow-sm">
      {children}
    </kbd>
  );
};
