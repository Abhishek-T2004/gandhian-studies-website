import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Timeline } from './components/Timeline';
import { Media } from './components/Media';
import { Events } from './components/Events';
import { Quiz } from './components/Quiz';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-brand-50 text-brand-900 font-sans selection:bg-brand-300 selection:text-brand-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Timeline />
        <Media />
        <Events />
        <Quiz />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;