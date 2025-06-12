import { useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Sarah Johnson",
    date: "2024-03-15",
    rating: 5,
    review: "An absolutely amazing experience! The traditional Turkish Hamam was everything I hoped for and more. The staff was incredibly professional and the facilities were immaculate. Will definitely return on my next visit to Ölüdeniz.",
    location: "United Kingdom"
  },
  {
    author: "Michael Schmidt",
    date: "2024-03-10",
    rating: 5,
    review: "The best spa experience I've had in Turkey. The combination of traditional Hamam and modern spa treatments was perfect. The massage was exceptional, and the staff made us feel very welcome.",
    location: "Germany"
  },
  {
    author: "Emma Thompson",
    date: "2024-03-05",
    rating: 5,
    review: "We booked the couples package and it was worth every penny. The private suite was beautiful, and the treatments were luxurious. The staff's attention to detail was impressive.",
    location: "Australia"
  },
  {
    author: "David Chen",
    date: "2024-02-28",
    rating: 5,
    review: "As someone who has visited many spas worldwide, this Hamam stands out for its authenticity and quality. The steam room was perfect, and the traditional scrub was invigorating.",
    location: "Canada"
  }
];

const ReviewsSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Ölüdeniz Hamam & Spa",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "datePublished": review.date,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": review.review
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export const Reviews = () => {
  return (
    <section 
      id="reviews" 
      className="py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="reviews-heading" 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Customer Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our guests say about their experience at Ölüdeniz Hamam & Spa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg"
              role="article"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-foreground mb-4">{review.review}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{review.author}</span>
                <span className="text-sm text-muted-foreground">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReviewsSchema />
    </section>
  );
}; 