async function getGeolocation() {
  const response = await navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
    return [position.coords.latitude, position.coords.longitude];
  });
  return response;
}

export default getGeolocation;
