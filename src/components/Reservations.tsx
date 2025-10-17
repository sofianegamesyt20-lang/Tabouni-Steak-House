import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function Reservations() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservations" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-neutral-charcoal to-neutral-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-white mb-4 glow-red">Reserve Your Table</h2>
          <div className="w-24 h-1 bg-primary-red mx-auto mb-6"></div>
          <p className="text-neutral-offwhite/80 text-lg max-w-2xl mx-auto">
            Book your unforgettable dining experience at Tabouni Steak House
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-primary-red focus:outline-none transition-all duration-300 peer"
                  placeholder="Full Name"
                />
                <label className="absolute left-4 -top-2.5 bg-neutral-charcoal px-2 text-sm text-white/70 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-red">
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-primary-red focus:outline-none transition-all duration-300 peer"
                  placeholder="Email"
                />
                <label className="absolute left-4 -top-2.5 bg-neutral-charcoal px-2 text-sm text-white/70 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-red">
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-transparent focus:border-primary-red focus:outline-none transition-all duration-300 peer"
                  placeholder="Phone"
                />
                <label className="absolute left-4 -top-2.5 bg-neutral-charcoal px-2 text-sm text-white/70 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-red">
                  Phone
                </label>
              </div>

              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-3 text-white focus:border-primary-red focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num} className="bg-neutral-charcoal">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <Users className="absolute right-4 top-3.5 w-5 h-5 text-white/50 pointer-events-none" />
              </div>

              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-3 text-white focus:border-primary-red focus:outline-none transition-all duration-300"
                />
                <Calendar className="absolute right-4 top-3.5 w-5 h-5 text-white/50 pointer-events-none" />
              </div>

              <div className="relative">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-3 text-white focus:border-primary-red focus:outline-none transition-all duration-300"
                />
                <Clock className="absolute right-4 top-3.5 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-red text-white font-bold py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,0,0,0.6)] relative overflow-hidden group"
            >
              <span className="relative z-10">Confirm Reservation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-neutral-black/80 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center transform scale-100 animate-fade-in">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-red/20 rounded-full animate-ping"></div>
                <CheckCircle className="w-16 h-16 text-primary-red relative" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-charcoal mb-2">Reservation Confirmed!</h3>
            <p className="text-neutral-charcoal/70">
              We've sent a confirmation email to {formData.email}. See you soon!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
