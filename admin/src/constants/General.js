// export const BASE_URL = `https://vnbackend-b4d0409e1de8.herokuapp.com`;
export const BASE_URL = `https://server.newvision.travel:5000`;
export const BASE_IMAGE_URL = `https://newvision.travel/server/backend`;
export const API_URL = `${BASE_URL}/api`;
export const IMAGES = `${BASE_URL}/uploads`;
export const setImage = (imageName) => {
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    return imageName;
  }
  return `${IMAGES}/${imageName}`;
};

export const setBaseUrlImage = (url) => {
  if (url) {
    if (url.startsWith('/')) {
      return `${BASE_IMAGE_URL}${url}`;
    }

    if (url.includes('://')) {
      return url;
    }

    if (!url.includes('/uploads/')) {
      url = `/uploads/${url}`;
    }

    return `${BASE_IMAGE_URL}${url}`;
  }
  return null;
};
export const setBaseUrlAttachment = (url) => `${BASE_IMAGE_URL}/attachments/${url}`;
