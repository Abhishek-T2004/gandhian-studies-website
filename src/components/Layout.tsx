import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Values', href: '#values' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Resources', href: '#resources' },
    { name: 'Events', href: '#events' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-brand-50/90 backdrop-blur-md fixed w-full z-50 top-0 border-b border-brand-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-brand-600 text-white p-2 rounded-full">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-brand-900 leading-tight">Centre of Gandhian</h1>
              <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">Studies and Action</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-brand-800 hover:text-brand-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-50 border-b border-brand-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-brand-800 hover:bg-brand-100 hover:text-brand-900 rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-950 text-brand-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-800 text-brand-100 p-2 rounded-full">
                <BookOpen size={24} />
              </div>
              <div>
                <h1 className="font-serif font-bold text-xl text-brand-50 leading-tight">Centre of Gandhian</h1>
                <p className="text-xs font-semibold text-brand-400 uppercase tracking-wider">Studies and Action</p>
              </div>
            </div>
            <p className="text-sm text-brand-300">
              Dedicated to promoting the philosophy, values, and vision of Mahatma Gandhi through education, action, and digital outreach.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-50 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-brand-300">
              <li><a href="#about" className="hover:text-white transition">About Centre</a></li>
              <li><a href="#timeline" className="hover:text-white transition">Timeline</a></li>
              <li><a href="#resources" className="hover:text-white transition">Learning Resources</a></li>
              <li><a href="#events" className="hover:text-white transition">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-50 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-brand-300">
              <li>123 Peace Avenue, Wisdom City</li>
              <li>Email: info@gandhianstudies.org</li>
              <li>Phone: +1 234 567 8900</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-800 mt-12 pt-8 text-center text-sm text-brand-400">
          <p>&copy; {new Date().getFullYear()} Centre of Gandhian Studies and Action. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};