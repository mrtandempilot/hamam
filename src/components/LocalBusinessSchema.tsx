import { useEffect } from 'react';

export const LocalBusinessSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://oludenizturkishbath.com#business",
      "name": "Ölüdeniz Turkish Hamam & Spa",
      "image": [
        "https://oludenizturkishbath.com/images/exterior.jpg",
        "https://oludenizturkishbath.com/images/interior-1.jpg",
        "https://oludenizturkishbath.com/images/interior-2.jpg"
      ],
      "description": "Experience authentic Turkish hamam and luxury spa treatments in Ölüdeniz. Traditional Turkish bath rituals, massage therapies, and wellness services in the heart of Turkey's beautiful coastal paradise.",
      "url": "https://oludenizturkishbath.com",
      "telephone": "+90-252-617-0060",
      "priceRange": "$$$",
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
      "sameAs": [
        "https://www.facebook.com/oludenizhamam",
        "https://www.instagram.com/oludenizspa",
        "https://www.tripadvisor.com/oludenizhamam"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Spa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Traditional Turkish Bath",
              "description": "Full body wash with kese exfoliation and foam massage",
              "price": "400",
              "priceCurrency": "TRY"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aromatherapy Massage",
              "description": "60-minute massage with essential oils",
              "price": "600",
              "priceCurrency": "TRY"
            }
          }
        ]
      },
      "areaServed": {
        "@type": "City",
        "name": "Ölüdeniz",
        "containedIn": {
          "@type": "State",
          "name": "Muğla"
        }
      },
      "availableLanguage": ["English", "Turkish", "German", "Russian"],
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
      "currenciesAccepted": ["TRY", "EUR", "USD", "GBP"],
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Parking",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "WiFi",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Air Conditioning",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Wheelchair Accessible",
          "value": true
        }
      ],
      "publicAccess": true,
      "smokingAllowed": false,
      "specialOpeningHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "2024-12-25",
          "closed": true,
          "validFrom": "2024-12-25",
          "validThrough": "2024-12-25"
        }
      ]
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