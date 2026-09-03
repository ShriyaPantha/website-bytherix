import { useNavigate } from "react-router-dom";
import { GoogleLogin as GoogleLoginButton } from "@react-oauth/google";

import { useAuthStore } from "../../services/authService";

const GoogleLogin = () => {
    const navigate = useNavigate();

    const {
        googleLogin,
        isLoading,
        clearError,
    } = useAuthStore();

    const handleSuccess = async (
        credentialResponse: any
    ) => {
        if (!credentialResponse?.credential) {
            return;
        }

        clearError();

        const success = await googleLogin(
            credentialResponse.credential
        );

        if (success) {
            navigate("/dashboard", {
                replace: true,
            });
        }
    };

    const handleError = () => {
        console.error("Google login failed");
    };

    return (
        <div
            className={
                isLoading
                    ? "pointer-events-none opacity-60"
                    : ""
            }
        >
            <GoogleLoginButton
                onSuccess={handleSuccess}
                onError={handleError}
                useOneTap={false}
                theme="filled_black"
                size="large"
                text="continue_with"
                shape="rectangular"
                width="100%"
            />
        </div>
    );
};

export default GoogleLogin;
