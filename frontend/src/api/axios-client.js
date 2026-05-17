import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
});

// Inside your axiosClient setup file:
axiosClient.defaults.headers.common["Accept"] = "application/json";
axiosClient.defaults.headers.common["Content-Type"] = "application/json";

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    throw error;
  },
);

export default axiosClient;
