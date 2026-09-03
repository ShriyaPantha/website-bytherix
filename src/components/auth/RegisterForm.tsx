import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
  Loader2,
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /*
   * Password strength
   *
   * 0 = empty
   * 1 = weak
   * 2 = fair
   * 3 = good
   * 4 = strong
   */
  const passwordStrength = useMemo(() => {
    if (!password) {
      return {
        score: 0,
        label: "",
        color: "",
        width: "0%",
      };
    }

    let score = 0;

    if (password.length >= 8) score += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) {
      return {
        score: 1,
        label: "Weak",
        color: "bg-red-500",
        width: "25%",
      };
    }

    if (score === 2) {
      return {
        score: 2,
        label: "Fair",
        color: "bg-orange-500",
        width: "50%",
      };
    }

    if (score === 3) {
      return {
        score: 3,
        label: "Good",
        color: "bg-yellow-400",
        width: "75%",
      };
    }

    return {
      score: 4,
      label: "Strong",
      color: "bg-emerald-500",
      width: "100%",
    };
  }, [password]);

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
      setError("Please create a password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await registerUser({
        fullName: fullName.trim(),
        email: email.trim(),
        password,

        /*
         * Your current RegisterPayload expects phone.
         * Since the reference UI does not contain a phone field,
         * an empty value is sent here.
         *
         * If your backend requires phone, add a phone field
         * to this form and pass its value here.
         */
        phone: "",
      });

      login(response.token, response.user);

      navigate("/", {
        replace: true,
      });
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Unable to create your account. Please try again.";

      setError(
        Array.isArray(message) ? message.join(", ") : message
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* =========================
          FULL NAME
      ========================== */}
      <div>
        <label
          htmlFor="register-full-name"
          className="mb-1.5 block text-[10px] font-medium text-white/75"
        >
          Full Name
        </label>

        <div className="group relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-full-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Enter your full name"
            autoComplete="name"
            disabled={isLoading}
            className="h-11 w-full rounded-xl border border-white/[0.10] bg-white/[0.025] pl-11 pr-4 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:border-logo-blue/60 focus:bg-logo-blue/[0.035] focus:ring-4 focus:ring-logo-blue/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
      </div>

      {/* =========================
          EMAIL
      ========================== */}
      <div>
        <label
          htmlFor="register-email"
          className="mb-1.5 block text-[10px] font-medium text-white/75"
        >
          Email Address
        </label>

        <div className="group relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            disabled={isLoading}
            className="h-11 w-full rounded-xl border border-white/[0.10] bg-white/[0.025] pl-11 pr-4 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:border-logo-blue/60 focus:bg-logo-blue/[0.035] focus:ring-4 focus:ring-logo-blue/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
      </div>

      {/* =========================
          PASSWORD
      ========================== */}
      <div>
        <label
          htmlFor="register-password"
          className="mb-1.5 block text-[10px] font-medium text-white/75"
        >
          Password
        </label>

        <div className="group relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Create a strong password"
            autoComplete="new-password"
            disabled={isLoading}
            className="h-11 w-full rounded-xl border border-white/[0.10] bg-white/[0.025] pl-11 pr-12 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:border-logo-blue/60 focus:bg-logo-blue/[0.035] focus:ring-4 focus:ring-logo-blue/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
          />

          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            disabled={isLoading}
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors hover:text-white/70 disabled:pointer-events-none"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* =========================
            PASSWORD STRENGTH
            Only visible after typing
        ========================== */}
        {password && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[9px] text-white/35">
                Password strength
              </span>

              <motion.span
                key={passwordStrength.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-[9px] font-semibold ${
                  passwordStrength.score === 1
                    ? "text-red-400"
                    : passwordStrength.score === 2
                      ? "text-orange-400"
                      : passwordStrength.score === 3
                        ? "text-yellow-300"
                        : "text-emerald-400"
                }`}
              >
                {passwordStrength.label}
              </motion.span>
            </div>

            <div className="flex gap-1">
              {[1, 2, 3, 4].map((segment) => (
                <div
                  key={segment}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.08]"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        segment <= passwordStrength.score
                          ? "100%"
                          : "0%",
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className={`h-full rounded-full ${
                      segment <= passwordStrength.score
                        ? passwordStrength.color
                        : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <p className="mt-1.5 text-[8px] text-white/25">
              Use 8+ characters with uppercase, lowercase, number
              and special character.
            </p>
          </motion.div>
        )}
      </div>

      {/* =========================
          CONFIRM PASSWORD
      ========================== */}
      <div>
        <label
          htmlFor="register-confirm-password"
          className="mb-1.5 block text-[10px] font-medium text-white/75"
        >
          Confirm Password
        </label>

        <div className="group relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-logo-cyan" />

          <input
            id="register-confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            placeholder="Confirm your password"
            autoComplete="new-password"
            disabled={isLoading}
            className={`h-11 w-full rounded-xl border bg-white/[0.025] pl-11 pr-12 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${
              confirmPassword && password !== confirmPassword
                ? "border-red-400/40 focus:border-red-400/50 focus:ring-red-400/[0.08]"
                : confirmPassword && password === confirmPassword
                  ? "border-emerald-400/35 focus:border-emerald-400/50 focus:ring-emerald-400/[0.08]"
                  : "border-white/[0.10] focus:border-logo-blue/60 focus:bg-logo-blue/[0.035] focus:ring-logo-blue/[0.08]"
            }`}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword((value) => !value)
            }
            disabled={isLoading}
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors hover:text-white/70 disabled:pointer-events-none"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>

        {confirmPassword && password === confirmPassword && (
          <div className="mt-1.5 flex items-center gap-1 text-[8px] text-emerald-400">
            <Check className="h-3 w-3" />
            Passwords match
          </div>
        )}
      </div>

      {/* =========================
          TERMS
      ========================== */}
      <div className="pt-0.5">
        <label className="flex cursor-pointer items-start gap-2.5">
          <button
            type="button"
            role="checkbox"
            aria-checked={agreeToTerms}
            onClick={() => setAgreeToTerms((value) => !value)}
            disabled={isLoading}
            className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border transition-all ${
              agreeToTerms
                ? "border-logo-blue bg-logo-blue shadow-[0_0_10px_rgba(37,99,235,0.35)]"
                : "border-white/20 bg-white/[0.025] hover:border-logo-blue/50"
            }`}
          >
            {agreeToTerms && (
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            )}
          </button>

          <span className="text-[9px] leading-5 text-white/45">
            I agree to the{" "}
            <button
              type="button"
              onClick={(event) => event.preventDefault()}
              className="font-medium text-logo-cyan transition-colors hover:text-white"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              onClick={(event) => event.preventDefault()}
              className="font-medium text-logo-cyan transition-colors hover:text-white"
            >
              Privacy Policy
            </button>
          </span>
        </label>
      </div>

      {/* =========================
          ERROR
      ========================== */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-2 rounded-xl border border-red-400/15 bg-red-500/[0.07] px-3 py-2.5 text-[9px] leading-4 text-red-300"
        >
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" />
          <span>{error}</span>
        </motion.div>
      )}

      {/* =========================
          CREATE ACCOUNT BUTTON
      ========================== */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={
          isLoading
            ? undefined
            : {
                y: -2,
                scale: 1.01,
              }
        }
        whileTap={
          isLoading
            ? undefined
            : {
                scale: 0.98,
              }
        }
        transition={{
          duration: 0.18,
          ease: "easeOut",
        }}
        className="group relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-logo-blue via-[#0789ef] to-logo-green text-[11px] font-bold uppercase tracking-[0.10em] text-white shadow-[0_10px_30px_rgba(0,180,255,0.20)] transition-all hover:shadow-[0_12px_35px_rgba(0,200,170,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Creating Account...
          </>
        ) : (
          <>
            Create Account
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </motion.button>

      {/* =========================
          DIVIDER
      ========================== */}
      <div className="flex items-center justify-center gap-2 py-1 text-[8px] uppercase tracking-[0.16em] text-white/25">
        <span className="h-px flex-1 bg-white/[0.07]" />

        <span>Or sign up with</span>

        <span className="h-px flex-1 bg-white/[0.07]" />
      </div>

      {/* =========================
          SOCIAL BUTTONS
      ========================== */}
      <div className="flex items-center justify-center gap-3">
        <motion.button
          type="button"
          aria-label="Continue with Google"
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.025] text-[11px] font-medium text-white/70 transition-all hover:border-logo-cyan/30 hover:bg-logo-cyan/[0.035] hover:text-white"
        >
          <FaGoogle className="h-4 w-4" />
          <span>Google</span>
        </motion.button>

        <motion.button
          type="button"
          aria-label="Continue with GitHub"
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.025] text-[11px] font-medium text-white/70 transition-all hover:border-logo-cyan/30 hover:bg-logo-cyan/[0.035] hover:text-white"
        >
          <FaGithub className="h-4 w-4" />
          <span>GitHub</span>
        </motion.button>
      </div>
    </form>
  );
};

export default RegisterForm;