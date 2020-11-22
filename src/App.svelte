<script>
  import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
  import Form from './Form.svelte';
  import MapStore from './store';
  import { onMount } from 'svelte';
  import axios from './axios';

  mapboxgl.accessToken = MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [21.500353252696783, 35.067585836584584], // starting position [lng, lat]
    zoom: 1.5, // starting zoom
  });

  $: dontShowForm = true;
  $: geometry = { lat: undefined, lng: undefined };

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

  map.on('dblclick', function (e) {
    geometry.lng = e.lngLat.lng;
    geometry.lat = e.lngLat.lat;
    dontShowForm = false;
  });

  const addMaker = ({ detail }) => {
    if (detail.lat && detail.lng) {
      new mapboxgl.Marker().setLngLat([detail.lng, detail.lat]).addTo(map);
      new mapboxgl.Popup()
        .setLngLat([detail.lng, detail.lat])
        .setHTML(
          `
  <h4>${detail.city}</h4>
  <p>${detail.desc}</p>
  `
        )
        .addTo(map);
      dontShowForm = true;
    }
  };

  onMount(() => {
    axios
      .get('/maplify')
      .then((res) => {
        res.data.data.map((d) => {
          MapStore.update((currDatas) => [
            ...currDatas,
            {
              city: d.city,
              desc: d.desc,
              lat: d.lat,
              lng: d.lng,
            },
          ]);
        });
      })
      .then(() => {
        $MapStore.map(({ lat, lng, desc, city }) => {
          new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
          new mapboxgl.Popup()
            .setLngLat([lng, lat])
            .setHTML(
              `
        <h4>${city}</h4>
        <p>${desc}</p>
        `
            )
            .addTo(map);
        });
      })
      .catch((e) => alert(e.message));
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
    margin: 12% 30%;
    background: #67809645;
    padding: 25px;
    border-radius: 15px;
    transform: translateX(0%);
  }
  .backdrop.show {
    display: none;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    .backdrop-body {
      margin: 12% 10%;
    }
  }
</style>

<div
  class="backdrop"
  class:show={dontShowForm}
  on:click|self={() => (dontShowForm = true)}>
  <div class="backdrop-body">
    <Form {...geometry} on:addMarker={addMaker} />
  </div>
</div>
