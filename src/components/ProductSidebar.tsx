import React, { useState, useEffect } from 'react';
import { ChefHat, Scale, Salad, Coffee } from 'lucide-react';

const ProductSidebar = () => {
  const [activeCategory, setActiveCategory] = useState('rostilj-porcije');
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'rostilj-porcije', label: 'Roštilj na porcije', icon: ChefHat },
    { id: 'rostilj-kilo', label: 'Roštilj na kilo', icon: Scale },
    { id: 'salate', label: 'Salate', icon: Salad },
    { id: 'pica', label: 'Pića', icon: Coffee }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        const rect = productsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }

      // Update active category based on scroll position
      const scrollPosition = window.scrollY + 200;
      
      for (const category of categories) {
        const element = document.getElementById(category.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      <div className="lg:hidden sticky top-16 z-30 bg-background border-b border-border">
        <div className="flex justify-center space-x-1 p-2 overflow-x-auto">
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
                <span className="text-xs mt-1 text-center leading-tight">
                  {category.label.split(' ').map((word, index) => (
                    <span key={index} className="block">{word}</span>
                  ))}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSidebar;