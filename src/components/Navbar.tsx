import { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Menu', 'Gallery', 'Reservations', 'Contact'];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className={`w-8 h-8 transition-colors duration-300 ${
              isScrolled ? 'text-primary-red' : 'text-white'
            }`} />
            <span className={`text-2xl font-bold font-serif transition-colors duration-300 ${
              isScrolled ? 'text-primary-red' : 'text-white'
            }`}>
              TABOUNI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 hover:text-primary-red ${
                  isScrolled ? 'text-neutral-charcoal' : 'text-white'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-primary-red' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-primary-red transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-serif hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
