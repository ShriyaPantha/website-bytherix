import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Check,
    Loader2,
    MailCheck,
    ShieldCheck,
    X,
    ArrowRight,
} from "lucide-react";

import api from "../../utils/axiosInstance";


const Verification = () => {
    const { accessToken } = useParams<{ accessToken: string }>();

    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const verifyEmail = async () => {
            if (!accessToken) {
                setError("Invalid or missing verification link.");
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError("");

                const response = await api.get(
                    `/auth/verify/${encodeURIComponent(accessToken)}`
                );

                console.log("VERIFY EMAIL RESPONSE:", response.data);

                setIsVerified(true);
            } catch (err: any) {
                const message =
                    err?.response?.data?.message ||
                    err?.response?.data?.error ||
                    err?.message ||
                    "Unable to verify your email.";

                setError(
                    Array.isArray(message)
                        ? message.join(", ")
                        : message
                );

                setIsVerified(false);
            } finally {
                setIsLoading(false);
            }
        };

        verifyEmail();
    }, [accessToken]);

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
                            : isVerified
                                ? "bg-emerald-500/10"
                                : "bg-red-500/10"
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

                        {!isLoading && isVerified && (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
                                <Check
                                    className="h-7 w-7 text-emerald-400"
                                    strokeWidth={2.5}
                                />
                            </div>
                        )}

                        {!isLoading && !isVerified && (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15">
                                <X
                                    className="h-7 w-7 text-red-400"
                                    strokeWidth={2.5}
                                />
                            </div>
                        )}
                    </motion.div>

                    {/* =========================
              TITLE
          ========================== */}
                    <div className="relative text-center">

                        <div className="mb-2 flex items-center justify-center gap-2">
                            <MailCheck className="h-4 w-4 text-logo-cyan" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-logo-cyan">
                                Email Verification
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-white">
                            {isLoading
                                ? "Verifying your email"
                                : isVerified
                                    ? "Verification successful"
                                    : "Verification failed"}
                        </h1>

                        <p className="mx-auto mt-3 max-w-sm text-[11px] leading-5 text-white/45">
                            {isLoading
                                ? "Please wait while we verify your email address."
                                : isVerified
                                    ? "Your email address has been successfully verified."
                                    : error || "We couldn't verify your email address."}
                        </p>
                    </div>

                    {/* =========================
              STATUS
          ========================== */}
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
                            delay: 0.25,
                            duration: 0.3,
                        }}
                        className={`relative mt-7 flex items-start gap-3 rounded-xl border px-4 py-3 ${isLoading
                            ? "border-logo-blue/15 bg-logo-blue/[0.06]"
                            : isVerified
                                ? "border-emerald-400/15 bg-emerald-500/[0.07]"
                                : "border-red-400/15 bg-red-500/[0.07]"
                            }`}
                    >
                        {isLoading && (
                            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-logo-cyan" />
                        )}

                        {!isLoading && isVerified && (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        )}

                        {!isLoading && !isVerified && (
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        )}

                        <p
                            className={`text-[9px] leading-4 ${isLoading
                                ? "text-white/50"
                                : isVerified
                                    ? "text-emerald-300"
                                    : "text-red-300"
                                }`}
                        >
                            {isLoading
                                ? "Confirming your account with the verification token."
                                : isVerified
                                    ? "Your account is now ready. You can continue to the login page."
                                    : error || "The verification link is invalid or expired."}
                        </p>
                    </motion.div>

                    {/* =========================
              BACK TO LOGIN
          ========================== */}
                    {!isLoading && (
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
                                delay: 0.35,
                                duration: 0.3,
                            }}
                            className="relative mt-6"
                        >
                            <Link
                                to="/login"
                                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-logo-blue via-[#0789ef] to-logo-green text-[11px] font-bold uppercase tracking-[0.10em] text-white shadow-[0_10px_30px_rgba(0,180,255,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(0,200,170,0.28)]"
                            >
                                Back to Login

                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </motion.div>
                    )}
                </div>

                {/* =========================
            FOOTER
        ========================== */}
                <p className="mt-5 text-center text-[8px] uppercase tracking-[0.15em] text-white/20">
                    Secure account verification
                </p>
            </motion.div>
        </div>
    );
};

export default Verification;