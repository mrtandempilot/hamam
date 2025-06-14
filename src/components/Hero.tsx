import { Link } from 'react-router-dom';
import { getImageProps } from '@/utils/imageOptimization';
import { MapPin, Star, MessageCircle } from "lucide-react";

const Hero = () => {
  const mainImageProps = getImageProps('main');

  return (
    <section 
      id="home" 
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Ölüdeniz Hamam & Spa"
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905329876543"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mainImageProps.src}
          alt={mainImageProps.alt}
          className="w-full h-full object-cover"
          loading={mainImageProps.loading}
          width={mainImageProps.width}
          height={mainImageProps.height}
          sizes={mainImageProps.sizes}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 mr-2" aria-hidden="true" />
          <span className="text-lg">Ölüdeniz, Turkey</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ölüdeniz Turkish
          <span className="block text-primary">Hamam & Spa</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Experience centuries-old Turkish bathing traditions in the heart of beautiful Ölüdeniz. 
          Rejuvenate your body and soul with our authentic hamam and luxury spa treatments.
        </p>

        <div className="flex items-center justify-center mb-8" aria-label="Customer Rating">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-6 w-6 fill-yellow-400 text-yellow-400" 
              aria-hidden="true"
            />
          ))}
          <span className="ml-3 text-lg">4.9/5 from 200+ reviews</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
