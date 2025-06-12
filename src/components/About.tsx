import { getImageProps } from '@/utils/imageOptimization';

export const About = () => {
  const interiorImageProps = getImageProps('gallery.interior');

  return (
    <section 
      id="about" 
      className="py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              id="about-heading" 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              About Our Hamam
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nestled in the heart of Ölüdeniz, our traditional Turkish hamam offers an authentic experience that dates back centuries. Our facility combines historical architecture with modern amenities to provide you with the perfect balance of tradition and comfort.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our expert staff is trained in traditional Turkish bathing techniques and modern spa treatments, ensuring you receive the highest quality service during your visit. We use only the finest natural products and maintain the highest standards of cleanliness and hygiene.
            </p>

            <div 
              className="mt-8 grid grid-cols-2 gap-6"
              role="list"
              aria-label="Business achievements"
            >
              <div 
                className="text-center"
                role="listitem"
              >
                <div 
                  className="text-3xl font-bold text-primary mb-2"
                  aria-label="15 plus years of experience"
                >
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div 
                className="text-center"
                role="listitem"
              >
                <div 
                  className="text-3xl font-bold text-primary mb-2"
                  aria-label="500 plus happy customers"
                >
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={interiorImageProps.src}
              alt={interiorImageProps.alt}
              className="rounded-lg shadow-2xl w-full"
              loading={interiorImageProps.loading}
              width={interiorImageProps.width}
              height={interiorImageProps.height}
              sizes={interiorImageProps.sizes}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
