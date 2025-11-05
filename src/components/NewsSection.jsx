import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, ArrowRight, Search } from 'lucide-react';

const Skeleton = () => (
  <div className="animate-pulse">
    <div className="h-36 w-full rounded-2xl bg-slate-200" />
    <div className="mt-3 h-4 w-3/4 rounded bg-slate-200" />
    <div className="mt-2 h-4 w-1/2 rounded bg-slate-200" />
  </div>
);

const NewsCard = ({ item }) => {
  return (
    <motion.div
      layout
      whileTap={{ scale: 0.99 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-36 w-full object-cover"
          loading="lazy"
        />
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur border border-slate-100 shadow-sm active:scale-95"
          aria-label="Bookmark"
        >
          <Bookmark size={18} className="text-slate-700" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-slate-600 mt-1 line-clamp-2">{item.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{item.category} • {item.date}</span>
          <button className="inline-flex items-center gap-1 text-indigo-600 font-medium active:scale-95">
            Baca <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const sampleNews = [
  {
    id: 1,
    title: 'Pengumuman Layanan Publik Terbaru Kabupaten Barru',
    excerpt: 'Pembaharuan jadwal pelayanan administrasi dan kemudahan akses dokumen.',
    category: 'Pengumuman',
    date: 'Hari ini',
    image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1887&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Kegiatan Masyarakat: Bersih Pantai dan Penanaman Mangrove',
    excerpt: 'Mari ikut serta menjaga lingkungan dalam rangkaian acara akhir pekan ini.',
    category: 'Kegiatan',
    date: 'Kemarin',
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Agenda Pemerintah Daerah dan Pelayanan Mobile',
    excerpt: 'Layanan keliling hadir di beberapa kecamatan, cek jadwal lengkapnya.',
    category: 'Agenda',
    date: '2 hari lalu',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1974&auto=format&fit=crop',
  },
];

const NewsSection = () => {
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setItems(sampleNews);
      setLoading(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const filtered = items.filter(
    (n) => n.title.toLowerCase().includes(query.toLowerCase()) || n.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="px-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-slate-800">Berita & Pengumuman</h2>
        <button className="text-xs text-indigo-600 font-medium active:scale-95">Lihat semua</button>
      </div>

      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari berita atau kategori"
          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence>
          {loading
            ? [0, 1, 2].map((i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Skeleton />
                </motion.div>
              ))
            : filtered.map((item) => <NewsCard key={item.id} item={item} />)}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsSection;
