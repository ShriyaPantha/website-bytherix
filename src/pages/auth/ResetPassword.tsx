import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Check,
    Eye,
    EyeOff,
    KeyRound,
    Loader2,
    ArrowRight,
    ShieldCheck,
    X,
} from "lucide-react";

import api from "../../utils/axiosInstance";

const ResetPassword = () => {
    const { token } = useParams<{ token: string }>();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const passwordStrength = useMemo(() => {
        if (!password) {
            return {
                score: 0,
                label: "",
                color: "",
            };
        }

        let score = 0;

        if (password.length >= 8) score += 1;

        if (
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password)
        ) {
            score += 1;
        }

        if (/\d/.test(password)) score += 1;

        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        if (score <= 1) {
            return {
                score: 1,
                label: "Weak",
                color: "bg-red-500",
            };
        }

        if (score === 2) {
            return {
                score: 2,
                label: "Fair",
                color: "bg-orange-500",
            };
        }

        if (score === 3) {
            return {
                score: 3,
                label: "Good",
                color: "bg-yellow-400",
            };
        }

        return {
            score: 4,
            label: "Strong",
            color: "bg-emerald-500",
        };
    }, [password]);

    const handlePasswordChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
        setError("");
    };

    const handleConfirmPasswordChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(event.target.value);
        setError("");
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setError("");

        if (!token) {
            setError("Invalid or missing password reset link.");
            return;
        }

        if (!password) {
            setError("Please enter your new password.");
            return;
        }

        if (password.length < 6) {
            setError(
                "Password must be at least 6 characters long."
            );
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setIsLoading(true);

            const response = await api.post(
                `/auth/reset-password/${token}`,
                {
                    password,
                }
            );

            console.log(
                "RESET PASSWORD RESPONSE:",
                response.data
            );

            setIsSuccess(true);

            setTimeout(() => {
                navigate("/login", {
                    replace: true,
                });
            }, 1800);
        } catch (err: any) {
            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                "Unable to reset your password.";

            setError(
                Array.isArray(message)
                    ? message.join(", ")
                    : message
            );

            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#030712] px-4">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.98,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="w-full max-w-md"
            >
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

                    {/* =========================
                        GLOW
                    ========================== */}
                    <div
                        className={`pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl ${isLoading
                                ? "bg-logo-blue/10"
                                : isSuccess
                                    ? "bg-emerald-500/10"
                                    : error
                                        ? "bg-red-500/10"
                                        : "bg-logo-blue/10"
                            }`}
                    />

                    {/* =========================
                        ICON
                    ========================== */}
                    <motion.div
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.15,
                            duration: 0.35,
                        }}
                        className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035]"
                    >
                        {isLoading && (
                            <Loader2 className="h-9 w-9 animate-spin text-logo-cyan" />
                        )}

                        {!isLoading && isSuccess && (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
                                <Check
                                    className="h-7 w-7 text-emerald-400"
                                    strokeWidth={2.5}
                                />
                            </div>
                        )}

                        {!isLoading && !isSuccess && error && (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15">
                                <X
                                    className="h-7 w-7 text-red-400"
                                    strokeWidth={2.5}
                                />
                            </div>
                        )}

                        {!isLoading && !isSuccess && !error && (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-logo-blue/10">
                                <KeyRound className="h-7 w-7 text-logo-cyan" />
                            </div>
                        )}
                    </motion.div>

                    {/* =========================
                        TITLE
                    ========================== */}
                    <div className="relative text-center">
                        <div className="mb-2 flex items-center justify-center gap-2">
                            <KeyRound className="h-4 w-4 text-logo-cyan" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-logo-cyan">
                                Password Reset
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-white">
                            {isLoading
                                ? "Resetting your password"
                                : isSuccess
                                    ? "Password reset successful"
                                    : "Create a new password"}
                        </h1>

                        <p className="mx-auto mt-3 max-w-sm text-[11px] leading-5 text-white/45">
                            {isLoading
                                ? "Please wait while we securely update your password."
                                : isSuccess
                                    ? "Your password has been updated successfully. You can now sign in with your new password."
                                    : "Enter a new password for your account. Make sure it is something secure that you can remember."}
                        </p>
                    </div>

                    {/* =========================
                        FORM
                    ========================== */}
                    {!isSuccess && (
                        <form
                            onSubmit={handleSubmit}
                            className="relative mt-7 space-y-4"
                        >
                            {/* =========================
                                NEW PASSWORD
                            ========================== */}
                            <div>
                                <label
                                    htmlFor="reset-password"
                                    className="mb-1.5 block text-[10px] font-medium text-white/75"
                                >
                                    New Password
                                </label>

                                <div className="group relative">
                                    <KeyRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-logo-cyan" />

                                    <input
                                        id="reset-password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={password}
                                        onChange={
                                            handlePasswordChange
                                        }
                                        placeholder="Create a new password"
                                        autoComplete="new-password"
                                        disabled={isLoading}
                                        className="h-11 w-full rounded-xl border border-white/[0.10] bg-white/[0.025] pl-11 pr-12 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:border-logo-blue/60 focus:bg-logo-blue/[0.035] focus:ring-4 focus:ring-logo-blue/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (value) => !value
                                            )
                                        }
                                        disabled={isLoading}
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
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
                                ========================== */}
                                {password && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            height: 0,
                                            y: -4,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="mt-2"
                                    >
                                        <div className="mb-1.5 flex items-center justify-between">
                                            <span className="text-[9px] text-white/35">
                                                Password strength
                                            </span>

                                            <motion.span
                                                key={
                                                    passwordStrength.label
                                                }
                                                initial={{
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                }}
                                                className={`text-[9px] font-semibold ${passwordStrength.score === 1
                                                        ? "text-red-400"
                                                        : passwordStrength.score === 2
                                                            ? "text-orange-400"
                                                            : passwordStrength.score === 3
                                                                ? "text-yellow-300"
                                                                : "text-emerald-400"
                                                    }`}
                                            >
                                                {
                                                    passwordStrength.label
                                                }
                                            </motion.span>
                                        </div>

                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4].map(
                                                (segment) => (
                                                    <div
                                                        key={
                                                            segment
                                                        }
                                                        className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.08]"
                                                    >
                                                        <motion.div
                                                            initial={{
                                                                width: 0,
                                                            }}
                                                            animate={{
                                                                width:
                                                                    segment <=
                                                                        passwordStrength.score
                                                                        ? "100%"
                                                                        : "0%",
                                                            }}
                                                            transition={{
                                                                duration: 0.25,
                                                                ease: "easeOut",
                                                            }}
                                                            className={`h-full rounded-full ${segment <=
                                                                    passwordStrength.score
                                                                    ? passwordStrength.color
                                                                    : ""
                                                                }`}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        <p className="mt-1.5 text-[8px] text-white/25">
                                            Use at least 6 characters.
                                            For better security, use
                                            uppercase, lowercase, number
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
                                    htmlFor="reset-confirm-password"
                                    className="mb-1.5 block text-[10px] font-medium text-white/75"
                                >
                                    Confirm Password
                                </label>

                                <div className="group relative">
                                    <ShieldCheck className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-logo-cyan" />

                                    <input
                                        id="reset-confirm-password"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={
                                            confirmPassword
                                        }
                                        onChange={
                                            handleConfirmPasswordChange
                                        }
                                        placeholder="Confirm your new password"
                                        autoComplete="new-password"
                                        disabled={isLoading}
                                        className={`h-11 w-full rounded-xl border bg-white/[0.025] pl-11 pr-12 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${confirmPassword &&
                                                password !==
                                                confirmPassword
                                                ? "border-red-400/40 focus:border-red-400/50 focus:ring-red-400/[0.08]"
                                                : confirmPassword &&
                                                    password ===
                                                    confirmPassword
                                                    ? "border-emerald-400/35 focus:border-emerald-400/50 focus:ring-emerald-400/[0.08]"
                                                    : "border-white/[0.10] focus:border-logo-blue/60 focus:bg-logo-blue/[0.035] focus:ring-logo-blue/[0.08]"
                                            }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (value) =>
                                                    !value
                                            )
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

                                {confirmPassword &&
                                    password ===
                                    confirmPassword && (
                                        <div className="mt-1.5 flex items-center gap-1 text-[8px] text-emerald-400">
                                            <Check className="h-3 w-3" />
                                            Passwords match
                                        </div>
                                    )}
                            </div>

                            {/* =========================
                                ERROR
                            ========================== */}
                            {error && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -5,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    className="flex items-start gap-2 rounded-xl border border-red-400/15 bg-red-500/[0.07] px-3 py-2.5 text-[9px] leading-4 text-red-300"
                                >
                                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" />

                                    <span>{error}</span>
                                </motion.div>
                            )}

                            {/* =========================
                                RESET BUTTON
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
                                        Resetting Password...
                                    </>
                                ) : (
                                    <>
                                        Reset Password
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}

                    {/* =========================
                        SUCCESS
                    ========================== */}
                    {isSuccess && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 8,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="relative mt-7 flex items-start gap-3 rounded-xl border border-emerald-400/15 bg-emerald-500/[0.07] px-4 py-3"
                        >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                            <p className="text-[9px] leading-4 text-emerald-300">
                                Password reset successful. Redirecting
                                you to the login page...
                            </p>
                        </motion.div>
                    )}

                    {/* =========================
                        BACK TO LOGIN
                    ========================== */}
                    {!isLoading && !isSuccess && (
                        <div className="relative mt-6 text-center">
                            <Link
                                to="/login"
                                className="text-[10px] font-medium text-white/35 transition-colors hover:text-logo-cyan"
                            >
                                Remember your password?{" "}
                                <span className="text-logo-cyan">
                                    Back to Login
                                </span>
                            </Link>
                        </div>
                    )}

                    {isSuccess && (
                        <div className="relative mt-6">
                            <Link
                                to="/login"
                                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-logo-blue via-[#0789ef] to-logo-green text-[11px] font-bold uppercase tracking-[0.10em] text-white shadow-[0_10px_30px_rgba(0,180,255,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,200,170,0.28)]"
                            >
                                Back to Login

                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    )}
                </div>

                {/* =========================
                    FOOTER
                ========================== */}
                <p className="mt-5 text-center text-[8px] uppercase tracking-[0.15em] text-white/20">
                    Secure password recovery
                </p>
            </motion.div>
        </div>
    );
};

export default ResetPassword;
