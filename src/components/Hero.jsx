import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Zur Blauen Hand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg leading-relaxed text-gray-700"
          >
            Herrenmode in Braunschweig – seit 1452. Zeitlose Qualität, persönliche Beratung und ausgewählte Marken.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <a href="#services" className="rounded-full bg-gray-900 px-6 py-3 text-white shadow hover:bg-gray-800 transition">Unser Sortiment</a>
            <a href="#contact" className="rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:border-gray-400 transition">Kontakt</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
