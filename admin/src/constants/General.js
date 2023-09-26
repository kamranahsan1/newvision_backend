export const BASE_URL = `https://vnbackend-b4d0409e1de8.herokuapp.com`;
// export const BASE_URL = `http://127.0.0.1:5000`;
export const API_URL = `${BASE_URL}/api`;
export const IMAGES = `${BASE_URL}/uploads`;
export const setImage = (imageName) => {
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    return imageName;
  }
  return `${IMAGES}/${imageName}`;
};
