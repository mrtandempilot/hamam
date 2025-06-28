import { useEffect } from 'react';

export const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.1020156328063!2d29.126062499999996!3d36.551653099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c04198955f5eb5%3A0xbc88e6bd3eb3d08!2s%C3%96l%C3%BCdeniz%20Turkish%20Hamam%20%26%20Spa!5e0!3m2!1sen!2str!4v1751110430737!5m2!1sen!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ölüdeniz Turkish Hamam & Spa Location"
        aria-label="Interactive map showing the location of Ölüdeniz Turkish Hamam & Spa"
      />
    </div>
  );
}; 