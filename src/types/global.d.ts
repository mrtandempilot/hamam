interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: any[];
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 