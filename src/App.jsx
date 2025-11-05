import React from 'react';
import HeroSpline from './components/HeroSpline';
import QuickActions from './components/QuickActions';
import NewsSection from './components/NewsSection';
import BottomNav from './components/BottomNav';
import { Bell, Globe, Moon, Sun } from 'lucide-react';

function App() {
  const [active, setActive] = React.useState('home');
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const handleAction = (key) => {
    if (key === 'event') setActive('news');
    if (key === 'peta') setActive('map');
    if (key === 'layanan') setActive('home');
    if (key === 'pengaduan') setActive('news');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="mx-auto max-w-md pb-24">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="text-base font-semibold">Singgah (Barru)</div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm active:scale-95" aria-label="Notif">
                <Bell size={18} />
              </button>
              <button
                onClick={() => setDark((v) => !v)}
                className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm active:scale-95"
                aria-label="Tema"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        {active === 'home' && (
          <main>
            <HeroSpline />
            <QuickActions onSelect={handleAction} />
            <NewsSection />
          </main>
        )}

        {active === 'news' && (
          <main className="pt-2">
            <div className="px-4">
              <h2 className="text-base font-semibold text-slate-800 mb-2">Berita & Pengumuman</h2>
              <p className="text-sm text-slate-600">Kabar terbaru seputar layanan, kegiatan, dan pengumuman resmi.</p>
            </div>
            <NewsSection />
          </main>
        )}

        {active === 'map' && (
          <main className="px-4 pt-4 space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
              <h3 className="text-sm font-semibold text-slate-800">Peta Interaktif</h3>
              <p className="text-sm text-slate-600 mt-1">
                Jelajahi fasilitas publik, kantor layanan, dan rute tercepat.
              </p>
              <div className="mt-3 aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 border border-slate-200 grid place-items-center text-slate-500 text-sm">
                Komponen Peta akan ditampilkan di sini.
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">Bahasa</p>
                <p className="text-xs text-slate-600">Dukungan multi-bahasa segera hadir</p>
              </div>
              <Globe size={18} className="text-slate-500" />
            </div>
          </main>
        )}

        {active === 'settings' && (
          <main className="px-4 pt-4 space-y-3">
            <section className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
              <h3 className="text-sm font-semibold text-slate-800">Pengaturan</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-slate-700">Tema gelap</span>
                <button
                  onClick={() => setDark((v) => !v)}
                  className={`w-12 h-7 rounded-full transition bg-slate-200 relative ${dark ? 'bg-indigo-500' : 'bg-slate-200'}`}
                  aria-label="Toggle dark"
                >
                  <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition ${dark ? 'translate-x-5' : ''}`} />
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-slate-700">Notifikasi</span>
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white shadow-sm active:scale-95 text-xs">
                  Kelola
                </button>
              </div>
            </section>

            <section className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
              <h4 className="text-xs font-medium text-slate-500 mb-1">Tentang</h4>
              <p className="text-sm text-slate-700">Aplikasi PWA ringan untuk informasi dan layanan publik Kabupaten Barru.</p>
            </section>
          </main>
        )}
      </div>

      {/* Bottom navigation */}
      <BottomNav active={active} onChange={setActive} />
    </div>
  );
}

export default App;
