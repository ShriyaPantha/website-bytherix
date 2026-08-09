import { FaYoutube, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import logo from "../../assets/BYTHERIXlogo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* =========================================================
          LOGO STRIP
      ========================================================= */}
      <div className="bg-white py-8 sm:py-10">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Bytherix Technology"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </div>
      </div>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer
        className="
          relative
          isolate
          overflow-hidden
          bg-[#071426]
          text-white
        "
      >
        {/* Subtle background effect */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_20%,rgba(30,144,255,0.06),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(30,144,255,0.04),transparent_30%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            left-[-180px]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-blue-400/5
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =====================================================
              MAIN FOOTER
          ===================================================== */}
          <div
            className="
              grid
              gap-8
              py-10
              sm:py-12
              lg:grid-cols-[1.35fr_1fr_1fr_1fr]
              lg:gap-0
              lg:py-14
            "
          >
            {/* ===================================================
                BRAND
            =================================================== */}
            <div className="lg:pr-10">
              <a
                href="/"
                aria-label="Bytherix Technology home"
                className="
                  inline-flex
                  items-center
                  gap-3
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#071426]
                "
              >
                <img
                  src={logo}
                  alt="Bytherix Technology"
                  className="
                    h-10
                    w-auto
                    object-contain
                    sm:h-11
                  "
                />

                <div>
                  <p
                    className="
                      font-['Chakra_Petch']
                      text-xl
                      font-bold
                      leading-none
                      text-white
                    "
                  >
                    Bytherix
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      font-medium
                      tracking-[0.2em]
                      text-blue-200/50
                      uppercase
                    "
                  >
                    Technology
                  </p>
                </div>
              </a>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                Building modern digital experiences and
                technology solutions that help businesses
                grow, connect and move forward.
              </p>

              {/* Social Links */}
              <div className="mt-5 flex flex-wrap gap-3">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@Bytherix_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-white/65
                    outline-none
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#FF0000]
                    hover:bg-[#FF0000]
                    hover:text-white
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                  "
                >
                  <FaYoutube className="h-4 w-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61591150259850"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-white/65
                    outline-none
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#1877F2]
                    hover:bg-[#1877F2]
                    hover:text-white
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                  "
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/bytherix_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-white/65
                    outline-none
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#DD2A7B]
                    hover:bg-gradient-to-br
                    hover:from-[#F58529]
                    hover:via-[#DD2A7B]
                    hover:to-[#8134AF]
                    hover:text-white
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                  "
                >
                  <FaInstagram className="h-4 w-4" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@bytherix"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.02]
                    text-white/65
                    outline-none
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#25F4EE]
                    hover:bg-[#25F4EE]
                    hover:text-white
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                  "
                >
                  <FaTiktok className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* ===================================================
                SERVICES
            =================================================== */}
            <div
              className="
                border-t
                border-white/10
                pt-7
                lg:border-l
                lg:border-t-0
                lg:border-white/10
                lg:px-8
                lg:pt-0
              "
            >
              <h3
                className="
                  font-['Chakra_Petch']
                  text-sm
                  font-bold
                  tracking-wider
                  text-white
                  uppercase
                "
              >
                Services
              </h3>

              <ul
                className="
                  mt-5
                  space-y-2.5
                  text-sm
                  text-white/50
                "
              >
                <li>
                  <a
                    href="#services"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    UI/UX Design
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Software Development
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Digital Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* ===================================================
                INFORMATION
            =================================================== */}
            <div
              className="
                border-t
                border-white/10
                pt-7
                lg:border-l
                lg:border-t-0
                lg:border-white/10
                lg:px-8
                lg:pt-0
              "
            >
              <h3
                className="
                  font-['Chakra_Petch']
                  text-sm
                  font-bold
                  tracking-wider
                  text-white
                  uppercase
                "
              >
                Information
              </h3>

              <ul
                className="
                  mt-5
                  space-y-2.5
                  text-sm
                  text-white/50
                "
              >
                <li>
                  <a
                    href="#about"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#team"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Our Team
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Our Services
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* ===================================================
                LEGAL
            =================================================== */}
            <div
              className="
                border-t
                border-white/10
                pt-7
                lg:border-l
                lg:border-t-0
                lg:border-white/10
                lg:pl-8
                lg:pt-0
              "
            >
              <h3
                className="
                  font-['Chakra_Petch']
                  text-sm
                  font-bold
                  tracking-wider
                  text-white
                  uppercase
                "
              >
                Legal
              </h3>

              <ul
                className="
                  mt-5
                  space-y-2.5
                  text-sm
                  text-white/50
                "
              >
                <li>
                  <a
                    href="/privacy-policy"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/terms-of-use"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Terms of Use
                  </a>
                </li>

                <li>
                  <a
                    href="/sales-and-refunds"
                    className="transition-colors duration-300 hover:text-blue-400"
                  >
                    Sales and Refunds
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* =====================================================
              BOTTOM FOOTER
          ===================================================== */}
          <div
            className="
              flex
              flex-col
              gap-3
              border-t
              border-white/10
              py-4
              text-xs
              text-white/35
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              © {year} Bytherix Technology. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href="/privacy-policy"
                className="
                  transition-colors
                  duration-300
                  hover:text-white
                  focus:outline-none
                  focus-visible:text-blue-400
                "
              >
                Privacy Policy
              </a>

              <a
                href="/terms-of-use"
                className="
                  transition-colors
                  duration-300
                  hover:text-white
                  focus:outline-none
                  focus-visible:text-blue-400
                "
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;