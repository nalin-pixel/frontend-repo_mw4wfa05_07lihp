import React from 'react';
import { Megaphone, FileText, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const actions = [
  { key: 'layanan', label: 'Layanan', icon: FileText, color: 'from-teal-400 to-emerald-400' },
  { key: 'pengaduan', label: 'Pengaduan', icon: Megaphone, color: 'from-rose-400 to-pink-400' },
  { key: 'event', label: 'Event', icon: Calendar, color: 'from-indigo-400 to-violet-400' },
  { key: 'peta', label: 'Peta', icon: MapPin, color: 'from-sky-400 to-cyan-400' },
];

const QuickActions = ({ onSelect }) => {
  return (
    <div className="px-4 -mt-4">
      <div className="grid grid-cols-4 gap-3">
        {actions.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.button
              key={a.key}
              onClick={() => onSelect?.(a.key)}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-white shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.color} text-white flex items-center justify-center shadow-sm`}>
                <Icon size={22} />
              </div>
              <span className="text-[11px] font-medium text-slate-700">
                {a.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
