import { useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
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

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const allItems = [
    { label: 'Home', href: '/' },
    ...items
  ];

  return (
    <nav 
      className="py-4 px-4 sm:px-6 lg:px-8"
      aria-label="Breadcrumb"
    >
      <ol 
        className="flex items-center space-x-2 text-sm text-muted-foreground"
        role="list"
      >
        {allItems.map((item, index) => (
          <li 
            key={index}
            className="flex items-center"
            role="listitem"
          >
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2" aria-hidden="true" />
            )}
            {index === 0 ? (
              <Link 
                to={item.href}
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Go to home page"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : index === allItems.length - 1 ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <BreadcrumbSchema items={allItems} />
    </nav>
  );
}; 