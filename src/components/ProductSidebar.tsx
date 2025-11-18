import React, { useState, useEffect } from 'react';
import BurgerIcon from './icons/BurgerIcon';
import KitchenScaleIcon from './icons/KitchenScaleIcon';
import CrepeIcon from './icons/CrepeIcon';
import SaladIcon from './icons/SaladIcon';
import SodaBottleIcon from './icons/SodaBottleIcon';
import FrenchFriesIcon from './icons/FrenchFriesIcon';

const ProductSidebar = () => {
  const [activeCategory, setActiveCategory] = useState('rostilj-porcije');
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'rostilj-porcije', label: 'Roštilj na porcije', icon: BurgerIcon },
    { id: 'rostilj-kilo', label: 'Roštilj na kilo', icon: KitchenScaleIcon },
    { id: 'prilozi', label: 'Prilozi', icon: FrenchFriesIcon },
    { id: 'salate', label: 'Salate', icon: SaladIcon },
    { id: 'palacinke', label: 'Palačinke', icon: CrepeIcon},
    { id: 'pica', label: 'Piće', icon: SodaBottleIcon }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 64;
      const scrollY = window.scrollY;
      
      // Simple scroll threshold approach - only show sidebar after scrolling past video banner area
      // Video banner is 60vh-80vh, so roughly 60-80% of screen height
      const viewportHeight = window.innerHeight;
      const minScrollThreshold = viewportHeight * 0.5; // At least 60% of viewport height scrolled
      
      // First check: Must have scrolled past video banner area
      if (scrollY < minScrollThreshold) {
        setIsVisible(false);
        return;
      }
      
      // Second check: Must be in products section area
      let isVisible = false;
      const productsSection = document.getElementById('products');
      if (productsSection) {
        const rect = productsSection.getBoundingClientRect();
        isVisible = rect.top < viewportHeight && rect.bottom > 0;
      }
      
      // Third check: Hide if scrolled past last product section
      const lastCategory = categories[categories.length - 1];
      const lastSection = document.getElementById(lastCategory.id);
      if (lastSection) {
        const lastRect = lastSection.getBoundingClientRect();
        if (lastRect.bottom <= 0) {
          isVisible = false;
        }
      }
      
      setIsVisible(isVisible);

      // Update active category based on scroll position
      const scrollPosition = window.scrollY + navbarHeight + 8;
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const element = document.getElementById(category.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionBottom = rect.bottom + window.scrollY;
          const navbarHeight = 64 + 8;
          // If bottom of section is above navbar, activate next category
          if (window.scrollY + navbarHeight >= sectionBottom) {
            if (i < categories.length - 1) {
              setActiveCategory(categories[i + 1].id);
            }
          } else {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const navbarHeight = 64; // Adjust if your navbar height changes
      const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
          <div className="flex flex-col space-y-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`p-3 rounded-lg transition-all group relative ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  title={category.label}
                >
                  <IconComponent size={24} />
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {category.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Bar */}
  <div className="lg:hidden fixed top-16 left-0 w-full z-30 bg-background border-b border-border">
        <div className="flex justify-center space-x-4 p-2 overflow-x-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`flex flex-col items-center p-2 rounded-lg transition-all min-w-0 flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <IconComponent size={20} />
                {/* <span className="text-xs mt-1 text-center leading-tight">
                  {category.label.split(' ').map((word, index) => (
                    <span key={index} className="block">{word}</span>
                  ))}
                </span> */}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSidebar;