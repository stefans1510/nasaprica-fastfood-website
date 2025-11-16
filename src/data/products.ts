import { ChefHat, Scale, Salad, CupSoda } from 'lucide-react';
import React from 'react';

export interface ProductSize {
  size: string;
  price: string;
  image?: string; // Optional, if different sizes have different images
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string; // Default image for the product
  sizes?: ProductSize[]; // Optional for products with size variations
  price?: string; // For products with fixed price (no size variations)
}

export interface ProductGroup {
  id: string;
  title: string;
  products: Product[];
  icon?: React.ElementType;
}

export const productGroups: ProductGroup[] = [
  {
    id: 'rostilj-porcije',
    title: 'Roštilj na porcije',
    icon: ChefHat,
    products: [
      {
        id: 'p1',
        name: 'Pljeskavica',
        description: 'Roštilj meso',
        image: '/pljeskavica.avif',
        sizes: [
          { size: '120g', price: '270' },
          { size: '180g', price: '380' },
          { size: '250g', price: '430' },
          { size: '300g', price: '460' }
        ]
      },
      {
        id: 'p2',
        name: 'Pljeskavica 120g + pomfrit 150g',
        description: 'Pljeskavica 120g sa pomfritom 150g',
        image: '/pljeskavica.avif',
        price: '320'
      },
      {
        id: 'p3',
        name: 'Susam pljeskavica 250g',
        description: 'Susam, roštilj meso',
        image: '/pljeskavica_susam.avif',
        price: '450'
      },
      {
        id: 'p4',
        name: 'Leskovačka pljeskavica 250g',
        description: 'Luk, tucana, roštilj meso',
        image: '/leskovacka.avif',
        price: '430'
      },
      {
        id: 'p5',
        name: 'Gurmanska pljeskavica',
        description: 'Kačkavalj, slaninica, tucana, roštilj meso',
        image: '/gurmanska.avif',
        sizes: [
          { size: '200g', price: '400' },
          { size: '250g', price: '450' },
          { size: '300g', price: '470' }
        ]
      },
      {
        id: 'p6',
        name: 'Punjena pljeskavica',
        description: 'Kačkavalj, slaninica, roštilj meso',
        image: '/pljeskavica.avif',
        sizes: [
          { size: '250g', price: '450' },
          { size: '300g', price: '470' }
        ]
      },
      {
        id: 'p7',
        name: 'Pljeskavica Naša Priča 350g',
        description: '2 vrste kačkavalja, slaninica, skrama, roštilj meso',
        image: '/pljeskavica_np.avif',
        price: '530'
      },
      {
        id: 'p8',
        name: 'Sombrero pljeskavica 250g',
        description: 'Kačkavalj, ljutenica, slaninica, roštilj meso',
        image: '/pljeskavica.avif',
        price: '460'
      },
      {
        id: 'p9',
        name: 'Uštipci 250g',
        description: 'Kačkavalj, slaninica, tucana, roštilj meso',
        image: '/ustipci.avif',
        price: '450'
      },
      {
        id: 'p10',
        name: 'Ćevapi 200g',
        description: 'Domaći ćevapi',
        image: '/cevapi.avif',
        price: '400'
      },
      {
        id: 'p11',
        name: 'Šiš ćevap 180g',
        description: 'Šiš ćevap',
        image: '/cevapi.avif',
        price: '400'
      },
      {
        id: 'p12',
        name: 'Šiš ćevap gurmanski 200g',
        description: 'Gurmanski šiš ćevap',
        image: '/cevapi.avif',
        price: '420'
      },
      {
        id: 'p13',
        name: 'Kobasica',
        description: 'Roštilj kobasica',
        image: '/kobasica.avif',
        sizes: [
          { size: '150g', price: '340' },
          { size: '220g', price: '410' }
        ]
      },
      {
        id: 'p14',
        name: 'Belo meso 200g',
        description: 'Belo meso sa roštilja',
        image: '/belo_meso.avif',
        price: '400'
      },
      {
        id: 'p15',
        name: 'Punjeno belo 250g',
        description: 'Kačkavalj, skrama, slaninica, belo meso',
        image: '/belo_meso.avif',
        price: '520'
      },
      {
        id: 'p16',
        name: 'Rolo belo 250g',
        description: 'Slaninica, belo meso',
        image: '/rolovano_belo.avif',
        price: '450'
      },
      {
        id: 'p17',
        name: 'Batak 200g',
        description: 'Batak sa roštilja',
        image: '/batak.avif',
        price: '390'
      },
      {
        id: 'p18',
        name: 'Punjeni batak 250g',
        description: 'Kačkavalj, skrama, slaninica, batak',
        image: '/batak.avif',
        price: '500'
      },
      {
        id: 'p19',
        name: 'Vešalica 200g',
        description: 'Vešalica sa roštilja',
        image: '/placeholder.svg',
        price: '460'
      },
      {
        id: 'p20',
        name: 'Svinjski vrat 200g',
        description: 'Svinjski vrat sa roštilja',
        image: '/placeholder.svg',
        price: '460'
      }
    ]
  },
  {
    id: 'rostilj-kilo',
    title: 'Roštilj na kilogram',
    icon: Scale,
    products: [
      {
        id: 'k1',
        name: 'Ćevapi 1kg',
        description: 'Kilogram domaćih ćevapa',
        image: '/cevapi1kg.avif',
        price: '1400'
      },
      {
        id: 'k2',
        name: 'Uštipci 1kg',
        description: 'Kačkavalj, slaninica, tucana, roštilj meso',
        image: '/ustipci.avif',
        price: '1450'
      },
      {
        id: 'k3',
        name: 'Belo meso 1kg',
        description: 'Kilogram belog mesa',
        image: '/belo_meso.avif',
        price: '1400'
      },
      {
        id: 'k4',
        name: 'Rolovano belo 1kg',
        description: 'Slaninica, belo meso',
        image: '/rolovano_belo1kg.avif',
        price: '1500'
      },
      {
        id: 'k5',
        name: 'Batak 1kg',
        description: 'Kilogram bataka',
        image: '/batak.avif',
        price: '1350'
      },
      {
        id: 'k6',
        name: 'Kobasice 1kg',
        description: 'Kilogram roštilj kobasica',
        image: '/kobasica1kg.avif',
        price: '1450'
      },
      {
        id: 'k7',
        name: 'Vešalica 1kg',
        description: 'Kilogram vešalice',
        image: '/placeholder.svg',
        price: '1500'
      },
      {
        id: 'k8',
        name: 'Svinjski vrat 1kg',
        description: 'Kilogram svinjskog vrata',
        image: '/placeholder.svg',
        price: '1550'
      },
      {
        id: 'k9',
        name: 'Mešano meso 1kg',
        description: 'Ćevapi, belo meso, batak, uštipci, kobasice',
        image: '/placeholder.svg',
        price: '1400'
      },
      {
        id: 'k10',
        name: 'Naša Priča obrok',
        description: 'Specijalitet kuće',
        image: '/nasa_prica.png',
        price: '1800'
      }
    ]
  },
  {
    id: 'salate',
    title: 'Salate',
    icon: Salad,
    products: [
      {
        id: 's1',
        name: 'Mix salata 300g',
        description: 'Sezonska mešana salata - 300g',
        image: '/miks_salata.avif',
        price: '300'
      },
      {
        id: 's2',
        name: 'Kupus salata 300g',
        description: 'Sveža kupus salata - 300g',
        image: '/kupus_salata.avif',
        price: '250'
      }
    ]
  },
  {
    id: 'palacinke',
    title: 'Palačinke',
    products: [
      {
        id: 'pa1',
        name: 'Nutela + plazma',
        description: 'Palačinka sa nutelom i plazmom',
        image: '/placeholder.svg',
        price: '350'
      },
      {
        id: 'pa2',
        name: 'Krem + plazma',
        description: 'Palačinka sa kremom i plazmom',
        image: '/placeholder.svg',
        price: '330'
      },
      {
        id: 'pa3',
        name: 'Džem',
        description: 'Palačinka sa džemom',
        image: '/placeholder.svg',
        price: '280'
      }
    ]
  },
  {
    id: 'pica',
    title: 'Piće',
    icon: CupSoda,
    products: [
      {
        id: 'd1',
        name: 'Coca-Cola 0.33',
        description: 'Gazirani napitak - 0.33l',
        image: '/placeholder.svg',
        price: '130'
      },
      {
        id: 'd2',
        name: 'Coca-Cola Zero 0.33',
        description: 'Gazirani napitak - 0.33l',
        image: '/placeholder.svg',
        price: '130'
      },
      {
        id: 'd3',
        name: 'Schweppes Bitter Lemon 0.33',
        description: 'Osvežavajući napitak - 0.33l',
        image: '/schweppes.avif',
        price: '130'
      },
      {
        id: 'd4',
        name: 'Fanta 0.33',
        description: 'Osvežavajući napitak - 0.33l',
        image: '/fanta.avif',
        price: '130'
      },
      {
        id: 'd5',
        name: 'Sprite 0.33',
        description: 'Osvežavajući napitak - 0.33l',
        image: '/placeholder.svg',
        price: '130'
      },
      {
        id: 'd6',
        name: 'FuzeTea Peach Hibiskus 0.5',
        description: 'Osvežavajući napitak - 0.5l',
        image: '/placeholder.svg',
        price: '140'
      },
      {
        id: 'd7',
        name: 'Rosa 0.5',
        description: 'Prirodna mineralna voda - 0.5l',
        image: '/rosa.avif',
        price: '100'
      },
      {
        id: 'd8',
        name: 'Rosa gazirana 0.5',
        description: 'Prirodna gazirana voda - 0.5l',
        image: '/rosa.avif',
        price: '100'
      }
    ]
  }
];

