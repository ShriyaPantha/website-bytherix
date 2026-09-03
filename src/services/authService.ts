import { create } from "zustand";
import { devtools } from "zustand/middleware";
import api from "../utils/axiosInstance";

interface UserRole {
  id: string;
  name: string;
  permissions: string[];
}

interface UserPayload {
  id: string;
  fullName: string;
  email: string;
  isVerified: boolean;
  role: UserRole;
}

interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
}

interface AuthState {
  accessToken: string | null;
  user: UserPayload | null;
  isLoading: boolean;
  error: string | null;

  login: (credentials: Record<string, string>) => Promise<boolean>;
  register: (data: RegisterPayload) => Promise<boolean>;
  googleLogin: (credential: string) => Promise<boolean>;
  logout: () => Promise<void>;
  logoutStateOnly: () => void;
  clearError: () => void;
}


const getSafeLocalStorageUser = (): UserPayload | null => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser || storedUser === "undefined" || storedUser === "null") {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Corrupted user payload found in localStorage:", error);
    localStorage.removeItem("user");
    return null;
  }
};

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      accessToken: localStorage.getItem("token"),
      user: getSafeLocalStorageUser(),
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null }, false, "auth/login_start");

        try {
          const response = await api.post("/auth/login", credentials);
          const payload = response.data;

          const accessToken = payload?.data?.data?.accessToken;
          const user = payload?.data?.data?.user;

          if (!accessToken) {
            throw new Error("No access token returned from backend");
          }

          if (!user) {
            throw new Error("No user data returned from backend");
          }

          localStorage.setItem("token", accessToken);
          localStorage.setItem("user", JSON.stringify(user));

          set({ accessToken, user, isLoading: false }, false, "auth/login_success");

          return true;
        } catch (err: any) {
          const errorMessage =
            err?.response?.data?.message ||
            err?.message ||
            "Authentication failed";

          set(
            {
              error: Array.isArray(errorMessage)
                ? errorMessage.join(", ")
                : errorMessage,
              isLoading: false,
            },
            false,
            "auth/login_failure"
          );

          return false;
        }
      },

      register: async (data) => {
        set({ isLoading: true, error: null }, false, "auth/register_start");

        try {
          const response = await api.post("/auth/register", data);
          const payload = response.data;

          console.log("REGISTER RESPONSE:", payload);

          set({ isLoading: false }, false, "auth/register_success");

          return true;
        } catch (err: any) {
          const errorMessage =
            err?.response?.data?.message ||
            err?.response?.data?.error ||
            err?.message ||
            "Unable to create your account.";

          set(
            {
              error: Array.isArray(errorMessage)
                ? errorMessage.join(", ")
                : errorMessage,
              isLoading: false,
            },
            false,
            "auth/register_failure"
          );

          return false;
        }
      },

      googleLogin: async (credential) => {
        set(
          { isLoading: true, error: null },
          false,
          "auth/google_login_start"
        );

        try {
          const response = await api.post("/auth/google", {
            credential,
          });

          const payload = response.data;

          const accessToken = payload?.data?.data?.accessToken;
          const user = payload?.data?.data?.user;

          if (!accessToken) {
            throw new Error("No access token returned from backend");
          }

          if (!user) {
            throw new Error("No user data returned from backend");
          }

          localStorage.setItem("token", accessToken);
          localStorage.setItem("user", JSON.stringify(user));

          set(
            {
              accessToken,
              user,
              isLoading: false,
            },
            false,
            "auth/google_login_success"
          );

          return true;
        } catch (err: any) {
          const errorMessage =
            err?.response?.data?.message ||
            err?.response?.data?.error ||
            err?.message ||
            "Unable to sign in with Google.";

          set(
            {
              error: Array.isArray(errorMessage)
                ? errorMessage.join(", ")
                : errorMessage,
              isLoading: false,
            },
            false,
            "auth/google_login_failure"
          );

          return false;
        }
      },


      logout: async () => {
        set({ isLoading: true }, false, "auth/logout_start");

        try {
          await api.post("/auth/logout");
        } catch (err) {
          console.warn("Backend cookie clearance passed or skipped:", err);
        } finally {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          set(
            {
              accessToken: null,
              user: null,
              error: null,
              isLoading: false,
            },
            false,
            "auth/logout_success"
          );
        }
      },

      logoutStateOnly: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        set(
          {
            accessToken: null,
            user: null,
            error: null,
            isLoading: false,
          },
          false,
          "auth/silent_logout_success"
        );
      },

      clearError: () => set({ error: null }, false, "auth/clearError"),
    }),
    { name: "auth" }
  )
);