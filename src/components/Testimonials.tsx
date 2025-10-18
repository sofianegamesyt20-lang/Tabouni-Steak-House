import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Anderson',
      role: 'Food Critic',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'The finest steakhouse I have ever experienced. The Wagyu ribeye was cooked to absolute perfection, and the service was impeccable. A truly world-class dining experience.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Business Executive',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'Tabouni has become my go-to place for business dinners. The atmosphere is sophisticated, the food is exceptional, and the staff always makes us feel special.',
      rating: 5,
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Regular Customer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      text: 'I have been coming here for years, and they never disappoint. Every visit is a culinary journey. The attention to detail and quality is unmatched.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-neutral-charcoal mb-4">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-primary-red mx-auto"></div>
        </div>

        <div className={`max-w-4xl mx-auto relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 block'
                    : 'opacity-0 absolute inset-0 translate-x-full hidden'
                }`}
              >
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <Star className="w-32 h-32 text-primary-red/10 absolute" />
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary-red shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-primary-red text-primary-red"
                        style={{
                          animation: `fadeIn 0.3s ease-in-out ${i * 0.1}s both`,
                        }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl text-neutral-charcoal/80 italic mb-6 leading-relaxed relative">
                    <span className="text-6xl text-primary-red absolute -top-4 -left-4 font-serif">"</span>
                    <span className="relative z-10">{testimonial.text}</span>
                    <span className="text-6xl text-primary-red absolute -bottom-8 -right-4 font-serif">"</span>
                  </blockquote>

                  <div>
                    <div className="font-bold text-xl text-neutral-charcoal">{testimonial.name}</div>
                    <div className="text-neutral-charcoal/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white border-2 border-primary-red text-primary-red p-3 rounded-full hover:bg-primary-red hover:text-white transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white border-2 border-primary-red text-primary-red p-3 rounded-full hover:bg-primary-red hover:text-white transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-red w-8' : 'bg-neutral-charcoal/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
