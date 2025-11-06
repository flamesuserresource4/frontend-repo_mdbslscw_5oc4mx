import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Über uns</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Zur Blauen Hand ist eines der ältesten Geschäfte Braunschweigs mit Wurzeln bis ins Jahr 1452. Heute führen wir eine sorgfältig kuratierte Auswahl an Herrenmode – von klassisch bis modern – und verbinden Tradition mit zeitgemäßem Stil.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Unser Anspruch: hochwertige Materialien, präzise Passformen und ehrliche Beratung. Ob Business, Freizeit oder Anlass – wir finden gemeinsam das perfekte Outfit.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 via-white to-indigo-50 shadow-sm ring-1 ring-black/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
