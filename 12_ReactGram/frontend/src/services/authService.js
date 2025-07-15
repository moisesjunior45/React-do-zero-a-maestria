import { api, requestConfig } from "../utils/config";

// Register an user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(`${api}/users/register`, config);
    const result = await res.json();

    if (!result.errors) {
      localStorage.setItem("user", JSON.stringify(result));
    }

    return result;
  } catch (error) {
    console.error(error);
  }
};

// Logout an user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
