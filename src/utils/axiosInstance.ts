import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { useAuthStore } from "../services/authService";

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

// REQUEST INTERCEPTOR
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = useAuthStore.getState().accessToken;
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (!originalRequest) {
            return Promise.reject(error);
        }

        // Check if the actual refresh call failed to prevent loops
        if (originalRequest.url?.includes("auth/refresh")) {
            useAuthStore.getState().logoutStateOnly(); // Clear state silently without calling /auth/logout API
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers = originalRequest.headers || {};
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return api(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            isRefreshing = true;

            try {
                const refreshUrl = originalRequest.url?.includes("/v1/")
                    ? `${import.meta.env.VITE_API_URL}/api/v1/auth/refresh-token`
                    : `${import.meta.env.VITE_API_URL}/auth/refresh-token`;

                const response = await axios.post(refreshUrl, {}, { withCredentials: true });

                const payload = response.data;
                const accessToken = payload?.accessToken;

                if (!accessToken) {
                    throw new Error("Invalid token refresh payload structure");
                }

                const { accessToken: _, ...user } = payload;

                useAuthStore.setState({ accessToken: accessToken, user: user });
                localStorage.setItem("token", accessToken);
                localStorage.setItem("user", JSON.stringify(user));

                originalRequest.headers = originalRequest.headers || {};
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                processQueue(null, accessToken);
                isRefreshing = false;

                return api(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError, null);
                isRefreshing = false;

                useAuthStore.getState().logoutStateOnly();
                localStorage.removeItem("token");
                localStorage.removeItem("user");

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;