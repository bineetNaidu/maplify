import { writable } from 'svelte/store';

const MapStore = writable([
  { lng: 78.4921271601782, lat: 22.27407788435079 },
  { lat: 31.03872953864652, lng: 121.48928281590707 },
  { lat: 40.87809688187656, lng: 14.318545091624117 },
  { lat: 48.83486779746403, lng: 2.369472432807953 },
]);

export default MapStore;
