import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Premium Boulevard', 'Downtown District, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['reservations@tabouni.com', 'info@tabouni.com'],
    },
  ];

  const hours = [
    { day: 'Monday - Thursday', hours: '5:00 PM - 10:00 PM' },
    { day: 'Friday - Saturday', hours: '5:00 PM - 11:00 PM' },
    { day: 'Sunday', hours: '4:00 PM - 9:00 PM' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-neutral-offwhite">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-neutral-charcoal mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-primary-red mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-neutral-charcoal rounded-lg overflow-hidden h-full min-h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-red/30 rounded-full blur-xl animate-pulse"></div>
                  <MapPin className="w-12 h-12 text-primary-red relative drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-primary-red border-2 border-transparent"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-red/10 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary-red" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-neutral-charcoal mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-neutral-charcoal/70">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-primary-red border-2 border-transparent">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-red/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-neutral-charcoal mb-3">Opening Hours</h3>
                    <div className="space-y-2">
                      {hours.map((schedule, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-primary-red font-medium">{schedule.day}</span>
                          <span className="text-neutral-charcoal/70">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg text-neutral-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="bg-neutral-offwhite p-3 rounded-lg hover:bg-primary-red hover:text-white text-neutral-charcoal transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
