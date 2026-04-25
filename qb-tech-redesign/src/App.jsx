import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Careers from './components/Careers';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-accentBlue/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Careers />
      </main>
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 QB Tech. Built for Internship Submission.
      </footer>
    </div>
  );
}

export default App;