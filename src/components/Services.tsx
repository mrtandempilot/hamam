import { Link } from 'react-router-dom';
import { getImageProps } from '@/utils/imageOptimization';

const services = [
  {
    name: 'Traditional Turkish Hamam',
    description: 'Experience the authentic Turkish bath ritual with our traditional hamam service.',
    price: '€45',
    imageKey: 'services.traditional',
    duration: '60 minutes',
    category: 'Traditional Services'
  },
  {
    name: 'Royal Hamam Experience',
    description: 'Indulge in our premium hamam experience with additional treatments and luxury amenities.',
    price: '€85',
    imageKey: 'services.royal',
    duration: '90 minutes',
    category: 'Premium Services'
  },
  {
    name: 'Couples Hamam Package',
    description: 'Share the authentic Turkish bath experience with your loved one in a private setting.',
    price: '€120',
    imageKey: 'services.couples',
    duration: '120 minutes',
    category: 'Special Packages'
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
            const imageProps = getImageProps(service.imageKey);
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
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <Link
                    to={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary hover:underline"
                  >
                    Learn More →
                  </Link>
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
