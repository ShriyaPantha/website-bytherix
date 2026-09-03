import AuthBackground from "../../components/auth/AuthBackground";
import AuthCard from "../../components/auth/AuthCard";
import BrandEmblem from "../../components/auth/BrandEmblem";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040a1d] text-white">
      <AuthBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-6 lg:py-10">
        <BrandEmblem className="mb-7" />

        <AuthCard
          title="Create Account"
          description="Join Bytherix and get started"
          footerText="Already have an account?"
          footerAction="Log in"
          footerHref="/login"
          isRegister
        >
          <RegisterForm />
        </AuthCard>
      </div>
    </main>
  );
};

export default RegisterPage;