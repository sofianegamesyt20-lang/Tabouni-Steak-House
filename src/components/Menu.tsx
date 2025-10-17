import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  featured: boolean;
  image: string;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
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

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'steaks', name: 'Premium Steaks' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'sides', name: 'Sides' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Wagyu Ribeye',
      description: 'Premium Japanese A5 Wagyu, 16oz, perfectly marbled',
      price: '$125',
      category: 'steaks',
      featured: true,
      image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Filet Mignon',
      description: 'Tender center-cut, 8oz, wrapped in bacon',
      price: '$58',
      category: 'steaks',
      featured: true,
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'New York Strip',
      description: 'USDA Prime, 14oz, dry-aged 28 days',
      price: '$68',
      category: 'steaks',
      featured: false,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Porterhouse',
      description: 'The king of steaks, 24oz, for two',
      price: '$95',
      category: 'steaks',
      featured: true,
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      name: 'Beef Carpaccio',
      description: 'Thinly sliced raw beef, arugula, parmesan, truffle oil',
      price: '$24',
      category: 'appetizers',
      featured: false,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      name: 'Shrimp Cocktail',
      description: 'Jumbo prawns, house cocktail sauce',
      price: '$22',
      category: 'appetizers',
      featured: false,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 7,
      name: 'Truffle Fries',
      description: 'Hand-cut potatoes, parmesan, truffle oil',
      price: '$14',
      category: 'sides',
      featured: false,
      image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 8,
      name: 'Creamed Spinach',
      description: 'Classic preparation with garlic and cream',
      price: '$12',
      category: 'sides',
      featured: false,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 9,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake, molten center, vanilla ice cream',
      price: '$16',
      category: 'desserts',
      featured: false,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" ref={sectionRef} className="py-20 bg-neutral-charcoal">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-white mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-primary-red mx-auto mb-6"></div>
          <p className="text-neutral-offwhite/80 text-lg max-w-2xl mx-auto">
            Discover our selection of premium cuts and culinary masterpieces
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === category.id
                  ? 'text-white'
                  : 'text-neutral-offwhite/70 hover:text-white'
              }`}
            >
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-primary-red"></div>
              )}
              {activeCategory === category.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-red"></div>
              )}
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,0,0,0.4)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-primary-red text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-neutral-charcoal group-hover:text-primary-red transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-primary-red font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-neutral-charcoal/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-neutral-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-neutral-charcoal">{selectedItem.name}</h3>
                <span className="text-primary-red font-bold text-2xl">{selectedItem.price}</span>
              </div>
              <p className="text-neutral-charcoal/80 text-lg mb-6">{selectedItem.description}</p>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full bg-primary-red text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
