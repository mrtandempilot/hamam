import { useEffect } from 'react';
import { getImageProps } from '@/utils/imageOptimization';
import { ImageKey } from '@/types/image';

interface Service {
  name: string;
  description: string | string[];
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
    name: "TURKISH BATH & MASSAGE",
    description: [
      'PEELING AND FOAM MASSAGE (30 min.) €30',
      'HONEY AND FOAM MASSAGE (30 min.) €30',
      'COFFEE PEELING (30 min.) €30',
      'SEA SALT PEELING (30 min.) €30',
      'Sauna Optional'
    ],
    price: 30,
    duration: "30 min.",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Cleansing and exfoliation",
      "Relaxation and stress relief",
      "Skin nourishment",
      "Affordable wellness"
    ],
    includes: [
      "Peeling and Foam Massage (30 min.) €30",
      "Honey and Foam Massage (30 min.) €30",
      "Coffee Peeling (30 min.) €30",
      "Sea Salt Peeling (30 min.) €30",
      "Sauna Optional"
    ],
    requirements: [
      "Swimsuit or disposable underwear",
      "No health conditions preventing heat exposure"
    ],
    availability: "Daily 09:00-21:00"
  },
  {
    name: "BEFORE SUN PROGRAMME",
    description: [
      'Turkish Bath & Scrub Peeling',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Full Body Relax Massage',
      'Sauna Optional'
    ],
    price: 50,
    duration: "80 min.",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Prepares skin for sun exposure",
      "Deep cleansing and exfoliation",
      "Relaxation and stress relief",
      "Skin hydration and glow"
    ],
    includes: [
      "Turkish Bath & Scrub Peeling",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Full Body Relax Massage",
      "Sauna Optional"
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
      'Turkish Bath',
      'Honey or Chocolate',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Full Body Relax Massage',
      'Sauna Optional'
    ],
    price: 50,
    duration: "80 min.",
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
      "Honey or Chocolate",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Full Body Relax Massage",
      "Sauna Optional"
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
      'Turkish Bath & Scrub Peeling',
      '(Carrots & Cocoa Oil)',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Bronz Oil Massage',
      'Sauna Optional'
    ],
    price: 60,
    duration: "85 min.",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Skin nourishment and bronzing",
      "Deep hydration",
      "Relaxation and stress relief",
      "Enhanced skin glow"
    ],
    includes: [
      "Turkish Bath & Scrub Peeling",
      "(Carrots & Cocoa Oil)",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Bronz Oil Massage",
      "Sauna Optional"
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
      'Turkish Bath',
      'Peeling',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Medical Massage',
      'Sauna Optional'
    ],
    price: 70,
    duration: "90 min.",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Therapeutic muscle relief",
      "Deep cleansing and exfoliation",
      "Improved circulation",
      "Stress and pain reduction"
    ],
    includes: [
      "Turkish Bath",
      "Peeling",
      "Foam Massage",
      "Face Mask",
      "Face Massage",
      "Medical Massage",
      "Sauna Optional"
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
      'Sauna (Optional)',
      'Turkish Bath - Foam Massage',
      'Coffee Peeling',
      'Refloxology Massage',
      'Face Mask',
      'Mix Therapy',
      'Sauna Optional'
    ],
    price: 75,
    duration: "100 min.",
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
      "Mix Therapy",
      "Sauna Optional"
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
      'RELAX MASSAGE (35 min.) €40',
      'MEDICAL MASSAGE (30 min.) €40',
      'AROMATHERAPY MASSAGE (35 min.) €40',
      'SPORT MASSAGE  (35 min.) €40',
      'REFLEXOLOGY MASSAGE (30 min.) €40',
      'BRONZE MASSAGE (35 min.) €40'
    ],
    price: 40,
    duration: "35 min.",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Muscle relaxation",
      "Pain relief",
      "Improved circulation",
      "Stress reduction"
    ],
    includes: [
      "Relax Massage (35 min.) €40",
      "Medical Massage (30 min.) €40",
      "Aromatherapy Massage (35 min.) €40",
      "Sport Massage  (35 min.) €40",
      "Reflexology Massage (30 min.) €40",
      "Bronze Massage (35 min.) €40"
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
      'Turkish Bath & Foam Massage',
      'Sea Salt Peeling',
      'Face Mask',
      'Indian Head Massage',
      'Aroma Therapy',
      'Sauna Optional'
    ],
    price: 80,
    duration: "110 min.",
    imageKey: "services.traditional",
    category: "Turkish Bath",
    benefits: [
      "Ultimate relaxation",
      "Variety of massage techniques",
      "Deep muscle relief",
      "Luxury experience"
    ],
    includes: [
      "Turkish Bath & Foam Massage",
      "Sea Salt Peeling",
      "Face Mask",
      "Indian Head Massage",
      "Aroma Therapy",
      "Sauna Optional"
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
        "latitude": "36.5516531",
        "longitude": "29.1260625"
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
            "description": Array.isArray(service.description) ? service.description.join('\n') : service.description,
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