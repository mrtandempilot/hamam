import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

const faqs = [
  {
    question: "What is a Turkish Hamam?",
    answer: "A Turkish Hamam is a traditional public bath that combines elements of Roman and Turkish bathing traditions. It features a steam room, marble slab for massage, and various bathing rituals that have been practiced for centuries in Turkey."
  },
  {
    question: "What should I bring to the Hamam?",
    answer: "You only need to bring yourself and a change of clothes. We provide all necessary items including towels, robes, slippers, and traditional hamam supplies. We recommend bringing a swimsuit if you're planning to use our pool facilities."
  },
  {
    question: "How long does a typical Hamam experience last?",
    answer: "A traditional Turkish Hamam experience typically lasts 90 minutes, including steam room time, body scrub, and massage. Additional treatments can extend the duration. We recommend allowing 2-3 hours for a complete spa experience."
  },
  {
    question: "Is the Hamam suitable for everyone?",
    answer: "While the Hamam is generally suitable for most people, we recommend consulting with your doctor if you have any medical conditions, especially heart conditions, high blood pressure, or if you're pregnant. Children under 12 are not permitted in the main Hamam area."
  },
  {
    question: "Do I need to make a reservation?",
    answer: "Yes, we recommend making a reservation in advance, especially during peak season (June-September). You can book online through our website, call us directly, or use WhatsApp for quick responses. Walk-ins are welcome but subject to availability."
  },
  {
    question: "What is the difference between a Hamam and a regular spa?",
    answer: "A Turkish Hamam is a unique cultural experience that combines traditional bathing rituals with modern spa treatments. Unlike regular spas, it features a steam room with marble architecture, traditional body scrubbing techniques, and a social aspect that's been part of Turkish culture for centuries."
  }
];

const FAQSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
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

export const FAQ = () => {
  return (
    <section 
      id="faq" 
      className="py-20 bg-secondary/50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="faq-heading" 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our Turkish Hamam and spa services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <FAQSchema />
    </section>
  );
}; 