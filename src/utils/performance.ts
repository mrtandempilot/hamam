// Image optimization
export const optimizeImage = (src: string, width: number, quality: number = 80): string => {
  // If using a CDN or image optimization service, implement the transformation here
  return `${src}?w=${width}&q=${quality}`;
};

// Lazy loading utility
export const lazyLoad = (element: HTMLElement, callback: () => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(element);
      }
    });
  });

  observer.observe(element);
  return () => observer.disconnect();
};

// Resource hints
export const addResourceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
    { rel: 'preconnect', href: 'https://maps.googleapis.com' },
    { rel: 'preconnect', href: 'https://maps.gstatic.com' },
    { rel: 'preconnect', href: 'https://api.oludeniz-hamam.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
    { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
  ];

  hints.forEach(({ rel, href, crossorigin }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Cache control
export const setCacheControl = (response: Response) => {
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  return response;
};

// Performance monitoring
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = window.performance.timing;
    const metrics = {
      pageLoad: perfData.loadEventEnd - perfData.navigationStart,
      domLoad: perfData.domComplete - perfData.domLoading,
      firstPaint: perfData.responseEnd - perfData.navigationStart,
      domInteractive: perfData.domInteractive - perfData.navigationStart,
    };

    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }

    return metrics;
  }
  return null;
};

// Service Worker registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Initialize performance optimizations
export const initializePerformance = () => {
  addResourceHints();
  registerServiceWorker();
  measurePerformance();
}; 