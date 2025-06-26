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
      'Turkish Bath & Scrub Peeling (€50) (80 min.)',
      'Foam Massage (€50)',
      'Face Mask (€50)',
      'Face Massage (€50)',
      'Full Body Relax Massage (30 min.) (€50)'
    ]
  },
  {
    name: 'AFTER SUN PROGRAMME',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Turkish Bath (€50)',
      'Honey or Chocolate (€50) (80 min.)',
      'Foam Massage (€50)',
      'Face Mask (€50)',
      'Face Massage (€50)',
      'Full Body Relax Massage (30 min.) (€50)'
    ]
  },
  {
    name: 'BRONZ PROGRAMME',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Turkish Bath & Scrub Peeling (85 min.) (Carrots & Cocoa Oil)',
      'Foam Massage (€60)',
      'Face Mask (€60)',
      'Face Massage (€60)',
      'Bronz Oil Massage (40 min.) (€60)'
    ]
  },
  {
    name: 'MEDICAL PROGRAMME',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Turkish Bath (€70) (90 min.)',
      'Peeling (€70)',
      'Foam Massage (€70)',
      'Face Mask (€70)',
      'Face Massage (€70)',
      'Medical Massage (50 min.) (€70)'
    ]
  },
  {
    name: 'SUPER PACKAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'Sauna (Optional) (€75)',
      'Turkish Bath - Foam Massage (€75)',
      'Coffee Peeling (€75)',
      'Refloxology Massage (€75)',
      'Face Mask (€75)',
      'Mix Therapy (60 min.) (€75)',
      '(100 min.)'
    ]
  },
  {
    name: 'TURKISH BATH & MASSAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'PEELING AND FOAM MASSAGE (30 min.) (€30)',
      'HONEY AND FOAM MASSAGE (30 min.) (€30)',
      'COFFEE PEELING (30 min.) (€30)',
      'SEA SALT PEELING (30 min.) (€30)'
    ]
  },
  {
    name: 'CLASSIC MASSAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'RELAX MASSAGE (35 min.) (€40)',
      'MEDICAL MASSAGE (30 min.) (€40)',
      'AROMATHERAPY MASSAGE (35 min.) (€40)',
      'SPORT MASSAGE (35 min.) (€40)',
      'REFLEXOLOGY MASSAGE (30 min.) (€40)',
      'BRONZE MASSAGE (35 min.) (€40)'
    ]
  },
  {
    name: 'DELUXE MASSAGE',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: [
      'INDIAN HEAD MASSAGE (25 min) (€35)',
      'MEDICAL STONE BACK MASSAGE (30 min.) (€45)',
      'MEDICAL FULL BODY MASSAGE (60 min.) (€60)',
      'HOT STONE THERAPY (35 min.) (€55)',
      'DEEP TISSUE MASSAGE (60 min.) (€55)',
      'BALI MASSAGE (35 min.) (€55)',
      'MANDARA MASSAGE (4 HANDS) (60 min.) (€70)'
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
