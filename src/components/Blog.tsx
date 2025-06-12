import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import BlogSearch from './BlogSearch';
import { getBlogImageProps } from '@/utils/imageOptimization';

const blogPosts = [
  {
    title: "The History and Tradition of Turkish Hamam",
    description: "Discover the rich history of Turkish Hamam, from its origins in the Roman Empire to its evolution into a cornerstone of Turkish culture and wellness.",
    date: "2024-03-20",
    readTime: "5 min read",
    imageKey: 'blog.history' as const,
    slug: "history-of-turkish-hamam",
    category: "Culture",
    content: `
      <h2>The Origins of Turkish Hamam</h2>
      <p>The Turkish Hamam has its roots in the Roman bathhouses, which were introduced to Anatolia during the Roman Empire. However, it was the Ottomans who transformed these baths into the unique cultural institution we know today.</p>

      <h2>Evolution Through the Ages</h2>
      <p>During the Ottoman Empire, Hamams became more than just places for bathing. They evolved into social centers where people would gather, socialize, and conduct business. The architecture became more elaborate, featuring domed ceilings and intricate marble work.</p>

      <h2>Cultural Significance</h2>
      <p>Today, Turkish Hamams continue to play a vital role in Turkish culture. They represent a perfect blend of hygiene, relaxation, and social interaction. The traditional bathing ritual has been passed down through generations, maintaining its authenticity while adapting to modern needs.</p>

      <h2>Modern Hamam Experience</h2>
      <p>At Ölüdeniz Hamam & Spa, we preserve these rich traditions while offering modern amenities. Our facility combines historical architecture with contemporary comfort, providing an authentic experience for our guests.</p>
    `
  },
  {
    title: "Benefits of Traditional Turkish Bath",
    description: "Explore the numerous health benefits of Turkish Hamam, from improved circulation to stress relief and skin rejuvenation.",
    date: "2024-03-15",
    readTime: "4 min read",
    imageKey: 'blog.benefits' as const,
    slug: "benefits-of-turkish-bath",
    category: "Wellness",
    content: `
      <h2>Physical Health Benefits</h2>
      <p>The Turkish Hamam experience offers numerous physical health benefits. The steam room helps open pores and improve circulation, while the marble slab massage promotes muscle relaxation and flexibility.</p>

      <h2>Skin Rejuvenation</h2>
      <p>The traditional body scrub (kese) removes dead skin cells, leaving your skin smooth and refreshed. The combination of steam and natural oils helps maintain skin elasticity and promotes a healthy glow.</p>

      <h2>Mental Wellbeing</h2>
      <p>Beyond physical benefits, the Hamam experience provides significant mental health advantages. The relaxing atmosphere and traditional rituals help reduce stress and promote mental clarity.</p>

      <h2>Holistic Approach</h2>
      <p>At Ölüdeniz Hamam & Spa, we combine traditional Hamam practices with modern wellness techniques to provide a comprehensive health and relaxation experience.</p>
    `
  },
  {
    title: "What to Expect During Your First Hamam Experience",
    description: "A comprehensive guide for first-time visitors to Turkish Hamam, including what to bring, the bathing process, and tips for the best experience.",
    date: "2024-03-10",
    readTime: "6 min read",
    imageKey: 'blog.history' as const,
    slug: "first-hamam-experience",
    category: "Guide",
    content: `
      <h2>Before Your Visit</h2>
      <p>For your first Hamam experience, you'll need minimal preparation. We provide all necessary items including towels, robes, and traditional Hamam supplies. Just bring yourself and a change of clothes.</p>

      <h2>The Hamam Process</h2>
      <p>Your experience begins in the warm room (ılıklık), where you'll acclimate to the temperature. Then, you'll move to the hot room (sıcaklık) for the steam bath. This is followed by the traditional body scrub and massage on the heated marble slab (göbek taşı).</p>

      <h2>Tips for First-Timers</h2>
      <p>Stay hydrated, take your time, and don't hesitate to ask our staff for guidance. The experience is meant to be relaxing, so there's no need to rush.</p>

      <h2>After Your Hamam</h2>
      <p>After your treatment, take time to relax in our cooling room. Enjoy a traditional Turkish tea and let your body adjust to the normal temperature.</p>
    `
  }
];

const BlogSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Ölüdeniz Hamam & Spa Blog",
      "description": "Discover the rich culture and benefits of Turkish Hamam through our informative articles and guides.",
      "url": "https://oludeniz-hamam.com/blog",
      "blogPost": blogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "image": post.imageKey,
        "author": {
          "@type": "Organization",
          "name": "Ölüdeniz Hamam & Spa"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ölüdeniz Hamam & Spa",
          "logo": {
            "@type": "ImageObject",
            "url": "/lovable-uploads/fotos/images (1).jpg"
          }
        }
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

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the rich traditions and benefits of Turkish Hamam through our informative articles.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <BlogSearch posts={blogPosts} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const imageProps = getBlogImageProps(post.imageKey.split('.')[1] as 'history' | 'benefits');
            return (
              <Card key={post.slug} className="overflow-hidden">
                <div className="relative h-48">
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
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    {' • '}
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  </div>
                  <CardTitle className="text-xl">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-primary hover:underline mt-4 inline-block"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <BlogSchema />
    </section>
  );
};

export default Blog; 