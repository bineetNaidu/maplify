import { writable } from 'svelte/store';

const MapStore = writable([
  {
    lat: 48.83486779746403,
    lng: 2.369472432807953,
    desc: 'FOR FUN!!!',
    city: 'MAP',
  },
]);

export default MapStore;
