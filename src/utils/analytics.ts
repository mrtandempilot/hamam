import { useEffect } from 'react';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track user engagement
export const trackEngagement = (type: 'scroll' | 'click' | 'time', value: number) => {
  trackEvent('engagement', type, window.location.pathname, value);
};

// Track performance metrics
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const domLoadTime = perfData.domComplete - perfData.domLoading;

    trackEvent('performance', 'timing', 'page_load', pageLoadTime);
    trackEvent('performance', 'timing', 'dom_load', domLoadTime);
  }
};

// Track Core Web Vitals
export const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined') {
    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      trackEvent('web_vitals', 'LCP', window.location.pathname, lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        trackEvent('web_vitals', 'FID', window.location.pathname, entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    new PerformanceObserver((entryList) => {
      let cls = 0;
      entryList.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      trackEvent('web_vitals', 'CLS', window.location.pathname, cls);
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

// Track user behavior
export const trackUserBehavior = () => {
  if (typeof window !== 'undefined') {
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        trackEngagement('scroll', Math.round(maxScroll));
      }
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEngagement('time', timeSpent);
    });
  }
};

// Initialize all tracking
export const initializeTracking = () => {
  initGA();
  trackPerformance();
  trackCoreWebVitals();
  trackUserBehavior();
}; 