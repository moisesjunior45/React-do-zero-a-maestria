import { api, requestConfig } from "../utils/config";

// Publish an user photo
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(`${api}/photos`, config);
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

// Get user photos
const getUserPhotos = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(`${api}/photos/user/${id}`, config);
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

const photoService = { publishPhoto, getUserPhotos };

export default photoService;
