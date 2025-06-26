interface ImageMetadata {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

type ImageKey = 
  | 'main'
  | 'services.traditional'
  | 'services.royal'
  | 'services.couples'
  | 'blog.history'
  | 'blog.benefits'
  | 'gallery.interior'
  | 'gallery.marbleSlab'
  | 'gallery.steamRoom'
  | 'gallery.relaxation';

export const images = {
  main: {
    src: '/lovable-uploads/fotos/oludeniz-hamam-spa-main.jpg',
    alt: 'Ölüdeniz Hamam & Spa - Traditional Turkish Bath Experience',
    width: 1200,
    height: 800,
    loading: 'eager' as const,
    sizes: '(max-width: 768px) 100vw, 1200px'
  },
  services: {
    traditional: {
      src: '/lovable-uploads/fotos/traditional-turkish-hamam-service.jpg',
      alt: 'Traditional Turkish Hamam Service - Steam Room and Body Scrub',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    },
    royal: {
      src: '/lovable-uploads/fotos/royal-hamam-luxury-experience.jpg',
      alt: 'Royal Hamam Experience - Luxury Turkish Bath Treatment',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    },
    couples: {
      src: '/lovable-uploads/fotos/couples-hamam-romantic-package.jpg',
      alt: 'Couples Hamam Package - Romantic Turkish Bath Experience',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    }
  },
  blog: {
    history: {
      src: '/lovable-uploads/fotos/traditional-turkish-hamam-history.jpg',
      alt: 'History of Turkish Hamam - Traditional Bathing Culture',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    },
    benefits: {
      src: '/lovable-uploads/fotos/turkish-hamam-health-benefits.jpg',
      alt: 'Health Benefits of Turkish Hamam - Wellness and Relaxation',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    }
  },
  gallery: {
    interior: {
      src: '/lovable-uploads/fotos/turkish-hamam-interior.jpg',
      alt: 'Turkish Hamam Interior - Traditional Architecture and Design',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    },
    marbleSlab: {
      src: '/lovable-uploads/fotos/turkish-hamam-marble-slab.jpg',
      alt: 'Turkish Hamam Marble Slab - Traditional Massage Area',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    },
    steamRoom: {
      src: '/lovable-uploads/fotos/turkish-hamam-steam-room.jpg',
      alt: 'Turkish Hamam Steam Room - Traditional Steam Bath Experience',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    },
    relaxation: {
      src: '/lovable-uploads/fotos/turkish-hamam-relaxation-area.jpg',
      alt: 'Turkish Hamam Relaxation Area - Post-Treatment Rest Space',
      width: 800,
      height: 600,
      loading: 'lazy' as const,
      sizes: '(max-width: 768px) 100vw, 800px'
    }
  }
} as const;

export const getImageProps = (key: ImageKey): ImageMetadata => {
  if (key === 'main') {
    return images.main;
  }
  
  const [section, subKey] = key.split('.');
  if (!section || !subKey) {
    throw new Error(`Invalid image key: ${key}`);
  }
  
  const sectionImages = images[section as keyof typeof images];
  if (!sectionImages || typeof sectionImages !== 'object') {
    throw new Error(`Invalid section: ${section}`);
  }
  
  const image = sectionImages[subKey as keyof typeof sectionImages];
  if (!image) {
    throw new Error(`Invalid subkey: ${subKey} in section: ${section}`);
  }
  
  return image as ImageMetadata;
};

export const getServiceImageProps = (service: keyof typeof images.services): ImageMetadata => {
  return images.services[service];
};

export const getBlogImageProps = (post: keyof typeof images.blog): ImageMetadata => {
  return images.blog[post];
};

export const getGalleryImageProps = (image: keyof typeof images.gallery): ImageMetadata => {
  return images.gallery[image];
};

export const getPaketImageProps = (filename: string): ImageMetadata => ({
  src: `/lovable-uploads/fotos/${filename}`,
  alt: filename.replace(/[-_]/g, ' ').replace(/\.[a-zA-Z]+$/, ''),
  width: 800,
  height: 600,
  loading: 'lazy',
  sizes: '(max-width: 768px) 100vw, 800px'
}); 