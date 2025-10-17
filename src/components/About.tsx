import { useEffect, useRef, useState } from 'react';
import { Award, Users, Beef } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, guests: 0, cuts: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        years: Math.floor(15 * progress),
        guests: Math.floor(10000 * progress),
        cuts: Math.floor(50 * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  const stats = [
    { icon: Award, value: `${counters.years}+`, label: 'Years of Excellence', color: 'text-primary-red' },
    { icon: Users, value: `${counters.guests.toLocaleString()}+`, label: 'Satisfied Guests', color: 'text-primary-red' },
    { icon: Beef, value: `${counters.cuts}+`, label: 'Premium Cuts', color: 'text-primary-red' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-neutral-offwhite">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-primary-red"></div>
              <h2 className="text-5xl font-bold text-neutral-charcoal mb-4">
                Our Story
              </h2>
            </div>

            <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
              Founded with a passion for exceptional cuisine, Tabouni Steak House has been serving
              the finest cuts of premium beef for over 15 years. Our commitment to quality and
              culinary excellence has made us a destination for steak enthusiasts.
            </p>

            <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
              Every steak is carefully selected, aged to perfection, and prepared by our master chefs
              who bring decades of experience to every plate. We source only the highest quality beef,
              ensuring each bite is tender, flavorful, and memorable.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-500 delay-${index * 100}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 rounded-full border-4 border-primary-red/20"></div>
                    <div
                      className="absolute inset-0 rounded-full border-4 border-primary-red border-t-transparent animate-spin"
                      style={{ animationDuration: '3s' }}
                    ></div>
                    <stat.icon className={`w-12 h-12 ${stat.color} relative z-10 p-2`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-neutral-charcoal/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Restaurant interior"
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
                <img
                  src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Premium steak"
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Chef preparing"
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
                <img
                  src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fine dining"
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
