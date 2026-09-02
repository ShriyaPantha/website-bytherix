import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Loader2,
  Zap,
} from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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

      navigate("/", { replace: true });
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Unable to sign in. Please check your credentials and try again.";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="login-email"
          className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"
        >
          Email Address
        </label>

        <div className="group relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="h-12 w-full rounded-2xl border border-white/[0.09] bg-white/[0.035] pl-11 pr-4 text-[13px] text-white outline-none transition-all placeholder:text-white/20 focus:border-logo-cyan/40 focus:bg-logo-cyan/[0.04] focus:ring-4 focus:ring-logo-cyan/[0.08]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="login-password"
          className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"
        >
          Password
        </label>

        <div className="group relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="h-12 w-full rounded-2xl border border-white/[0.09] bg-white/[0.035] pl-11 pr-12 text-[13px] text-white outline-none transition-all placeholder:text-white/20 focus:border-logo-cyan/40 focus:bg-logo-cyan/[0.04] focus:ring-4 focus:ring-logo-cyan/[0.08]"
          />

          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 transition-colors hover:text-white/60"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Remember me + forgot access row */}
      <div className="flex items-center justify-between">
        <label
          htmlFor="login-remember"
          className="flex select-none items-center gap-2 text-[11px] text-white/45"
        >
          <input
            id="login-remember"
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="h-3.5 w-3.5 rounded border-white/20 bg-white/[0.05] text-logo-cyan accent-logo-cyan focus:ring-1 focus:ring-logo-cyan/40"
          />
          Remember me
        </label>

        <button
          type="button"
          className="text-[11px] text-logo-cyan/70 transition-colors hover:text-logo-cyan"
        >
          Forgot access protocols?
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-400/15 bg-red-500/[0.07] px-3.5 py-2.5 text-[10px] leading-5 text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-logo-blue to-logo-cyan text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-logo-cyan/25 transition-all hover:shadow-logo-cyan/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            <Zap className="h-4 w-4" />
            Initialize Authentication
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.18em] text-white/20">
        <span className="h-px flex-1 bg-white/[0.06]" />
        <span>Secure authentication</span>
        <span className="h-px flex-1 bg-white/[0.06]" />
      </div>

      {/* Social auth — presentational only, not wired to a backend flow */}
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Continue with GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.03] text-white/60 transition-all hover:border-logo-cyan/30 hover:text-white"
        >
          <FaGithub className="h-4 w-4" />
        </button>

        <button
          type="button"
          aria-label="Continue with Google"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.03] text-white/60 transition-all hover:border-logo-cyan/30 hover:text-white"
        >
          <FaGoogle className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;