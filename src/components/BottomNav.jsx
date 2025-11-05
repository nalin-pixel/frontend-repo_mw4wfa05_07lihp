import React from 'react';
import { Home, Newspaper, Map, Settings } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Beranda', icon: Home },
  { key: 'news', label: 'Berita', icon: Newspaper },
  { key: 'map', label: 'Peta', icon: Map },
  { key: 'settings', label: 'Pengaturan', icon: Settings },
];

const BottomNav = ({ active = 'home', onChange }) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50">
      <div className="mx-auto max-w-md">
        <div className="mx-3 mb-3 rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-lg">
          <div className="grid grid-cols-4">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => onChange?.(t.key)}
                  className={`flex flex-col items-center justify-center gap-1 py-2.5 active:scale-95 transition ${
                    isActive ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  <Icon size={22} />
                  <span className="text-[11px] font-medium">{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
