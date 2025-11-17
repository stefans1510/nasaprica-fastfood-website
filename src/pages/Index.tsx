import { lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import VideoBanner from '@/components/VideoBanner';

// Lazy load components that are not immediately visible
const ProductSidebar = lazy(() => import('@/components/ProductSidebar'));
const ProductSection = lazy(() => import('@/components/ProductSection'));
const OrderInfo = lazy(() => import('@/components/OrderInfo'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));
const BackToTop = lazy(() => import('@/components/BackToTop'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <VideoBanner />
      
      <Suspense fallback={<div className="h-4" />}>
        <ProductSidebar />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading products...</div>
      </div>}>
        <ProductSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-4" />}>
        <OrderInfo />
        <ContactSection />
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default Index;
