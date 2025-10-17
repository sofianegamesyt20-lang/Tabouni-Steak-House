import { useState } from 'react';
import { Utensils, Instagram } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const instagramPosts = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300',
  ];

  return (
    <footer className="bg-gradient-to-b from-neutral-charcoal to-neutral-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-8 h-8 text-primary-red" />
              <span className="text-2xl font-bold font-serif">TABOUNI</span>
            </div>
            <p className="text-neutral-offwhite/70 leading-relaxed mb-4">
              Where premium cuts meet culinary perfection. Experience the finest steakhouse in town.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-red">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Menu', 'Gallery', 'Reservations', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-offwhite/70 hover:text-primary-red transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-red">Newsletter</h3>
            <p className="text-neutral-offwhite/70 mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:border-primary-red focus:outline-none transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-primary-red hover:bg-primary-dark text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,0,0,0.5)]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-red">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((post, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={post}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/60 transition-all duration-300 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-offwhite/60 text-sm">
              &copy; {new Date().getFullYear()} Tabouni Steak House. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-offwhite/60 hover:text-primary-red transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-offwhite/60 hover:text-primary-red transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
