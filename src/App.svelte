<script>
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
  import Form from './Form.svelte';

  mapboxgl.accessToken = MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [21.500353252696783, 35.067585836584584], // starting position [lng, lat]
    zoom: 1.5, // starting zoom
  });

  $: showForm = true;

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

  map.on('dblclick', function (e) {
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  });
</script>

<style>
  .backdrop {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  .backdrop-body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15% 30%;
    background: #67809645;
    padding: 25px;
    border-radius: 15px;
    transform: translateX(0%);
  }
  .backdrop.show {
    display: none;
    pointer-events: none;
  }
</style>

<div class="backdrop" class:show={showForm}>
  <div class="backdrop-body">
    <Form />
  </div>
</div>
