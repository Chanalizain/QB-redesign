import Navbar from './components/nav/Navbar';
import Hero from './components/home/Hero';
import Services from './components/service/Services';
import About from './components/about/About';
import Careers from './components/career/Careers';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Careers />
        <Contact />
      </main>
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 QB Tech. Built for Internship Submission.
      </footer>
    </div>
  );
}

export default App;