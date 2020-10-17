<script>
  let desc;
  let city;
  export let lng;
  export let lat;

  const handleSubmit = () => console.log({ desc, city, lng, lat });
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
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={city} placeholder="City" />
  <input type="text" bind:value={desc} placeholder="Short Desc..." />
  <button type="submit" on:click|preventDefault={handleSubmit}>Add</button>
</form>
