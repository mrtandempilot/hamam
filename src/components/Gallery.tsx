import { getImageProps } from '@/utils/imageOptimization';

const galleryImages = [
  {
    key: 'gallery.interior',
    title: 'Traditional Turkish Hamam Interior',
    description: 'Experience the authentic atmosphere of our traditional hamam'
  },
  {
    key: 'gallery.marbleSlab',
    title: 'Marble Slab Treatment',
    description: 'Relax on our heated marble slabs during your treatment'
  },
  {
    key: 'gallery.steamRoom',
    title: 'Steam Room',
    description: 'Enjoy the therapeutic benefits of our steam room'
  },
  {
    key: 'gallery.relaxation',
    title: 'Relaxation Area',
    description: 'Unwind in our comfortable relaxation area after your treatment'
  }
] as const;

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => {
            const imageProps = getImageProps(image.key);
            return (
              <div key={image.key} className="group relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={imageProps.src}
                  alt={imageProps.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading={imageProps.loading}
                  width={imageProps.width}
                  height={imageProps.height}
                  sizes={imageProps.sizes}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
