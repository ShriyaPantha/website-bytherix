import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, LogOut } from "lucide-react";
import { motion } from "framer-motion";

import { useAuthStore } from "../../services/authService";

const LogoutBtn = () => {
    const navigate = useNavigate();

    const { logout } = useAuthStore();

    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        if (isLoggingOut) return;

        try {
            setIsLoggingOut(true);

            await logout();

            navigate("/login", {
                replace: true,
            });
        } catch (error) {
            console.error("Logout failed:", error);

            // Even if the backend request fails,
            // send the user back to login.
            navigate("/login", {
                replace: true,
            });
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <motion.button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            whileHover={
                isLoggingOut
                    ? undefined
                    : {
                        y: -1,
                    }
            }
            whileTap={
                isLoggingOut
                    ? undefined
                    : {
                        scale: 0.98,
                    }
            }
            transition={{
                duration: 0.15,
                ease: "easeOut",
            }}
            className="group flex w-full items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-[11px] font-medium text-white/60 transition-all hover:border-red-400/20 hover:bg-red-500/[0.06] hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
            {isLoggingOut ? (
                <Loader2 className="h-4 w-4 animate-spin text-white/40" />
            ) : (
                <LogOut className="h-4 w-4 text-white/35 transition-colors group-hover:text-red-400" />
            )}

            <span>
                {isLoggingOut
                    ? "Signing out..."
                    : "Logout"}
            </span>
        </motion.button>
    );
};

export default LogoutBtn;
