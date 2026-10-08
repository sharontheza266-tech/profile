import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Profile from '@/components/Profile';
import CareerObjective from '@/components/CareerObjective';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Strengths from '@/components/Strengths';
import Goals from '@/components/Goals';
import Development from '@/components/Development';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal, useActiveSection, useScrollProgress } from '@/hooks/useScroll';

function App() {
  useScrollReveal();
  useActiveSection();
  useScrollProgress();

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <CareerObjective />
        <Certifications />
        <Skills />
        <Strengths />
        <Goals />
        <Development />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
