import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#071426] font-['Inter',sans-serif] text-white">
      {/* Decorative Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full border border-blue-400/10" />
        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full border border-blue-400/5" />
        <div className="absolute -right-20 top-6 h-40 w-40 rounded-full border border-blue-400/10" />
        <div className="absolute -right-12 top-14 h-24 w-24 rounded-full border border-blue-400/5" />
      </div>

      {/* Main Container — aligned with page content */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.45fr_1fr_1fr_0.9fr] lg:gap-0 lg:py-14">
          
          {/* Brand */}
          <div className="min-w-0 lg:pr-12">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
              <span className="text-blue-400">BY</span><span className="text-green-400">THE</span><span className="text-red-400">RIX</span> Technology
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/55 sm:text-[15px]">
              Building modern digital experiences and technology solutions that help businesses grow, connect and move forward.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@Bytherix_1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[#FF0000]/40 bg-white/[0.02] text-[#FF0000] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white focus-visible:border-[#FF0000] focus-visible:bg-[#FF0000] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#FF0000]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:bg-[#FF0000] active:text-white"
              >
                <FaYoutube className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61591150259850"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[#1877F2]/40 bg-white/[0.02] text-[#1877F2] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white focus-visible:border-[#1877F2] focus-visible:bg-[#1877F2] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:bg-[#1877F2] active:text-white"
              >
                <FaFacebookF className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="https://www.instagram.com/bytherix_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[#DD2A7B]/40 bg-white/[0.02] text-[#E1306C] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#DD2A7B] hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white focus-visible:border-[#DD2A7B] focus-visible:bg-[#DD2A7B] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#DD2A7B]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:text-white"
              >
                <FaInstagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="https://www.tiktok.com/@bytherix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[#25F4EE]/40 bg-white/[0.02] text-[#25F4EE] outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#25F4EE] hover:bg-[#25F4EE] hover:text-white focus-visible:border-[#25F4EE] focus-visible:bg-[#25F4EE] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#25F4EE]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:bg-[#25F4EE] active:text-white"
              >
                <FaTiktok className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="border-t border-white/10 pt-7 sm:border-t-0 sm:pt-0 lg:border-l lg:px-10 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
              Services
            </h3>

            <div className="mt-3 h-0.5 w-7 rounded-full bg-blue-500" />

            <ul className="mt-5 space-y-3.5 text-sm text-white/55 sm:text-[15px]">
              <li>
                <a href="#services" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Digital Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="border-t border-white/10 pt-7 sm:border-t-0 sm:pt-0 lg:border-l lg:px-10 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
              Information
            </h3>

            <div className="mt-3 h-0.5 w-7 rounded-full bg-blue-500" />

            <ul className="mt-5 space-y-3.5 text-sm text-white/55 sm:text-[15px]">
              <li>
                <a href="#about" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#services" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="border-t border-white/10 pt-7 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-1 lg:border-l lg:pl-10 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
              Legal
            </h3>

            <div className="mt-3 h-0.5 w-7 rounded-full bg-blue-500" />

            <ul className="mt-5 space-y-3.5 text-sm text-white/55 sm:text-[15px]">
              <li>
                <a href="/privacy-policy" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/sales-and-refunds" className="transition-all duration-300 hover:translate-x-1 hover:text-blue-400">
                  Sales and Refunds
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {year} Bytherix Technology. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="/privacy-policy" className="transition-colors duration-300 hover:text-white">
              Privacy Policy
            </a>

            <span className="h-4 w-px bg-white/15" />

            <a href="/terms-of-use" className="transition-colors duration-300 hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;