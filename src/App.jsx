import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Zur Blauen Hand – Herrenmode in Braunschweig.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
