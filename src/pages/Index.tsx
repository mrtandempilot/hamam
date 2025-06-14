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
    name: 'Traditional Turkish Hamam',
    imageKey: 'services.traditional' as ServiceImageKey,
    description: 'Experience the authentic Turkish bath ritual with our premium services'
  },
  {
    name: 'Royal Hamam Experience',
    imageKey: 'services.royal' as ServiceImageKey,
    description: 'Indulge in our luxury hamam experience with additional treatments'
  },
  {
    name: 'Couples Hamam Package',
    imageKey: 'services.couples' as ServiceImageKey,
    description: 'Share the authentic Turkish bath experience with your loved one'
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
