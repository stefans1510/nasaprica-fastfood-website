import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const kontaktElement = document.getElementById('kontakt');
      const porucivanjeElement = document.getElementById('porucivanje');
      let active = '';
      if (kontaktElement) {
        const offsetTop = kontaktElement.offsetTop;
        const offsetHeight = kontaktElement.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          active = 'kontakt';
        }
      }
      if (!active && porucivanjeElement) {
        const offsetTop = porucivanjeElement.offsetTop;
        const offsetHeight = porucivanjeElement.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          active = 'porucivanje';
        }
      }
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'porucivanje', label: 'PORUČI' },
    { id: 'kontakt', label: 'KONTAKT' }
  ];

  return (
  <nav className="fixed top-0 left-0 w-full z-50 border-b border-border backdrop-blur-sm shadow-lg" style={{ backgroundColor: '#fff3d9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/nasa_prica.jpg" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border" style={{ backgroundColor: '#fff3d9' }}>
            <div className="flex justify-center space-x-6 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-xs font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;