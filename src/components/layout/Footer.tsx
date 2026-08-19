import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#071426] text-white">
      {/* Decorative Background */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full border border-blue-400/5" />
        <div className="absolute -right-12 top-6 h-24 w-24 rounded-full border border-blue-400/5" />
      </div>

      {/* Main Container - Same alignment as Hero */}

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20">
        {/* Main Footer */}

        <div className="grid gap-3 py-2 sm:gap-4 sm:py-3 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-0">
          {/* Brand */}

          <div className="min-w-0 lg:pr-6">
            <h2 className="font-['Inter'] text-lg font-bold leading-none text-white sm:text-xl">
              Bytherix Technology
            </h2>

            <p className="mt-1.5 max-w-sm text-[10px] leading-4 text-white/50 sm:text-[11px]">
              Building modern digital experiences and technology solutions that help businesses grow, connect and move forward.
            </p>

            {/* Social Links */}

            <div className="mt-2 flex items-center gap-1.5">
              {/* YouTube */}

              <a
                href="https://www.youtube.com/@Bytherix_1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="group flex h-7 w-7 items-center justify-center rounded-sm border border-[#FF0000]/40 bg-white/[0.02] text-[#FF0000] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white focus-visible:border-[#FF0000] focus-visible:bg-[#FF0000] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#FF0000]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:bg-[#FF0000] active:text-white"
              >
                <FaYoutube className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Facebook */}

              <a
                href="https://www.facebook.com/profile.php?id=61591150259850"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="group flex h-7 w-7 items-center justify-center rounded-sm border border-[#1877F2]/40 bg-white/[0.02] text-[#1877F2] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white focus-visible:border-[#1877F2] focus-visible:bg-[#1877F2] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#1877F2]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:bg-[#1877F2] active:text-white"
              >
                <FaFacebookF className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Instagram */}

              <a
                href="https://www.instagram.com/bytherix_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="group flex h-7 w-7 items-center justify-center rounded-sm border border-[#DD2A7B]/40 bg-white/[0.02] text-[#E1306C] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DD2A7B] hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white focus-visible:border-[#DD2A7B] focus-visible:bg-[#DD2A7B] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#DD2A7B]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:text-white"
              >
                <FaInstagram className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* TikTok */}

              <a
                href="https://www.tiktok.com/@bytherix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok"
                className="group flex h-7 w-7 items-center justify-center rounded-sm border border-[#25F4EE]/40 bg-white/[0.02] text-[#25F4EE] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25F4EE] hover:bg-[#25F4EE] hover:text-white focus-visible:border-[#25F4EE] focus-visible:bg-[#25F4EE] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#25F4EE]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426] active:bg-[#25F4EE] active:text-white"
              >
                <FaTiktok className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Services */}

          <div className="border-t border-white/10 pt-2.5 lg:border-l lg:border-t-0 lg:px-5 lg:pt-0">
            <h3 className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              Services
            </h3>

            <ul className="mt-1.5 space-y-0.5 text-[10px] text-white/50 sm:text-[11px]">
              <li>
                <a href="#services" className="transition-colors duration-300 hover:text-blue-400">
                  Web Development
                </a>
              </li>

              <li>
                <a href="#services" className="transition-colors duration-300 hover:text-blue-400">
                  UI/UX Design
                </a>
              </li>

              <li>
                <a href="#services" className="transition-colors duration-300 hover:text-blue-400">
                  Software Development
                </a>
              </li>

              <li>
                <a href="#services" className="transition-colors duration-300 hover:text-blue-400">
                  Digital Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}

          <div className="border-t border-white/10 pt-2.5 lg:border-l lg:border-t-0 lg:px-5 lg:pt-0">
            <h3 className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              Information
            </h3>

            <ul className="mt-1.5 space-y-0.5 text-[10px] text-white/50 sm:text-[11px]">
              <li>
                <a href="#about" className="transition-colors duration-300 hover:text-blue-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#team" className="transition-colors duration-300 hover:text-blue-400">
                  Our Team
                </a>
              </li>

              <li>
                <a href="#services" className="transition-colors duration-300 hover:text-blue-400">
                  Our Services
                </a>
              </li>

              <li>
                <a href="#contact" className="transition-colors duration-300 hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}

          <div className="border-t border-white/10 pt-2.5 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
            <h3 className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              Legal
            </h3>

            <ul className="mt-1.5 space-y-0.5 text-[10px] text-white/50 sm:text-[11px]">
              <li>
                <a href="/privacy-policy" className="transition-colors duration-300 hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms-of-use" className="transition-colors duration-300 hover:text-blue-400">
                  Terms of Use
                </a>
              </li>

              <li>
                <a href="/sales-and-refunds" className="transition-colors duration-300 hover:text-blue-400">
                  Sales and Refunds
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="flex flex-col gap-1 border-t border-white/10 py-1.5 text-[9px] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <p>
            © {year} Bytherix Technology. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href="/privacy-policy" className="transition-colors duration-300 hover:text-white">
              Privacy Policy
            </a>

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