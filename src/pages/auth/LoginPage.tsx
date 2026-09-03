import AuthBackground from "../../components/auth/AuthBackground";
import AuthCard from "../../components/auth/AuthCard";
import BrandEmblem from "../../components/auth/BrandEmblem";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040a1d] text-white">
      <AuthBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-6 lg:py-10">
        <BrandEmblem className="mb-7" />

        <AuthCard
          title="Welcome Back"
          description="Login to your account"
          footerText="Don't have an account?"
          footerAction="Register"
          footerHref="/register"
        >
          <LoginForm />
        </AuthCard>
      </div>
    </main>
  );
};

export default LoginPage;