const GOOGLE_API_KEY = "AIzaSyB-lhjbtaJ4w-DhlQWwA0o_PK48t9I6tJE";

export const getMapPreview = (lng, lat) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}
    `;

  return imagePreviewUrl;
};
