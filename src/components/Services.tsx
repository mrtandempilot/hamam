import { Link } from 'react-router-dom';
import { getImageProps, getPaketImageProps } from '@/utils/imageOptimization';
import { ImageKey } from '@/types/image';

type Service = {
  name: string;
  description: string | string[];
  price: string;
  duration: string;
  category: string;
} & (
  | { imageKey: ImageKey; paketImage?: never }
  | { paketImage: string; imageKey?: never }
);

const services: Service[] = [
  {
    name: 'Turkish Bath & Massage',
    description: 'Complete Turkish bath experience with traditional massage therapy for ultimate relaxation and wellness.',
    price: '€65',
    imageKey: 'services.traditional',
    duration: '90 minutes',
    category: 'Signature Services'
  },
  {
    name: 'BEFORE SUN PROGRAMME',
    description: [
      'Turkish Bath & Scrub Peeling',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Full Body Relax Massage',
      '(80 min.) €50'
    ],
    price: '€50',
    paketImage: 'turkish.jpeg',
    duration: '80 min.',
    category: 'Traditional Services'
  },
  {
    name: 'AFTER SUN PROGRAMME',
    description: [
      'Turkish Bath',
      'Honey or Chocolate',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Full Body Relax Massage',
      '€50 (80 min.)'
    ],
    price: '€50',
    paketImage: 'hammam.jpeg',
    duration: '80 min.',
    category: 'Traditional Services'
  },
  {
    name: 'BRONZ PROGRAMME',
    description: [
      'Turkish Bath & Scrub Peeling',
      '(Carrots & Cocoa Oil)',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Bronz Oil Massage',
      '€60 (85 min.)'
    ],
    price: '€60',
    paketImage: 'mam.jpeg',
    duration: '85 min.',
    category: 'Traditional Services'
  },
  {
    name: 'MEDICAL PROGRAMME',
    description: [
      'Turkish Bath',
      'Peeling',
      'Foam Massage',
      'Face Mask',
      'Face Massage',
      'Medical Massage',
      '€70 (90 min.)'
    ],
    price: '€70',
    paketImage: 'bath.jpeg',
    duration: '90 min.',
    category: 'Traditional Services'
  },
  {
    name: 'SUPER PACKAGE',
    description: [
      'Sauna (Optional)',
      'Turkish Bath - Foam Massage',
      'Coffee Peeling',
      'Refloxology Massage',
      'Face Mask',
      'Mix Therapy',
      '(100 min.) €75'
    ],
    price: '€75',
    paketImage: 'masage.jpeg',
    duration: '100 min.',
    category: 'Traditional Services'
  },
  {
    name: 'TURKISH BATH & MASSAGE',
    description: [
      'PEELING AND FOAM MASSAGE (30 min.) €30',
      'HONEY AND FOAM MASSAGE (30 min.) €30',
      'COFFEE PEELING (30 min.) €30',
      'SEA SALT PEELING (30 min.) €30'
    ],
    price: '',
    paketImage: 'images.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'CLASSIC MASSAGE',
    description: [
      'RELAX MASSAGE (35 min.) €40',
      'MEDICAL MASSAGE (30 min.) €40',
      'AROMATHERAPY MASSAGE (35 min.) €40',
      'SPORT MASSAGE  (35 min.) €40',
      'REFLEXOLOGY MASSAGE (30 min.) €40',
      'BRONZE MASSAGE (35 min.) €40'
    ],
    price: '',
    paketImage: 'hamm.jpeg',
    duration: '',
    category: 'Traditional Services'
  },
  {
    name: 'DELUXE MASSAGE',
    description: [
      'INDIAN HEAD MASSAGE',
      'MEDICAL STONE BACK MASSAGE',
      'MEDICAL FULL BODY MASSAGE',
      'HOT STONE THERAPY',
      'DEEP TISSUE MASSAGE',
      'BALI MASSAGE',
      'MANDARA MASSAGE',
      '€80 (110 min.)'
    ],
    price: '€80',
    paketImage: 'download.jpeg',
    duration: '110 min.',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const imageProps = service.paketImage 
              ? getPaketImageProps(service.paketImage)
              : getImageProps(service.imageKey);
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
