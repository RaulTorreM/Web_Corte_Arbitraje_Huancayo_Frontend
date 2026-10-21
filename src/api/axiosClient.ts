import axios from "axios";

/**
 * Cliente HTTP preparado para una futura API externa.
 * La web actual funciona solo con datos mock; no se realizan peticiones.
 *
 * Configura la URL en el archivo .env:
 *   VITE_API_URL=https://api.ejemplo.com/api
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ??
      "No se pudo completar la solicitud. Inténtalo nuevamente.";

    return Promise.reject(new Error(message));
  }
);

export default apiClient;
