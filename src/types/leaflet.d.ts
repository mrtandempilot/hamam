import 'leaflet';

declare module 'leaflet' {
  interface TileLayerOptions {
    attribution?: string;
  }
  
  interface MarkerOptions {
    icon?: L.Icon;
  }
} 