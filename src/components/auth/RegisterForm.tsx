import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
  Loader2,
  Zap,
} from "lucide-react";
import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await registerUser({
        fullName: fullName.trim(),
        email: email.trim(),
        password,
        phone: phone.trim(),
      });

      login(response.token, response.user);

      navigate("/", { replace: true });
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Unable to create your account. Please try again.";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div>
        <label
          htmlFor="register-name"
          className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"
        >
          Full Name
        </label>

        <div className="group relative">
          <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Your full name"
            autoComplete="name"
            className="h-11 w-full rounded-2xl border border-white/[0.09] bg-white/[0.035] pl-11 pr-4 text-[12px] text-white outline-none transition-all placeholder:text-white/20 focus:border-logo-cyan/40 focus:bg-logo-cyan/[0.04] focus:ring-4 focus:ring-logo-cyan/[0.08]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="register-email"
          className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"
        >
          Email Address
        </label>

        <div className="group relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="h-11 w-full rounded-2xl border border-white/[0.09] bg-white/[0.035] pl-11 pr-4 text-[12px] text-white outline-none transition-all placeholder:text-white/20 focus:border-logo-cyan/40 focus:bg-logo-cyan/[0.04] focus:ring-4 focus:ring-logo-cyan/[0.08]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="register-phone"
          className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"
        >
          Phone Number
        </label>

        <div className="group relative">
          <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+977 98XXXXXXXX"
            autoComplete="tel"
            className="h-11 w-full rounded-2xl border border-white/[0.09] bg-white/[0.035] pl-11 pr-4 text-[12px] text-white outline-none transition-all placeholder:text-white/20 focus:border-logo-cyan/40 focus:bg-logo-cyan/[0.04] focus:ring-4 focus:ring-logo-cyan/[0.08]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="register-password"
          className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45"
        >
          Password
        </label>

        <div className="group relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Create a secure password"
            autoComplete="new-password"
            className="h-11 w-full rounded-2xl border border-white/[0.09] bg-white/[0.035] pl-11 pr-12 text-[12px] text-white outline-none transition-all placeholder:text-white/20 focus:border-logo-cyan/40 focus:bg-logo-cyan/[0.04] focus:ring-4 focus:ring-logo-cyan/[0.08]"
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

      {error && (
        <div className="rounded-xl border border-red-400/15 bg-red-500/[0.07] px-3.5 py-2.5 text-[10px] leading-5 text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="group relative mt-1 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-logo-blue to-logo-cyan text-[12px] font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-logo-cyan/25 transition-all hover:shadow-logo-cyan/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          <>
            <Zap className="h-4 w-4" />
            Create Account
          </>
        )}
      </button>
    </form>
  );
};

export default RegisterForm;