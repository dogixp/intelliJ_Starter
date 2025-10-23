
export interface Shortcut {
  description: string;
  mac: string[];
  win: string[];
}

export interface ShortcutCategory {
  title: string;
  description: string;
  shortcuts: Shortcut[];
}

export interface SummaryItem {
  description: string;
  mac: string[];
  win: string[];
}
