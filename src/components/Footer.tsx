import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/scrollToSection";

export const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Oludeniz Hamam & Spa</h3>
            <p className="mb-4 opacity-90">
              Experience authentic Turkish wellness traditions in the heart of beautiful Oludeniz.
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm">4.9/5 Rating</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleNavClick(e, 'gallery')}
                  className="hover:text-accent transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Oludeniz Mahallesi, Deniz Sokak No: 15<br />
                  48300 Oludeniz, Fethiye/Mugla, Turkey
                </span>
              </div>
              <p className="text-sm">Phone: +90 252 617 0123</p>
              <p className="text-sm">Email: info@oludenizhamam.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Oludeniz Hamam & Spa. All rights reserved. | Authentic Turkish Wellness Experience
          </p>
        </div>
      </div>
    </footer>
  );
};
