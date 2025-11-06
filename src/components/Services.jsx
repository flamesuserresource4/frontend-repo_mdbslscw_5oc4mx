import { motion } from 'framer-motion';
import { Star, Shirt, Scissors, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Shirt className="h-5 w-5" />,
    title: 'Herrenmode & Accessoires',
    text:
      'Ausgewählte Marken und Kollektionen: Anzüge, Sakkos, Hemden, Strick, Hosen, Schuhe und Accessoires – von klassisch bis modern.',
  },
  {
    icon: <Scissors className="h-5 w-5" />,
    title: 'Änderungsservice',
    text:
      'Perfekte Passform ist uns wichtig. Unsere erfahrenen Partner sorgen für fachgerechte Änderungen.',
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: 'Individuelle Beratung',
    text:
      'Persönliche Stilberatung – entspannt, ehrlich und kompetent. Wir nehmen uns Zeit für Sie.',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Zentrale Lage in Braunschweig',
    text:
      'Sie finden uns in der Innenstadt – gut erreichbar und mit viel Charme in einem historischen Haus.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-white to-violet-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Unser Sortiment & Service
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
