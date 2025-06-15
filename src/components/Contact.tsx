import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { getImageProps } from '@/utils/imageOptimization';
import { Map } from "./Map";

export const Contact = () => {
  const mainImageProps = getImageProps('main');

  return (
    <section 
      id="contact" 
      className="py-20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="contact-heading" 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to book your authentic Turkish hamam experience or to learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
              <address className="text-muted-foreground not-italic">
                Cumhuriyet, Çarşı Cd. No:16<br />
                Fethiye, Muğla 48300<br />
                Turkey
              </address>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="text-muted-foreground">
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+905362222813" className="hover:text-primary transition-colors">
                    +90 536 222 2813
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:oludenizspa@gmail.com" className="hover:text-primary transition-colors">
                    oludenizspa@gmail.com
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/905362222813" className="hover:text-primary transition-colors">
                    +90 536 222 2813
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Opening Hours</h3>
              <div className="text-muted-foreground">
                <p>
                  <time dateTime="09:00">Monday - Sunday: 9:00 AM</time> - <time dateTime="22:00">10:00 PM</time>
                </p>
                <p>Last entry: <time dateTime="21:00">9:00 PM</time></p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};
