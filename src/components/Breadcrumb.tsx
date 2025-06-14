import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BreadcrumbSchema = ({ items }: BreadcrumbProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://oludeniz-hamam.com${item.href}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [items]);

  return null;
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav 
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-4">
          <li>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
              {index === items.length - 1 ? (
                <span 
                  className="text-sm font-medium text-foreground"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
      <BreadcrumbSchema items={items} />
    </nav>
  );
};

export default Breadcrumb; 