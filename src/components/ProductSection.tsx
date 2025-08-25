import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ProductGroup {
  id: string;
  title: string;
  products: Product[];
}

const ProductSection = () => {
  const productGroups: ProductGroup[] = [
    {
      id: 'rostilj-porcije',
      title: 'Roštilj na porcije',
      products: [
        {
          id: '1',
          name: 'Ćevapi',
          description: 'Tradicionalni ćevapi sa lukom i ajvarom',
          price: '8,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '2',
          name: 'Pljeskavica',
          description: 'Domaća pljeskavica sa pomfritom',
          price: '10,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '3',
          name: 'Kobasice',
          description: 'Domaće kobasice sa prilogom',
          price: '9,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '4',
          name: 'Ražnjići',
          description: 'Sočni ražnjići od svinjetine',
          price: '12,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '5',
          name: 'Vešalica',
          description: 'Mešano meso sa prilogom',
          price: '15,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '6',
          name: 'Steakovi',
          description: 'Saftni steakovi po želji',
          price: '18,00 KM',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'rostilj-kilo',
      title: 'Roštilj na kilo',
      products: [
        {
          id: '7',
          name: 'Ćevapi - kg',
          description: 'Kilogram domaćih ćevapa',
          price: '28,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '8',
          name: 'Kobasice - kg',
          description: 'Kilogram domaćih kobasica',
          price: '32,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '9',
          name: 'Ražnjići - kg',
          description: 'Kilogram sočnih ražnjića',
          price: '35,00 KM',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'salate',
      title: 'Salate',
      products: [
        {
          id: '10',
          name: 'Shopska salata',
          description: 'Svježa shopska salata sa sirom',
          price: '6,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '11',
          name: 'Miješana salata',
          description: 'Sezonska miješana salata',
          price: '5,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '12',
          name: 'Grčka salata',
          description: 'Traditcionalna grčka salata',
          price: '7,00 KM',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'pica',
      title: 'Pića',
      products: [
        {
          id: '13',
          name: 'Coca Cola',
          description: 'Osvežavajuća Coca Cola 0.33l',
          price: '2,50 KM',
          image: '/placeholder.svg'
        },
        {
          id: '14',
          name: 'Pivo',
          description: 'Lokalno pivo 0.5l',
          price: '3,00 KM',
          image: '/placeholder.svg'
        },
        {
          id: '15',
          name: 'Voda',
          description: 'Prirodna voda 0.5l',
          price: '1,50 KM',
          image: '/placeholder.svg'
        }
      ]
    }
  ];

  return (
    <div id="products" className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24">
        {productGroups.map((group) => (
          <section key={group.id} id={group.id} className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center lg:text-left">
              {group.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;