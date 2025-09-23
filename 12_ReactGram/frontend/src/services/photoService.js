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

const photoService = { publishPhoto };

export default photoService;
