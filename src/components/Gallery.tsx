import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  alt: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'dishes', name: 'Our Dishes' },
    { id: 'ambiance', name: 'Ambiance' },
    { id: 'events', name: 'Special Events' },
  ];

  const images: GalleryImage[] = [
    { id: 1, src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'dishes', alt: 'Grilled steak' },
    { id: 2, src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'ambiance', alt: 'Restaurant interior' },
    { id: 3, src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'dishes', alt: 'Beef ribs' },
    { id: 4, src: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'ambiance', alt: 'Elegant table setting' },
    { id: 5, src: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'dishes', alt: 'Ribeye steak' },
    { id: 6, src: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'events', alt: 'Private dining' },
    { id: 7, src: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'dishes', alt: 'T-bone steak' },
    { id: 8, src: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'ambiance', alt: 'Bar area' },
    { id: 9, src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'ambiance', alt: 'Dining room' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-neutral-offwhite">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-neutral-charcoal mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-primary-red mx-auto mb-6"></div>
          <p className="text-neutral-charcoal/70 text-lg max-w-2xl mx-auto">
            A glimpse into our culinary artistry and elegant atmosphere
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-red text-white shadow-lg'
                  : 'bg-white text-neutral-charcoal hover:bg-primary-red hover:text-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setLightboxImage(image.src)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                height: index % 3 === 0 ? '400px' : '300px',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                  View Image
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-red transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-neutral-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary-red transition-colors duration-300 z-10"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg border-4 border-primary-red shadow-[0_0_50px_rgba(220,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
