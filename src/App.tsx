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

function App() {
  return (
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
  );
}

export default App;
