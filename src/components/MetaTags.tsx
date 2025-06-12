import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultMeta = {
  title: 'Ölüdeniz Hamam & Spa - Authentic Turkish Bath Experience',
  description: 'Experience the authentic Turkish Hamam tradition in Ölüdeniz. Our spa offers traditional treatments, massages, and wellness services in a luxurious setting.',
  image: '/lovable-uploads/fotos/oludeniz-hamam-spa-main.jpg',
  url: 'https://oludeniz-hamam.com',
  type: 'website' as const,
  author: 'Ölüdeniz Hamam & Spa',
};

const MetaTags = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = defaultMeta.type,
  author = defaultMeta.author,
  publishedTime,
  modifiedTime,
}: MetaTagsProps) => {
  useEffect(() => {
    // Update meta tags when component mounts or props change
    const metaTags = {
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': type,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    // Add article-specific meta tags if type is article
    if (type === 'article') {
      Object.assign(metaTags, {
        'article:author': author,
        'article:published_time': publishedTime,
        'article:modified_time': modifiedTime,
      });
    }

    // Update meta tags
    Object.entries(metaTags).forEach(([property, content]) => {
      const metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('property', property);
        newMetaTag.setAttribute('content', content);
        document.head.appendChild(newMetaTag);
      }
    });

    // Cleanup function
    return () => {
      Object.keys(metaTags).forEach((property) => {
        const metaTag = document.querySelector(`meta[property="${property}"]`);
        if (metaTag) {
          document.head.removeChild(metaTag);
        }
      });
    };
  }, [title, description, image, url, type, author, publishedTime, modifiedTime]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags; 