import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getImageProps } from '@/utils/imageOptimization';
import { Breadcrumb } from '@/components/Breadcrumb';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { About } from "@/components/About";
import Gallery from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { Reviews } from "@/components/Reviews";
import Blog from '@/components/Blog';
import { ServiceSchema } from '@/components/ServiceSchema';
import MetaTags from '@/components/MetaTags';

type ServiceImageKey = 'services.traditional' | 'services.royal' | 'services.couples';

const services = [
  {
    name: 'BEFORE SUN PROGRAMME',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Turkish Bath & Scrub Peeling',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Full Body Relax Massage',
      '(80 min.) €50'
    ]
  },
  {
    name: 'AFTER SUN PROGRAMME',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Turkish Bath',
      'Honey or Chocolate',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Full Body Relax Massage',
      '€50 (80 min.)'
    ]
  },
  {
    name: 'BRONZ PROGRAMME',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Turkish Bath & Scrub Peeling',
      '(Carrots & Cocoa Oil)',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Bronz Oil Massage',
      '€60 (85 min.)'
    ]
  },
  {
    name: 'MEDICAL PROGRAMME',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Turkish Bath',
      'Peeling',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Medical Massage',
      '€70 (90 min.)'
    ]
  },
  {
    name: 'SUPER PACKAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Sauna (Optional)',
      'Turkish Bath - Foam Massage',
      'Coffee Peeling',
      'Refloxology Massage',
      'Face Mask',
      'Mix Therapy',
      '(100 min.) €75'
    ]
  },
  {
    name: 'TURKISH BATH & MASSAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'PEELING AND FOAM MASSAGE (30 min.) €30',
      'HONEY AND FOAM MASSAGE (30 min.) €30',
      'COFFEE PEELING (30 min.) €30',
      'SEA SALT PEELING (30 min.) €30'
    ]
  },
  {
    name: 'CLASSIC MASSAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'RELAX MASSAGE (35 min.) €40',
      'MEDICAL MASSAGE (30 min.) €40',
      'AROMATHERAPY MASSAGE (35 min.) €40',
      'SPORT MASSAGE  (35 min.) €40',
      'REFLEXOLOGY MASSAGE (30 min.) €40',
      'BRONZE MASSAGE (35 min.) €40'
    ]
  },
  {
    name: 'DELUXE MASSAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'INDIAN HEAD MASSAGE',
      'MEDICAL STONE BACK MASSAGE',
      'MEDICAL FULL BODY MASSAGE',
      'HOT STONE THERAPY',
      'DEEP TISSUE MASSAGE',
      'BALI MASSAGE',
      'MANDARA MASSAGE',
      '€80 (110 min.)'
    ]
  }
] as const;

const Index = () => {
  const mainImageProps = getImageProps('main');

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ölüdeniz Turkish Hamam & Spa",
      "url": "https://oludenizturkishbath.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://oludenizturkishbath.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MetaTags
        title="Ölüdeniz Turkish Hamam & Spa - Traditional Turkish Bath Experience"
        description="Experience authentic Turkish bath rituals and luxury spa treatments in Ölüdeniz. Book your traditional hamam experience today."
        image={mainImageProps.src}
        url="/"
      />
      <Breadcrumb items={[{ label: 'Home', path: '/' }]} />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <ServiceSchema />
    </div>
  );
};

export default Index;
