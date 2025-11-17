import BurgerIcon from '../components/icons/BurgerIcon';
import KitchenScaleIcon from '../components/icons/KitchenScaleIcon';
import CrepeIcon from '../components/icons/CrepeIcon';
import SaladIcon from '../components/icons/SaladIcon';
import SodaBottleIcon from '../components/icons/SodaBottleIcon';
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
    icon: BurgerIcon,
    products: [
      {
        id: 'p1',
        name: 'Pljeskavica',
        description: 'Pljeskavica od roštilj mesa najboljeg kvaliteta',
        image: '/pljeskavica.png',
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
        image: '/pljeskavica.png',
        price: '320'
      },
      {
        id: 'p3',
        name: 'Susam pljeskavica 250g',
        description: 'Roštilj meso u susamu',
        image: '/pljeskavica_susam.png',
        price: '450'
      },
      {
        id: 'p4',
        name: 'Leskovačka pljeskavica 250g',
        description: 'Roštilj meso sa lukom i tucanom paprikom',
        image: '/leskovacka.png',
        price: '430'
      },
      {
        id: 'p5',
        name: 'Gurmanska pljeskavica',
        description: 'Roštilj meso sa kačkavaljem, slaninicom i tucanom paprikom',
        image: '/gurmanska.png',
        sizes: [
          { size: '200g', price: '400' },
          { size: '250g', price: '450' },
          { size: '300g', price: '470' }
        ]
      },
      {
        id: 'p6',
        name: 'Punjena pljeskavica',
        description: 'Roštilj meso punjeno kačkavaljem i slaninicom',
        image: '/pljeskavica.png',
        sizes: [
          { size: '250g', price: '450' },
          { size: '300g', price: '470' }
        ]
      },
      {
        id: 'p7',
        name: 'Pljeskavica Naša Priča 350g',
        description: 'Specijalitet kuće - Roštilj meso u junećoj maramici sa kačkavaljem',
        image: '/pljeskavica_np.png',
        price: '530'
      },
      {
        id: 'p8',
        name: 'Sombrero pljeskavica 250g',
        description: '',
        image: '/pljeskavica.png',
        price: '460'
      },
      {
        id: 'p9',
        name: 'Uštipci 250g',
        description: 'Sa kačkavaljem, tucanom paprikom i lukom',
        image: '/ustipci.png',
        price: '450'
      },
      {
        id: 'p10',
        name: 'Ćevapi 200g',
        description: 'Domaći ćevapi',
        image: '/cevapi.png',
        price: '400'
      },
      {
        id: 'p11',
        name: 'Šiš ćevap 180g',
        description: 'Šiš ćevap',
        image: '/placeholder.svg',
        price: '400'
      },
      {
        id: 'p12',
        name: 'Šiš ćevap gurmanski 200g',
        description: 'Gurmanski šiš ćevap',
        image: '/placeholder.svg',
        price: '420'
      },
      {
        id: 'p13',
        name: 'Kobasica',
        description: 'Roštilj kobasica',
        image: '/kobasica.png',
        sizes: [
          { size: '150g', price: '340' },
          { size: '220g', price: '410' }
        ]
      },
      {
        id: 'p14',
        name: 'Belo meso 200g',
        description: 'Pileći file sa roštilja',
        image: '/belo_meso.png',
        price: '400'
      },
      {
        id: 'p15',
        name: 'Punjeno belo 250g',
        description: 'Pileći file u junećoj maramici punjeno kačkavaljem i slaninicom',
        image: '/belo_meso.png',
        price: '520'
      },
      {
        id: 'p16',
        name: 'Rolovano belo 250g',
        description: 'Pileće belo meso sa slaninicom',
        image: '/rolovano_belo.png',
        price: '450'
      },
      {
        id: 'p17',
        name: 'Batak 200g',
        description: 'Pileći batak sa roštilja',
        image: '/batak1.png',
        price: '390'
      },
      {
        id: 'p18',
        name: 'Punjeni batak 250g',
        description: 'Pileći batak u junećoj maramici punjeno kačkavaljem i slaninicom',
        image: '/batak2.png',
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
    icon: KitchenScaleIcon,
    products: [
      {
        id: 'k1',
        name: 'Ćevapi 1kg',
        description: 'Kilogram domaćih ćevapa',
        image: '/cevapi1kg.png',
        price: '1400'
      },
      {
        id: 'k2',
        name: 'Uštipci 1kg',
        description: 'Kilogram uštipaka sa kačkavaljem, tucanom paprikom i lukom',
        image: '/ustipci1kg.png',
        price: '1450'
      },
      {
        id: 'k3',
        name: 'Belo meso 1kg',
        description: 'Kilogram pilećeg filea sa roštilja',
        image: '/belo_meso1kg.png',
        price: '1400'
      },
      {
        id: 'k4',
        name: 'Rolovano belo 1kg',
        description: 'Kilogram pilećeg belog mesa sa slaninicom',
        image: '/rolovano_belo1kg.png',
        price: '1500'
      },
      {
        id: 'k5',
        name: 'Batak 1kg',
        description: 'Kilogram pilećeg bataka sa roštilja',
        image: '/batak1kg.png',
        price: '1350'
      },
      {
        id: 'k6',
        name: 'Kobasice 1kg',
        description: 'Kilogram roštilj kobasica',
        image: '/kobasica1kg.png',
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
        image: '/mesano_meso1kg.png',
        price: '1400'
      },
      {
        id: 'k10',
        name: 'Naša Priča obrok',
        description: '1kg mešanog mesa, 4 somuna, 300g pomfrita i Coca-Cola 1.5l',
        image: '/np_obrok1kg.png',
        price: '1800'
      }
    ]
  },
  {
    id: 'salate',
    title: 'Salate',
    icon: SaladIcon,
    products: [
      {
        id: 's1',
        name: 'Mix salata 300g',
        description: 'Sezonska mešana salata - 300g',
        image: '/miks_salata.png',
        price: '300'
      },
      {
        id: 's2',
        name: 'Kupus salata 300g',
        description: 'Sveža kupus salata - 300g',
        image: '/kupus_salata.png',
        price: '250'
      }
    ]
  },
  {
    id: 'palacinke',
    title: 'Palačinke',
    icon: CrepeIcon,
    products: [
      {
        id: 'pa1',
        name: 'Nutela + plazma',
        description: 'Palačinka sa nutelom i plazmom',
        image: '/palacinka_krem.png',
        price: '350'
      },
      {
        id: 'pa2',
        name: 'Krem + plazma',
        description: 'Palačinka sa kremom i plazmom',
        image: '/palacinka_krem.png',
        price: '330'
      },
      {
        id: 'pa3',
        name: 'Džem',
        description: 'Palačinka sa džemom',
        image: '/palacinka_dzem.png',
        price: '280'
      }
    ]
  },
  {
    id: 'pica',
    title: 'Piće',
    icon: SodaBottleIcon,
    products: [
      {
        id: 'd1',
        name: 'Coca-Cola',
        description: '0.33l',
        image: '/cocacola.png',
        price: '130'
      },
      {
        id: 'd2',
        name: 'Coca-Cola Zero',
        description: '0.33l',
        image: '/cocacola_zero.png',
        price: '130'
      },
      {
        id: 'd3',
        name: 'Schweppes Bitter Lemon',
        description: '0.33l',
        image: '/schweppes.png',
        price: '130'
      },
      {
        id: 'd4',
        name: 'Fanta',
        description: '0.33l',
        image: '/fanta.png',
        price: '130'
      },
      {
        id: 'd5',
        name: 'Sprite',
        description: '0.33l',
        image: '/sprite.png',
        price: '130'
      },
      {
        id: 'd6',
        name: 'FuzeTea Peach Hibiskus',
        description: '0.5l',
        image: '/fuze_peach.png',
        price: '140'
      },
      {
        id: 'd7',
        name: 'Rosa',
        description: '0.5l',
        image: '/rosa.png',
        price: '100'
      },
      {
        id: 'd8',
        name: 'Rosa gazirana',
        description: '0.5l',
        image: '/rosa_gazirana.png',
        price: '100'
      }
    ]
  }
];

