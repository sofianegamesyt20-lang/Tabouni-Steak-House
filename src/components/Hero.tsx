import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-black/70 via-neutral-black/50 to-neutral-black/70"></div>
      </div>

      <div className={`relative h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient glow-red mb-4">
            TABOUNI
          </h1>
          <div className="h-1 w-32 bg-primary-red mx-auto rounded-full animate-glow"></div>
        </div>

        <h2 className="text-2xl md:text-4xl font-serif text-white mb-6 tracking-wide">
          Where Premium Cuts Meet Culinary Perfection
        </h2>

        <p className="text-neutral-offwhite/80 text-lg md:text-xl mb-12 max-w-2xl">
          Experience the finest selection of aged steaks, prepared to perfection in our award-winning kitchen
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="group relative px-8 py-4 bg-primary-red text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,0,0,0.6)]">
            <span className="relative z-10">Reserve Table</span>
            <div className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>

          <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-red hover:border-primary-red hover:scale-105 hover:shadow-[0_0_30px_rgba(220,0,0,0.6)]">
            View Menu
          </button>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-red" />
        </div>
      </div>
    </section>
  );
}
