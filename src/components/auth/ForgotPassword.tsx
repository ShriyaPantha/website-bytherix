import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Check,
    Loader2,
    Mail,
    ShieldCheck,
    X,
} from "lucide-react";

import api from "../../utils/axiosInstance";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setEmail(event.target.value);

        setError("");
        setSuccess("");
        setIsSuccess(false);
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        if (!email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        try {
            setIsLoading(true);

            const response = await api.post(
                "/auth/forgot-password",
                {
                    email: email.trim(),
                }
            );

            console.log(
                "FORGOT PASSWORD RESPONSE:",
                response.data
            );

            const message =
                response?.data?.message ||
                "Password reset link sent to your email.";

            setSuccess(message);
            setIsSuccess(true);
        } catch (err: any) {
            const message =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                "Unable to send password reset link.";

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
                        className={`pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl ${isSuccess
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
                        {isSuccess ? (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
                                <Check
                                    className="h-7 w-7 text-emerald-400"
                                    strokeWidth={2.5}
                                />
                            </div>
                        ) : error ? (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15">
                                <X
                                    className="h-7 w-7 text-red-400"
                                    strokeWidth={2.5}
                                />
                            </div>
                        ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-logo-blue/10">
                                <Mail className="h-7 w-7 text-logo-cyan" />
                            </div>
                        )}
                    </motion.div>

                    {/* =========================
                        TITLE
                    ========================== */}
                    <div className="relative text-center">
                        <div className="mb-2 flex items-center justify-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-logo-cyan" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-logo-cyan">
                                Password Recovery
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-white">
                            {isSuccess
                                ? "Check your email"
                                : "Forgot your password?"}
                        </h1>

                        <p className="mx-auto mt-3 max-w-sm text-[11px] leading-5 text-white/45">
                            {isSuccess
                                ? "We've sent you a secure password reset link. Check your inbox and follow the instructions."
                                : "Enter the email address associated with your account and we'll send you a secure password reset link."}
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
                                EMAIL
                            ========================== */}
                            <div>
                                <label
                                    htmlFor="forgot-password-email"
                                    className="mb-1.5 block text-[10px] font-medium text-white/75"
                                >
                                    Email Address
                                </label>

                                <div className="group relative">
                                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-logo-cyan" />

                                    <input
                                        id="forgot-password-email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        autoFocus
                                        disabled={isLoading}
                                        className="h-11 w-full rounded-xl border border-white/[0.10] bg-white/[0.025] pl-11 pr-4 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:border-logo-blue/60 focus:bg-logo-blue/[0.035] focus:ring-4 focus:ring-logo-blue/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
                                    />
                                </div>
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
                                SEND RESET LINK
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
                                        Sending Reset Link...
                                    </>
                                ) : (
                                    <>
                                        Send Reset Link
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
                                {success}
                            </p>
                        </motion.div>
                    )}

                    {/* =========================
                        BACK TO LOGIN
                    ========================== */}
                    <div className="relative mt-6 text-center">
                        <Link
                            to="/login"
                            className="group inline-flex items-center gap-1.5 text-[9px] font-medium text-white/35 transition-colors hover:text-logo-cyan"
                        >
                            Back to Login

                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
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

export default ForgotPassword;
