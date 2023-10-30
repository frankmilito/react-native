const GOOGLE_API_KEY = "AIzaSyB-lhjbtaJ4w-DhlQWwA0o_PK48t9I6tJE";

export const getMapPreview = (lng, lat) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}
    `;

  return imagePreviewUrl;
};

export const getAddress = async (coord) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coord.lat},${coord.lng}&key=${GOOGLE_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const address = data.results[0].formatted_address;
  return address;
};
