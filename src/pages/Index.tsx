import React from 'react';
import Navigation from '@/components/Navigation';
import ProductSidebar from '@/components/ProductSidebar';
import ProductSection from '@/components/ProductSection';
import OrderInfo from '@/components/OrderInfo';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProductSidebar />
      <ProductSection />
      <OrderInfo />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
