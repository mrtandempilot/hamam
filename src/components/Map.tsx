import { useEffect, useRef } from 'react';

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      const location = { lat: 36.5500, lng: 29.1167 }; // Ölüdeniz coordinates
      const map = new google.maps.Map(mapRef.current!, {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      // Add marker
      new google.maps.Marker({
        position: location,
        map,
        title: "Ölüdeniz Hamam & Spa",
      });
    };

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ5oIr3ITl9ZdplCZJCfWMlRyg1H4qHHw&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
      aria-label="Location map"
    />
  );
}; 