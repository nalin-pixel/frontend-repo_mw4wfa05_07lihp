import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSpline = () => {
  return (
    <section className="relative w-full h-72 overflow-hidden rounded-b-3xl shadow-sm">
      <Spline
        scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft gradient to improve text contrast; doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white" />

      <div className="absolute inset-x-0 bottom-6 px-5">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="backdrop-blur-sm bg-white/70 border border-white/60 rounded-2xl p-4 shadow-sm"
        >
          <h1 className="text-xl font-semibold text-slate-800">
            Singgah (Barru)
          </h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Layanan publik, berita, acara, dan informasi kabupaten – di satu aplikasi ringan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSpline;
