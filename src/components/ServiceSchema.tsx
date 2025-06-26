import { useEffect } from 'react';
import { getImageProps } from '@/utils/imageOptimization';
import { ImageKey } from '@/types/image';

interface Service {
  name: string;
  description: string[];
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
    name: "BEFORE SUN PROGRAMME",
    description: [
      'Turkish Bath & Scrub Peeling (€50) (80 min.)',
      'Foam Massage (€50)',
      'Face Mask (€50)',
      'Face Massage (€50)',
      'Full Body Relax Massage (30 min.) (€50)'
    ],
    price: 0,
    duration: "80 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Prepares skin for sun exposure",
      "Deep cleansing and exfoliation",
      "Relaxation and stress relief",
      "Skin hydration and glow"
    ],
    includes: [
      "Turkish Bath & Scrub Peeling (80 min.)",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Full Body Relax Massage (30 min.)"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "AFTER SUN PROGRAMME",
    description: [
      'Turkish Bath (€50)',
      'Honey or Chocolate (€50) (80 min.)',
      'Foam Massage (€50)',
      'Face Mask (€50)',
      'Face Massage (€50)',
      'Full Body Relax Massage (30 min.) (€50)'
    ],
    price: 0,
    duration: "80 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Soothing and nourishing treatments",
      "Skin hydration and repair",
      "Relaxation and stress relief",
      "Post-sun skin recovery"
    ],
    includes: [
      "Turkish Bath",
      "Honey or Chocolate treatment (80 min.)",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Full Body Relax Massage (30 min.)"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "BRONZ PROGRAMME",
    description: [
      'Turkish Bath & Scrub Peeling (85 min.) (Carrots & Cocoa Oil)',
      'Foam Massage (€60)',
      'Face Mask (€60)',
      'Face Massage (€60)',
      'Bronz Oil Massage (40 min.) (€60)'
    ],
    price: 0,
    duration: "85 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Skin nourishment and bronzing",
      "Deep hydration",
      "Relaxation and stress relief",
      "Enhanced skin glow"
    ],
    includes: [
      "Turkish Bath & Scrub Peeling (85 min.) (Carrots & Cocoa Oil)",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Bronz Oil Massage (40 min.)"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "MEDICAL PROGRAMME",
    description: [
      'Turkish Bath (€70) (90 min.)',
      'Peeling (€70)',
      'Foam Massage (€70)',
      'Face Mask (€70)',
      'Face Massage (€70)',
      'Medical Massage (50 min.) (€70)'
    ],
    price: 0,
    duration: "90 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Therapeutic muscle relief",
      "Deep cleansing and exfoliation",
      "Improved circulation",
      "Stress and pain reduction"
    ],
    includes: [
      "Turkish Bath (90 min.)",
      "Peeling",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Medical Massage (50 min.)"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "SUPER PACKAGE",
    description: [
      'Sauna (Optional) (€75)',
      'Turkish Bath - Foam Massage (€75)',
      'Coffee Peeling (€75)',
      'Refloxology Massage (€75)',
      'Face Mask (€75)',
      'Mix Therapy (60 min.) (€75)',
      '(100 min.)'
    ],
    price: 0,
    duration: "100 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Comprehensive relaxation",
      "Detoxification and skin renewal",
      "Therapeutic massage benefits",
      "Enhanced well-being"
    ],
    includes: [
      "Sauna (Optional)",
      "Turkish Bath - Foam Massage",
      "Coffee Peeling",
      "Refloxology Massage",
      "Face Mask",
      "Mix Therapy (60 min.)"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "TURKISH BATH & MASSAGE",
    description: [
      'PEELING AND FOAM MASSAGE (30 min.) (€30)',
      'HONEY AND FOAM MASSAGE (30 min.) (€30)',
      'COFFEE PEELING (30 min.) (€30)',
      'SEA SALT PEELING (30 min.) (€30)'
    ],
    price: 0,
    duration: "30 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Cleansing and exfoliation",
      "Relaxation and stress relief",
      "Skin nourishment",
      "Affordable wellness"
    ],
    includes: [
      "Peeling and Foam Massage (30 min.)",
      "Honey and Foam Massage (30 min.)",
      "Coffee Peeling (30 min.)",
      "Sea Salt Peeling (30 min.)"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "CLASSIC MASSAGE",
    description: [
      'RELAX MASSAGE (35 min.) (€40)',
      'MEDICAL MASSAGE (30 min.) (€40)',
      'AROMATHERAPY MASSAGE (35 min.) (€40)',
      'SPORT MASSAGE (35 min.) (€40)',
      'REFLEXOLOGY MASSAGE (30 min.) (€40)',
      'BRONZE MASSAGE (35 min.) (€40)'
    ],
    price: 0,
    duration: "35 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Muscle relaxation",
      "Pain relief",
      "Improved circulation",
      "Stress reduction"
    ],
    includes: [
      "Relax Massage (35 min.)",
      "Medical Massage (30 min.)",
      "Aromatherapy Massage (35 min.)",
      "Sport Massage (35 min.)",
      "Reflexology Massage (30 min.)",
      "Bronze Massage (35 min.)"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "DELUXE MASSAGE",
    description: [
      'INDIAN HEAD MASSAGE (25 min) (€35)',
      'MEDICAL STONE BACK MASSAGE (30 min.) (€45)',
      'MEDICAL FULL BODY MASSAGE (60 min.) (€60)',
      'HOT STONE THERAPY (35 min.) (€55)',
      'DEEP TISSUE MASSAGE (60 min.) (€55)',
      'BALI MASSAGE (35 min.) (€55)',
      'MANDARA MASSAGE (4 HANDS) (60 min.) (€70)'
    ],
    price: 0,
    duration: "60 minutes",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Ultimate relaxation",
      "Specialized therapeutic techniques",
      "Deep muscle relief",
      "Luxurious spa experience"
    ],
    includes: [
      "Indian Head Massage (25 min)",
      "Medical Stone Back Massage (30 min.)",
      "Medical Full Body Massage (60 min.)",
      "Hot Stone Therapy (35 min.)",
      "Deep Tissue Massage (60 min.)",
      "Bali Massage (35 min.)",
      "Mandara Massage (4 Hands) (60 min.)"
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
            "description": service.description.join('\n'),
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