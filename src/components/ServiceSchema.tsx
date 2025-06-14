import { useEffect } from 'react';
import { getImageProps } from '@/utils/imageOptimization';
import { ImageKey } from '@/types/image';

interface Service {
  name: string;
  description: string;
  price: number;
  duration: string;
  imageKey: ImageKey;
  category: string;
  benefits: string[];
  includes: string[];
  requirements: string[];
  availability: string;
}

const services: Service[] = [
  {
    name: "Traditional Turkish Bath",
    description: "Experience the authentic Turkish hamam ritual with full body wash, kese exfoliation, and foam massage.",
    price: 400,
    duration: "90 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Deep cleansing and exfoliation",
      "Improved blood circulation",
      "Relaxation and stress relief",
      "Skin rejuvenation"
    ],
    includes: [
      "Traditional hamam experience",
      "Kese (body scrub)",
      "Foam massage",
      "Towel and slippers",
      "Locker usage"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "Royal Hamam Experience",
    description: "Luxury Turkish bath experience with additional treatments and private room service.",
    price: 600,
    duration: "120 minutes",
    imageKey: "services.royal",
    category: "Turkish Bath",
    benefits: [
      "Premium hamam experience",
      "Private room service",
      "Extended treatment time",
      "Additional pampering"
    ],
    includes: [
      "All Traditional Bath features",
      "Private room",
      "Extended massage",
      "Facial treatment",
      "Refreshments"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "Couples Hamam Package",
    description: "Romantic Turkish bath experience for two with champagne and private suite.",
    price: 1200,
    duration: "150 minutes",
    imageKey: "services.couples",
    category: "Turkish Bath",
    benefits: [
      "Private couple experience",
      "Romantic atmosphere",
      "Shared relaxation time",
      "Special memories"
    ],
    includes: [
      "Private suite for two",
      "Champagne service",
      "Extended treatments",
      "Couple massage",
      "Luxury amenities"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  }
];

export const ServiceSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://oludenizturkishbath.com#business",
      "name": "Ölüdeniz Turkish Hamam & Spa",
      "image": "https://oludenizturkishbath.com/images/exterior.jpg",
      "description": "Experience authentic Turkish hamam and luxury spa treatments in Ölüdeniz",
      "url": "https://oludenizturkishbath.com",
      "telephone": "+90-252-617-0060",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Çalış Beach Road, No:42",
        "addressLocality": "Ölüdeniz",
        "addressRegion": "Muğla",
        "postalCode": "48300",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.5500",
        "longitude": "29.1167"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "20:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Spa Services",
        "itemListElement": services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description,
            "price": service.price,
            "priceCurrency": "TRY",
            "duration": service.duration,
            "category": service.category,
            "includes": service.includes,
            "availability": service.availability
          }
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