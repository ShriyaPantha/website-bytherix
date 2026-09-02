import { useNavigate } from "react-router-dom";
import AuthBackground from "../../components/auth/AuthBackground";
import AuthCard from "../../components/auth/AuthCard";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050814] text-white">
      <AuthBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_470px] lg:gap-20">
          {/* Desktop branding */}
          <div className="hidden lg:block">
            <div className="max-w-xl">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                  <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
                </div>

                <span className="text-lg font-bold tracking-[0.22em] text-white">
                  BYTHERIX
                </span>
              </div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/60">
                Build Your Future
              </p>

              <h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white xl:text-6xl">
                Start your
                <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                  digital journey.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                Create your Bytherix account and become part of a growing
                ecosystem built around technology, education and innovation.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {["LEARN", "BUILD", "INNOVATE", "CONNECT"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-[9px] font-medium tracking-[0.22em] text-white/30 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <AuthCard
            title="Create account"
            description="Join Bytherix and unlock your place inside our digital ecosystem."
            footerText="Already have an account?"
            footerAction="Sign in"
            onFooterAction={() => navigate("/login")}
            isRegister
          >
            <RegisterForm />
          </AuthCard>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;