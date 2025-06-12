import { useEffect } from 'react';
import { getImageProps } from '@/utils/imageOptimization';

const services = [
  {
    name: 'Traditional Turkish Hamam',
    description: 'Experience the authentic Turkish bath ritual with our traditional hamam service.',
    price: '€45',
    imageKey: 'services.traditional',
    duration: '60 minutes',
    category: 'Traditional Services'
  },
  {
    name: 'Royal Hamam Experience',
    description: 'Indulge in our premium hamam experience with additional treatments and luxury amenities.',
    price: '€85',
    imageKey: 'services.royal',
    duration: '90 minutes',
    category: 'Premium Services'
  },
  {
    name: 'Couples Hamam Package',
    description: 'Share the authentic Turkish bath experience with your loved one in a private setting.',
    price: '€120',
    imageKey: 'services.couples',
    duration: '120 minutes',
    category: 'Special Packages'
  }
];

const ServiceSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Spa",
      "name": "Ölüdeniz Hamam & Spa",
      "image": getImageProps('main').src,
      "description": "Experience authentic Turkish bath rituals and luxury spa treatments in Ölüdeniz.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ölüdeniz Mahallesi, Belcekız Caddesi No:123",
        "addressLocality": "Fethiye",
        "addressRegion": "Muğla",
        "postalCode": "48300",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.5478",
        "longitude": "29.1267"
      },
      "url": "https://oludeniz-hamam.com",
      "telephone": "+90 252 123 4567",
      "priceRange": "€€",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "22:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Spa Services",
        "itemListElement": services.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description,
            "image": getImageProps(service.imageKey as any).src,
            "category": service.category
          },
          "price": service.price,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "url": `https://oludeniz-hamam.com/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`
        }))
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default ServiceSchema; 