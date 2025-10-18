import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The loading screen will automatically complete after 1 second
    // as defined in the LoadingScreen component
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <LanguageProvider>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Menu />
          <Experience />
          <Gallery />
          <Reservations />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </LanguageProvider>
  );
}

export default App;
