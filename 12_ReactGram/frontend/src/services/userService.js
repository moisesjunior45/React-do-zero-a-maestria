import { api, requestConfig } from "../utils/config";

// Get user details
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(`${api}/users/profile`, config);
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  profile,
};

export default userService;
