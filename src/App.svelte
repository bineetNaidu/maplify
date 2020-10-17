<script>
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

  mapboxgl.accessToken = MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [21.500353252696783, 35.067585836584584], // starting position [lng, lat]
    zoom: 1.5, // starting zoom
  });

  map.on('click', function (e) {
    console.log(e);
  });
</script>
