import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-gray-900 text-lg">Zur Blauen Hand</a>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition">Über uns</a>
            <a href="#services" className="text-sm text-gray-700 hover:text-gray-900 transition">Sortiment</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition">Kontakt</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
