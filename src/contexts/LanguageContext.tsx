import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.reservations': 'Reservations',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Where Premium Cuts Meet',
    'hero.subtitle.highlight': 'Culinary Perfection',
    'hero.description': 'Experience the finest selection of aged steaks, prepared to perfection in our award-winning kitchen',
    'hero.book.table': 'Book a Table',
    'hero.view.menu': 'View Menu',
    
    // About Section
    'about.title': 'About Tabouni',
    'about.subtitle': 'A Legacy of Excellence',
    'about.description': 'For over 15 years, Tabouni Steak House has been the premier destination for steak lovers seeking the ultimate dining experience. Our commitment to quality, tradition, and innovation has made us a landmark in culinary excellence.',
    'about.stats.years': 'Years of Excellence',
    'about.stats.guests': 'Satisfied Guests',
    'about.stats.cuts': 'Premium Cuts',
    'about.quality.title': 'Uncompromising Quality',
    'about.quality.description': 'Every steak is carefully selected, aged to perfection, and prepared by our master chefs who bring decades of experience to every plate. We source only the highest quality beef, ensuring each bite is tender, flavorful, and memorable.',
    
    // Menu Section
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Culinary Masterpieces',
    'menu.description': 'Discover our carefully curated selection of premium steaks, each prepared with precision and passion',
    'menu.category.all': 'All',
    'menu.category.steaks': 'Premium Steaks',
    'menu.category.appetizers': 'Appetizers',
    'menu.category.sides': 'Sides',
    'menu.category.desserts': 'Desserts',
    'menu.featured': 'Featured',
    'menu.view.details': 'View Details',
    'menu.add.favorite': 'Add to Favorites',
    
    // Experience Section
    'experience.title': 'The Tabouni Experience',
    'experience.subtitle': 'More Than Just a Meal',
    'experience.quality.title': 'Premium Quality',
    'experience.quality.description': 'We source only the finest cuts from trusted suppliers',
    'experience.atmosphere.title': 'Elegant Atmosphere',
    'experience.atmosphere.description': 'Sophisticated ambiance perfect for any occasion',
    'experience.service.title': 'Exceptional Service',
    'experience.service.description': 'Dedicated staff committed to your satisfaction',
    
    // Gallery Section
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'A Visual Journey',
    'gallery.description': 'Take a glimpse into our world of culinary excellence',
    'gallery.filter.all': 'All',
    'gallery.filter.dishes': 'Dishes',
    'gallery.filter.ambiance': 'Ambiance',
    'gallery.filter.events': 'Special Events',
    'gallery.view.image': 'View Image',
    
    // Reservations Section
    'reservations.title': 'Reservations',
    'reservations.subtitle': 'Book Your Table',
    'reservations.description': 'Reserve your spot for an unforgettable dining experience',
    'reservations.form.name': 'Name',
    'reservations.form.email': 'Email',
    'reservations.form.phone': 'Phone',
    'reservations.form.guests': 'Guests',
    'reservations.form.date': 'Date',
    'reservations.form.time': 'Time',
    'reservations.form.special': 'Special Requests',
    'reservations.form.submit': 'Reserve Table',
    'reservations.form.success': 'Reservation confirmed! We look forward to serving you.',
    
    // Testimonials Section
    'testimonials.title': 'What Our Guests Say',
    'testimonials.subtitle': 'Testimonials',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.location.title': 'Location',
    'contact.location.address': '98GJ+RCP, Tiaret, Algeria',
    'contact.phone.title': 'Phone',
    'contact.email.title': 'Email',
    'contact.hours.title': 'Opening Hours',
    'contact.hours.weekdays': 'Monday - Thursday',
    'contact.hours.weekend': 'Friday - Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.time1': '5:00 PM - 10:00 PM',
    'contact.hours.time2': '5:00 PM - 11:00 PM',
    'contact.hours.time3': '4:00 PM - 9:00 PM',
    'contact.social.title': 'Follow Us',
    'contact.social.subtitle': 'Stay connected for exclusive updates',
    
    // Footer Section
    'footer.description': 'Where premium cuts meet culinary perfection. Experience the finest steakhouse in town.',
    'footer.links.title': 'Quick Links',
    'footer.instagram.title': 'Instagram',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Common
    'common.loading': 'Preparing your premium experience...',
    'common.language': 'Language',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.menu': 'Menu',
    'nav.gallery': 'Galerie',
    'nav.reservations': 'Réservations',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Où les Coupes Premium Rencontrent',
    'hero.subtitle.highlight': 'la Perfection Culinaire',
    'hero.description': 'Découvrez notre sélection raffinée de steaks vieillis, préparés à la perfection dans notre cuisine primée',
    'hero.book.table': 'Réserver une Table',
    'hero.view.menu': 'Voir le Menu',
    
    // About Section
    'about.title': 'À Propos de Tabouni',
    'about.subtitle': 'Un Héritage d\'Excellence',
    'about.description': 'Depuis plus de 15 ans, Tabouni Steak House est la destination de choix pour les amateurs de steak recherchant l\'expérience culinaire ultime. Notre engagement envers la qualité, la tradition et l\'innovation nous a établis comme un repère d\'excellence culinaire.',
    'about.stats.years': 'Années d\'Excellence',
    'about.stats.guests': 'Clients Satisfaits',
    'about.stats.cuts': 'Coupes Premium',
    'about.quality.title': 'Qualité Inébranlable',
    'about.quality.description': 'Chaque steak est soigneusement sélectionné, vieilli à la perfection et préparé par nos chefs maîtres qui apportent des décennies d\'expérience à chaque assiette. Nous nous approvisionnons uniquement en bœuf de la plus haute qualité, garantissant que chaque bouchée soit tendre, savoureuse et mémorable.',
    
    // Menu Section
    'menu.title': 'Notre Menu',
    'menu.subtitle': 'Chefs-d\'Œuvre Culinaires',
    'menu.description': 'Découvrez notre sélection soigneusement choisie de steaks premium, chacun préparé avec précision et passion',
    'menu.category.all': 'Tout',
    'menu.category.steaks': 'Steaks Premium',
    'menu.category.appetizers': 'Entrées',
    'menu.category.sides': 'Accompagnements',
    'menu.category.desserts': 'Desserts',
    'menu.featured': 'En Vedette',
    'menu.view.details': 'Voir Détails',
    'menu.add.favorite': 'Ajouter aux Favoris',
    
    // Experience Section
    'experience.title': 'L\'Expérience Tabouni',
    'experience.subtitle': 'Plus Qu\'un Simple Repas',
    'experience.quality.title': 'Qualité Premium',
    'experience.quality.description': 'Nous nous approvisionnons uniquement auprès des meilleurs fournisseurs',
    'experience.atmosphere.title': 'Ambiance Élégante',
    'experience.atmosphere.description': 'Ambiance sophistiquée parfaite pour toute occasion',
    'experience.service.title': 'Service Exceptionnel',
    'experience.service.description': 'Personnel dévoué engagé dans votre satisfaction',
    
    // Gallery Section
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Un Voyage Visuel',
    'gallery.description': 'Jetez un coup d\'œil dans notre monde d\'excellence culinaire',
    'gallery.filter.all': 'Tout',
    'gallery.filter.dishes': 'Plats',
    'gallery.filter.ambiance': 'Ambiance',
    'gallery.filter.events': 'Événements Spéciaux',
    'gallery.view.image': 'Voir Image',
    
    // Reservations Section
    'reservations.title': 'Réservations',
    'reservations.subtitle': 'Réservez Votre Table',
    'reservations.description': 'Réservez votre place pour une expérience culinaire inoubliable',
    'reservations.form.name': 'Nom',
    'reservations.form.email': 'Email',
    'reservations.form.phone': 'Téléphone',
    'reservations.form.guests': 'Invités',
    'reservations.form.date': 'Date',
    'reservations.form.time': 'Heure',
    'reservations.form.special': 'Demandes Spéciales',
    'reservations.form.submit': 'Réserver Table',
    'reservations.form.success': 'Réservation confirmée ! Nous avons hâte de vous servir.',
    
    // Testimonials Section
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Témoignages',
    
    // Contact Section
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Entrer en Contact',
    'contact.location.title': 'Localisation',
    'contact.location.address': '98GJ+RCP, Tiaret, Algérie',
    'contact.phone.title': 'Téléphone',
    'contact.email.title': 'Email',
    'contact.hours.title': 'Heures d\'Ouverture',
    'contact.hours.weekdays': 'Lundi - Jeudi',
    'contact.hours.weekend': 'Vendredi - Samedi',
    'contact.hours.sunday': 'Dimanche',
    'contact.hours.time1': '17h00 - 22h00',
    'contact.hours.time2': '17h00 - 23h00',
    'contact.hours.time3': '16h00 - 21h00',
    'contact.social.title': 'Suivez-Nous',
    'contact.social.subtitle': 'Restez connecté pour des mises à jour exclusives',
    
    // Footer Section
    'footer.description': 'Où les coupes premium rencontrent la perfection culinaire. Découvrez la meilleure steakhouse de la ville.',
    'footer.links.title': 'Liens Rapides',
    'footer.instagram.title': 'Instagram',
    'footer.copyright': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    
    // Common
    'common.loading': 'Préparation de votre expérience premium...',
    'common.language': 'Langue',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
