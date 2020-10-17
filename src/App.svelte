<script>
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

  mapboxgl.accessToken = MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [21.500353252696783, 35.067585836584584], // starting position [lng, lat]
    zoom: 1.5, // starting zoom
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

  map.on('dblclick', function (e) {
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  });
</script>
