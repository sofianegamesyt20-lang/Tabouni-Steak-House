import { useEffect, useRef, useState } from 'react';
import { Award, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      icon: Award,
      title: t('experience.quality.title'),
      description: t('experience.quality.description'),
    },
    {
      icon: Sparkles,
      title: t('experience.atmosphere.title'),
      description: t('experience.atmosphere.description'),
    },
    {
      icon: Heart,
      title: t('experience.service.title'),
      description: t('experience.service.description'),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-neutral-black/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-white mb-4 glow-red">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-red/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                    <exp.icon className="w-12 h-12 text-primary-red" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-red transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-neutral-offwhite/80 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
