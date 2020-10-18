<script>
  import { createEventDispatcher } from 'svelte';
  import axios from './axios';
  const dispatch = createEventDispatcher();

  let desc;
  let city;
  let accessKey;
  export let lng;
  export let lat;

  const handleSubmit = async () => {
    if (desc && city && lat && lng && accessKey) {
      await axios.post(
        '/maplify',
        { lng, lat, desc, city },
        { params: { accessKey } }
      );
      dispatch('addMarker', { lng, lat, desc, city });
      desc = '';
      city = '';
      return;
    } else {
      alert('All Fields Need to be filled!');
    }
  };
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    font-family: inherit;
    font-size: inherit;
    -webkit-padding: 0.4em 0;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: white;
    border-radius: 2px;
    background: #347f6640;
  }
  button {
    box-sizing: border-box;
    color: white;
    background: #347f6640;
  }
  h2 {
    text-align: center;
    text-decoration: underline;
    color: #347f66;
    padding: 0;
    margin-top: 0;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <h2>Add Travel Log</h2>
  <input type="text" bind:value={city} placeholder="City" />
  <input type="text" bind:value={desc} placeholder="Short Desc..." />
  <input type="password" bind:value={accessKey} placeholder="Access Key" />
  <button type="submit" on:click|preventDefault={handleSubmit}>Add</button>
</form>
