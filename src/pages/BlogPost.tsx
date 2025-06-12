import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogImageProps } from '@/utils/imageOptimization';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import MetaTags from '@/components/MetaTags';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageKey: 'blog.history' | 'blog.benefits';
  slug: string;
  category: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Rich History of Turkish Hamam',
    description: 'Discover the fascinating history and cultural significance of Turkish hamams, from ancient Roman baths to modern wellness centers.',
    date: '2024-03-15',
    readTime: '5 min read',
    imageKey: 'blog.history',
    slug: 'turkish-hamam-history',
    category: 'History',
    content: `
      The Turkish hamam has a rich history that dates back to the Roman Empire. The tradition was adopted and refined by the Ottoman Empire, becoming an integral part of Turkish culture and social life.

      ## Origins and Evolution

      The hamam tradition began with the Roman thermae, which were public bathhouses. When the Ottomans conquered Constantinople, they adapted these bathhouses to create their own unique bathing culture. The hamam became more than just a place to bathe; it was a social institution where people gathered to socialize, conduct business, and celebrate important life events.

      ## Cultural Significance

      In Ottoman society, the hamam played a crucial role in daily life. It was a place where:
      - People gathered to socialize and exchange news
      - Business deals were made
      - Weddings and other celebrations were held
      - Religious purification rituals were performed

      ## Modern Hamams

      Today, Turkish hamams have evolved into modern wellness centers while maintaining their traditional elements. They combine ancient bathing rituals with contemporary spa treatments, offering visitors a unique blend of cultural experience and relaxation.

      ## The Hamam Experience

      A traditional Turkish hamam experience includes:
      1. Warming up in the hot room
      2. Body scrub with a special mitt
      3. Foam massage
      4. Relaxation in the cooling room

      This ritual not only cleanses the body but also provides numerous health benefits, from improved circulation to stress relief.

      ## Preservation of Tradition

      Despite modernization, many hamams in Turkey still maintain their traditional architecture and rituals. These historic buildings serve as living museums, preserving an important aspect of Turkish cultural heritage.

      The Turkish hamam continues to be a symbol of Turkish hospitality and wellness, attracting visitors from around the world who seek both cultural enrichment and relaxation.
    `
  },
  {
    title: 'Health Benefits of Turkish Hamam',
    description: 'Explore the numerous health benefits of regular Turkish hamam visits, from improved circulation to stress relief.',
    date: '2024-03-10',
    readTime: '4 min read',
    imageKey: 'blog.benefits',
    slug: 'hamam-health-benefits',
    category: 'Wellness',
    content: `
      The Turkish hamam offers numerous health benefits that have been recognized for centuries. Modern research continues to validate these traditional wellness practices.

      ## Physical Benefits

      Regular visits to a Turkish hamam can provide several physical health benefits:

      ### Improved Circulation
      The heat and steam in the hamam help dilate blood vessels, improving blood circulation throughout the body. This can help:
      - Reduce blood pressure
      - Improve cardiovascular health
      - Enhance oxygen delivery to tissues

      ### Skin Health
      The hamam's cleansing rituals benefit the skin by:
      - Removing dead skin cells
      - Unclogging pores
      - Improving skin texture and appearance
      - Promoting natural skin renewal

      ### Respiratory Benefits
      The steam in the hamam can help:
      - Clear nasal passages
      - Relieve sinus congestion
      - Improve breathing
      - Support respiratory health

      ## Mental and Emotional Benefits

      Beyond physical benefits, the hamam experience offers significant mental and emotional advantages:

      ### Stress Relief
      The relaxing environment and treatments help:
      - Reduce stress hormones
      - Promote relaxation
      - Improve sleep quality
      - Enhance overall well-being

      ### Social Connection
      The traditional hamam experience fosters:
      - Social bonding
      - Community connection
      - Cultural appreciation
      - Shared wellness experiences

      ## Modern Wellness Integration

      Today's hamams often combine traditional practices with modern wellness approaches:
      - Aromatherapy
      - Massage therapy
      - Meditation spaces
      - Holistic treatments

      ## Making the Most of Your Hamam Visit

      To maximize the health benefits of your hamam experience:
      1. Stay hydrated before and after
      2. Don't rush the process
      3. Listen to your body
      4. Follow the traditional sequence
      5. Allow time for relaxation

      The Turkish hamam continues to be a valuable wellness practice in modern times, offering a unique combination of physical, mental, and social benefits that contribute to overall health and well-being.
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": getBlogImageProps(post.imageKey.split('.')[1] as 'history' | 'benefits').src,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Organization",
          "name": "Ölüdeniz Hamam & Spa"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ölüdeniz Hamam & Spa",
          "logo": {
            "@type": "ImageObject",
            "url": "https://oludeniz-hamam.com/logo.png"
          }
        },
        "description": post.description,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://oludeniz-hamam.com/blog/${post.slug}`
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <MetaTags 
          title="Post Not Found - Ölüdeniz Hamam & Spa"
          description="The blog post you're looking for doesn't exist."
        />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-xl text-muted-foreground">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  const imageProps = getBlogImageProps(post.imageKey.split('.')[1] as 'history' | 'benefits');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MetaTags 
        title={`${post.title} - Ölüdeniz Hamam & Spa`}
        description={post.description}
        image={imageProps.src}
        url={`https://oludeniz-hamam.com/blog/${slug}`}
        type="article"
        author="Ölüdeniz Hamam & Spa"
        publishedTime={post.date}
        modifiedTime={post.date}
      />
      <Breadcrumb 
        items={[
          { label: 'Blog', href: '/#blog' },
          { label: post.title, href: `/blog/${slug}` }
        ]} 
      />
      <article className="max-w-4xl mx-auto px-4 py-20">
        <header className="mb-12">
          <div className="text-sm text-muted-foreground mb-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full">
              {post.category}
            </span>
            {' • '}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
            {' • '}
            {post.readTime}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>
        </header>

        <div className="relative mb-12">
          <img 
            src={imageProps.src}
            alt={imageProps.alt}
            className="w-full h-96 object-cover rounded-lg"
            loading={imageProps.loading}
            width={imageProps.width}
            height={imageProps.height}
            sizes={imageProps.sizes}
          />
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost; 