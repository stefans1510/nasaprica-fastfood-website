import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { productGroups } from '@/data/products';

const ProductSection = () => {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({});

  const handleSizeChange = (productId: string, sizeIndex: number) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: sizeIndex
    }));
  };

  return (
  <div id="products" className="min-h-screen py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24">
        {productGroups.map((group, idx) => (
          <section key={group.id} id={group.id} className="mb-16">
            <div className={`flex flex-col items-center ${idx === 0 ? 'mt-24 sm:mt-32' : ''} mb-8`}>
              <h2 className="flex items-center gap-2 text-3xl font-bold text-foreground text-center lg:text-left">
                {group.icon && <group.icon size={32} className="text-primary" />}
                {group.title}
              </h2>
              <div className="w-24 h-1 bg-primary rounded mt-2"></div>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.products.map((product) => {
                // Handle products with sizes
                if (product.sizes && product.sizes.length > 0) {
                  const selectedSizeIndex = selectedSizes[product.id] || 0;
                  const selectedSize = product.sizes[selectedSizeIndex];
                  const currentImage = selectedSize.image || product.image;
                  
                  return (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow shadow-b-xl rounded-2xl">
                      <CardContent className="p-2">
                        <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                          <img 
                            src={currentImage} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                        <div className="p-2">
                          <h3 className="font-semibold text-lg text-gray-700 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {product.description}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-primary">
                              {selectedSize.price} RSD
                            </span>
                            
                            {/* Size Selection - Inline with price */}
                            {product.sizes.length > 1 && (
                              <div className="flex flex-wrap gap-1">
                                {product.sizes.map((size, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleSizeChange(product.id, index)}
                                    className={`px-2 py-1 text-xs rounded border transition-colors ${
                                      selectedSizeIndex === index
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-gray-600 border-gray-300 hover:border-primary'
                                    }`}
                                  >
                                    {size.size}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                }
                
                // Handle products with fixed price (no sizes)
                return (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow shadow-b-xl rounded-2xl">
                    <CardContent className="p-2">
                      <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="font-semibold text-lg text-gray-700 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {product.description}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-primary">
                            {product.price} RSD
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
