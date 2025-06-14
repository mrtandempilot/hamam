import { useEffect } from 'react';

const reviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    reviewBody: "An absolutely amazing experience! The traditional Turkish bath was incredibly relaxing and the staff were so professional and attentive. The facilities are beautiful and clean. Highly recommend the royal package for the full experience.",
    datePublished: "2024-03-15",
    reviewAspect: "Service Quality"
  },
  {
    author: "Michael Brown",
    rating: 5,
    reviewBody: "Best hamam experience in Ölüdeniz! The massage was excellent and the whole atmosphere was very authentic. The staff made us feel welcome and explained everything clearly. Will definitely come back!",
    datePublished: "2024-03-10",
    reviewAspect: "Overall Experience"
  },
  {
    author: "Emma Wilson",
    rating: 4,
    reviewBody: "Great traditional Turkish bath experience. The facilities are modern yet maintain the authentic feel. The only reason for 4 stars instead of 5 is that it was quite busy during peak hours. Book in advance!",
    datePublished: "2024-03-05",
    reviewAspect: "Facilities"
  },
  {
    author: "David Thompson",
    rating: 5,
    reviewBody: "The couples package was worth every penny! Private room, champagne, and excellent service. Perfect for a romantic getaway. The staff went above and beyond to make our experience special.",
    datePublished: "2024-03-01",
    reviewAspect: "Couples Package"
  },
  {
    author: "Lisa Anderson",
    rating: 5,
    reviewBody: "Professional staff and excellent service. The traditional hamam ritual was authentic and the massage was one of the best I've ever had. The place is spotlessly clean and well-maintained.",
    datePublished: "2024-02-25",
    reviewAspect: "Cleanliness"
  }
];

export const ReviewSchema = () => {
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews.map(review => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "datePublished": review.datePublished,
        "reviewBody": review.reviewBody,
        "reviewAspect": review.reviewAspect
      }))
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