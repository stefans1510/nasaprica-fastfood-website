import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Naša Priča, by{' '}
            <span className="text-primary font-medium">Prominent Solutions</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;