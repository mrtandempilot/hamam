import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { getBlogImageProps } from '@/utils/imageOptimization';

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

interface BlogSearchProps {
  posts: BlogPost[];
}

const BlogSearch = ({ posts }: BlogSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );

    setSearchResults(results);
  }, [searchQuery, posts]);

  useEffect(() => {
    // Add schema markup for search functionality
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://oludeniz-hamam.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://oludeniz-hamam.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="search"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
          aria-label="Search blog posts"
        />
      </div>

      {searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-background border rounded-lg shadow-lg">
          <div className="p-2">
            {searchResults.map((post) => {
              const imageProps = getBlogImageProps(post.imageKey.split('.')[1] as 'history' | 'benefits');
              return (
                <Link 
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="block"
                >
                  <Card className="mb-2 hover:bg-accent transition-colors">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <img
                            src={imageProps.src}
                            alt={imageProps.alt}
                            className="w-full h-full object-cover rounded"
                            loading={imageProps.loading}
                            width={imageProps.width}
                            height={imageProps.height}
                            sizes={imageProps.sizes}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{post.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                              {post.category}
                            </span>
                            <span>•</span>
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString()}
                            </time>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSearch; 