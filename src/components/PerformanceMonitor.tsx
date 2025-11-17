import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstByte: navEntry.responseStart - navEntry.requestStart
          });
        }
        
        if (entry.entryType === 'paint') {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['navigation', 'paint'] });
    
    return () => observer.disconnect();
  }, []);

  return null;
};

// Usage: Add to your App component in development
// {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}