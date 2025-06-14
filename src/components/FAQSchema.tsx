import { useEffect } from 'react';

const faqs = [
  {
    question: "What is a Turkish Hamam?",
    answer: "A Turkish Hamam is a traditional public bathhouse that combines elements of Roman and Turkish bathing traditions. It involves a series of rooms with different temperatures, steam rooms, and massage services, providing a complete cleansing and relaxation experience."
  },
  {
    question: "What should I bring to the Hamam?",
    answer: "You should bring a swimsuit or you can use the disposable underwear we provide. We provide towels, slippers, and all necessary toiletries. Just bring yourself and a change of clothes for after your treatment."
  },
  {
    question: "How long does a typical Hamam experience last?",
    answer: "A traditional Turkish Hamam experience typically lasts between 60-90 minutes. This includes time in the steam room, body scrub (kese), foam massage, and relaxation time. Our premium packages can last up to 2-2.5 hours."
  },
  {
    question: "Do I need to make a reservation?",
    answer: "Yes, we recommend making a reservation in advance, especially during peak season (June-September). You can book online through our website or call us directly. Walk-ins are welcome but subject to availability."
  },
  {
    question: "What are the health benefits of a Turkish Hamam?",
    answer: "Turkish Hamam offers numerous health benefits including deep cleansing of the skin, improved blood circulation, stress relief, muscle relaxation, and detoxification. The heat and steam help open pores and remove toxins from the body."
  },
  {
    question: "Is the Hamam suitable for everyone?",
    answer: "While Turkish Hamam is generally safe for most people, it's not recommended for those with heart conditions, high blood pressure, or during pregnancy. Please consult your doctor if you have any health concerns before visiting."
  },
  {
    question: "What is the difference between a traditional and royal Hamam experience?",
    answer: "The traditional Hamam includes basic services like steam room, body scrub, and foam massage. The royal experience adds private room service, extended massage time, additional treatments, and premium amenities for a more luxurious experience."
  },
  {
    question: "Do you offer couples packages?",
    answer: "Yes, we offer special couples packages that include a private suite, champagne service, and treatments for two. It's perfect for romantic getaways or special occasions."
  }
];

export const FAQSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      })),
      "about": {
        "@type": "HealthAndBeautyBusiness",
        "name": "Ölüdeniz Turkish Hamam & Spa",
        "url": "https://oludenizturkishbath.com"
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