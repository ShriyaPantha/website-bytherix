import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await loginUser({
        email: email.trim(),
        password,
      });

      login(response.token, response.user);

      navigate("/", {
        replace: true,
      });
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Unable to sign in. Please check your credentials and try again.";

      setError(
        Array.isArray(message)
          ? message.join(", ")
          : message
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* =====================================================
          EMAIL
      ====================================================== */}

      <div>
        <label
          htmlFor="login-email"
          className="mb-2 block text-[13px] font-medium text-[#eef3ff]"
        >
          Email Address
        </label>

        <div className="group relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8290a8] transition-colors group-focus-within:text-[#1687ff]" />

          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="you@example.com"
            autoComplete="email"
            disabled={isLoading}
            className="h-11 w-full rounded-[10px] border border-[#263b61] bg-[#08142d]/80 pl-11 pr-4 text-[13px] text-white outline-none transition-all placeholder:text-[#7886a0] focus:border-[#1687ff]/60 focus:bg-[#0a1935] focus:ring-4 focus:ring-[#1687ff]/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
      </div>

      {/* =====================================================
          PASSWORD
      ====================================================== */}

      <div>
        <label
          htmlFor="login-password"
          className="mb-2 block text-[13px] font-medium text-[#eef3ff]"
        >
          Password
        </label>

        <div className="group relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8290a8] transition-colors group-focus-within:text-[#1687ff]" />

          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
            autoComplete="current-password"
            disabled={isLoading}
            className="h-11 w-full rounded-[10px] border border-[#263b61] bg-[#08142d]/80 pl-11 pr-12 text-[13px] text-white outline-none transition-all placeholder:text-[#7886a0] focus:border-[#1687ff]/60 focus:bg-[#0a1935] focus:ring-4 focus:ring-[#1687ff]/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((value) => !value)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8290a8] transition-colors hover:text-white"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          FORGOT PASSWORD
      ====================================================== */}

      <div className="flex justify-end">
        <button
          type="button"
          className="text-[12px] font-medium text-[#1687ff] transition-colors hover:text-[#42a5ff]"
        >
          Forgot Password?
        </button>
      </div>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <div className="rounded-[9px] border border-red-400/20 bg-red-500/[0.07] px-3.5 py-2.5 text-[11px] leading-5 text-red-300">
          {error}
        </div>
      )}

      {/* =====================================================
          LOGIN BUTTON
      ====================================================== */}

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={
          isLoading
            ? undefined
            : {
                y: -1,
                scale: 1.005,
              }
        }
        whileTap={
          isLoading
            ? undefined
            : {
                scale: 0.985,
              }
        }
        transition={{
          duration: 0.18,
          ease: "easeOut",
        }}
        className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-[9px] bg-gradient-to-r from-[#086cff] via-[#078fe7] to-[#00c77b] text-[14px] font-semibold text-white shadow-[0_8px_25px_rgba(0,130,255,0.22)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(0,160,255,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            Log In
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </motion.button>

      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div className="flex items-center gap-3 text-[11px] text-[#77849a]">
        <span className="h-px flex-1 bg-white/[0.08]" />

        <span>or continue with</span>

        <span className="h-px flex-1 bg-white/[0.08]" />
      </div>

      {/* =====================================================
          SOCIAL BUTTONS
      ====================================================== */}

      <div className="flex gap-3">
        <motion.button
          type="button"
          whileHover={{
            y: -1,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-[9px] border border-[#263b61] bg-[#08142d]/75 text-[13px] text-[#e6ecf7] transition-all hover:border-[#1687ff]/40 hover:bg-[#0b1a38]"
        >
          <FaGoogle className="h-[17px] w-[17px]" />

          <span>Google</span>
        </motion.button>

        <motion.button
          type="button"
          whileHover={{
            y: -1,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-[9px] border border-[#263b61] bg-[#08142d]/75 text-[13px] text-[#e6ecf7] transition-all hover:border-[#1687ff]/40 hover:bg-[#0b1a38]"
        >
          <FaGithub className="h-[17px] w-[17px]" />

          <span>GitHub</span>
        </motion.button>
      </div>
    </form>
  );
};

export default LoginForm;