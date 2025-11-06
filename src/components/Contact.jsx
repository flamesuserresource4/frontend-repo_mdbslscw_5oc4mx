import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Kontakt & Öffnungszeiten
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="mt-2 space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gray-900" />
                <p>
                  Zur Blauen Hand<br />
                  Südstraße 10<br />
                  38100 Braunschweig
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-900" />
                <a href="tel:+4953124376" className="hover:underline">0531 24376</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-900" />
                <a href="mailto:info@zur-blauen-hand.de" className="hover:underline">info@zur-blauen-hand.de</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-gray-900" />
                <div>
                  <p className="font-medium text-gray-900">Öffnungszeiten</p>
                  <p>Montag – Freitag: 10:00 – 18:30 Uhr</p>
                  <p>Samstag: 10:00 – 16:00 Uhr</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://www.google.com/maps/place/S%C3%BCdstra%C3%9Fe+10,+38100+Braunschweig"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white shadow transition hover:bg-gray-800"
              >
                Route planen
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-2xl ring-1 ring-black/5">
            <iframe
              title="Karte"
              src="https://www.google.com/maps?q=S%C3%BCdstra%C3%9Fe%2010%2C%2038100%20Braunschweig&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
