import { Link } from 'react-router-dom';
import { getImageProps, getPaketImageProps } from '@/utils/imageOptimization';

const services = [
  {
    name: 'BEFORE SUN PROGRAMME',
    description: [
      'Turkish Bath & Scrub Peeling (€50) (80 min.)',
      'Foam Massage (€50)',
      'Face Mask (€50)',
      'Face Massage (€50)',
      'Full Body Relax Massage (30 min.) (€50)'
    ],
    price: '',
    paketImage: 'turkish.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'AFTER SUN PROGRAMME',
    description: [
      'Turkish Bath (€50)',
      'Honey or Chocolate (€50) (80 min.)',
      'Foam Massage (€50)',
      'Face Mask (€50)',
      'Face Massage (€50)',
      'Full Body Relax Massage (30 min.) (€50)'
    ],
    price: '',
    paketImage: 'hammam.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'BRONZ PROGRAMME',
    description: [
      'Turkish Bath & Scrub Peeling (85 min.) (Carrots & Cocoa Oil)',
      'Foam Massage (€60)',
      'Face Mask (€60)',
      'Face Massage (€60)',
      'Bronz Oil Massage (40 min.) (€60)'
    ],
    price: '',
    paketImage: 'mam.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'MEDICAL PROGRAMME',
    description: [
      'Turkish Bath (€70) (90 min.)',
      'Peeling (€70)',
      'Foam Massage (€70)',
      'Face Mask (€70)',
      'Face Massage (€70)',
      'Medical Massage (50 min.) (€70)'
    ],
    price: '',
    paketImage: 'bath.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'SUPER PACKAGE',
    description: [
      'Sauna (Optional) (€75)',
      'Turkish Bath - Foam Massage (€75)',
      'Coffee Peeling (€75)',
      'Refloxology Massage (€75)',
      'Face Mask (€75)',
      'Mix Therapy (60 min.) (€75)',
      '(100 min.)'
    ],
    price: '',
    paketImage: 'masage.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'TURKISH BATH & MASSAGE',
    description: [
      'PEELING AND FOAM MASSAGE (30 min.) (€30)',
      'HONEY AND FOAM MASSAGE (30 min.) (€30)',
      'COFFEE PEELING (30 min.) (€30)',
      'SEA SALT PEELING (30 min.) (€30)'
    ],
    price: '',
    paketImage: 'images.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'CLASSIC MASSAGE',
    description: [
      'RELAX MASSAGE (35 min.) (€40)',
      'MEDICAL MASSAGE (30 min.) (€40)',
      'AROMATHERAPY MASSAGE (35 min.) (€40)',
      'SPORT MASSAGE (35 min.) (€40)',
      'REFLEXOLOGY MASSAGE (30 min.) (€40)',
      'BRONZE MASSAGE (35 min.) (€40)'
    ],
    price: '',
    paketImage: 'hamm.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'DELUXE MASSAGE',
    description: [
      'INDIAN HEAD MASSAGE (25 min) (€35)',
      'MEDICAL STONE BACK MASSAGE (30 min.) (€45)',
      'MEDICAL FULL BODY MASSAGE (60 min.) (€60)',
      'HOT STONE THERAPY (35 min.) (€55)',
      'DEEP TISSUE MASSAGE (60 min.) (€55)',
      'BALI MASSAGE (35 min.) (€55)',
      'MANDARA MASSAGE (4 HANDS) (60 min.) (€70)'
    ],
    price: '',
    paketImage: 'download.jpeg',
    duration: '',
    category: 'Traditional Services'
  }
] as const;

const Services = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const imageProps = getPaketImageProps(service.paketImage);
            return (
              <div key={service.name} className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <img
                    src={imageProps.src}
                    alt={imageProps.alt}
                    className="w-full h-full object-cover"
                    loading={imageProps.loading}
                    width={imageProps.width}
                    height={imageProps.height}
                    sizes={imageProps.sizes}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  {Array.isArray(service.description) ? (
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      {service.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
