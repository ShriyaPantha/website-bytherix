import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const registerUser = async (
  payload: RegisterPayload
): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>(
    "/auth/register",
    payload
  );

  return data;
};

export const loginUser = async (
  payload: LoginPayload
): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>(
    "/auth/login",
    payload
  );

  return data;
};

export default api;