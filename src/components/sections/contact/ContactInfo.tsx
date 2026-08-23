import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

import { motion } from "framer-motion";

/* =========================================================
   TYPES
========================================================= */

type ContactIconType = "phone" | "location" | "email";

type SocialIconType =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok";

type ContactItem = {
  id: string;
  type: ContactIconType;
  label: string;
  value: string;
  href?: string;
};

type SocialItem = {
  id: string;
  icon: SocialIconType;
  label: string;
  href: string;
};

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactInfo: ContactItem[] = [
  {
    id: "email",
    type: "email",
    label: "Email Us",
    value: "bytherix1@gmail.com",
    href: "mailto:bytherix1@gmail.com",
  },
  {
    id: "phone",
    type: "phone",
    label: "Call Us",
    value: "+977 9861165413",
    href: "tel:+9779861165413",
  },
  {
    id: "location",
    type: "location",
    label: "Visit Us",
    value: "Kathmandu, Nepal",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks: SocialItem[] = [
  {
    id: "youtube",
    icon: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@Bytherix_1",
  },
  {
    id: "facebook",
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591150259850",
  },
  {
    id: "instagram",
    icon: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/bytherix_/",
  },
  {
    id: "tiktok",
    icon: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@bytherix",
  },
];

/* =========================================================
   CONTACT ICON
========================================================= */

const getContactIcon = (type: ContactIconType) => {
  switch (type) {
    case "email":
      return <Mail size={25} strokeWidth={2} aria-hidden="true" />;

    case "phone":
      return <Phone size={25} strokeWidth={2} aria-hidden="true" />;

    case "location":
      return <MapPin size={25} strokeWidth={2} aria-hidden="true" />;

    default:
      return null;
  }
};

/* =========================================================
   SOCIAL ICON
========================================================= */

const getSocialIcon = (icon: SocialIconType) => {
  switch (icon) {
    case "youtube":
      return <FaYoutube size={15} aria-hidden="true" className="text-[#FF0000] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110" />;

    case "facebook":
      return <FaFacebookF size={15} aria-hidden="true" className="text-[#1877F2] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110" />;

    case "instagram":
      return <FaInstagram size={16} aria-hidden="true" className="text-[#E1306C] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110" />;

    case "tiktok":
      return <FaTiktok size={16} aria-hidden="true" className="text-[#00F2EA] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110" />;

    default:
      return null;
  }
};

/* =========================================================
   SOCIAL BORDER COLOR
========================================================= */

const getSocialBorderColor = (id: string) => {
  switch (id) {
    case "youtube":
      return "#FF0000";

    case "facebook":
      return "#1877F2";

    case "instagram":
      return "#E1306C";

    case "tiktok":
      return "#00F2EA";

    default:
      return "rgba(255,255,255,0.2)";
  }
};

/* =========================================================
   CONTACT INFO COMPONENT
========================================================= */

const ContactInfo = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Contact information"
      className="relative isolate overflow-hidden bg-blue-950 px-6 py-10 font-['Inter'] text-white sm:px-8 sm:py-10 lg:px-8 lg:py-12 lg:pl-16 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,12%_100%,0_50%)]"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-44 w-[90%] -translate-x-1/2 opacity-20 [background-image:radial-gradient(circle,rgba(45,212,191,0.7)_1px,transparent_1px)] [background-size:10px_10px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[400px] flex-col justify-center">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-7">
          <h2 className="font-['Inter'] text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            Let's Connect
          </h2>

          <p className="mt-3 max-w-[340px] font-['Inter'] text-sm font-normal leading-6 text-white/70 sm:text-[15px]">
            We're here to help and answer any question you might have.
          </p>
        </div>

        {/* ===================================================
            CONTACT DETAILS
        =================================================== */}

        <div className="w-full">
          {contactInfo.map((item, index) => {
            const isLast = index === contactInfo.length - 1;

            const contactContent = (
              <div className={`group flex items-center gap-5 py-4 transition-all duration-300 ${!isLast ? "border-b border-white/10" : ""}`}>
                {/* Icon */}

                <span aria-hidden="true" className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[var(--color-green)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:border-[var(--color-green)]/40 group-hover:bg-[var(--color-green)]/10 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.12)]">
                  {getContactIcon(item.type)}
                </span>

                {/* Text */}

                <span className="min-w-0 flex-1">
                  <span className="block font-['Inter'] text-base font-semibold leading-5 text-white">
                    {item.label}
                  </span>

                  <span className="mt-1.5 block break-all font-['Inter'] text-sm font-medium leading-5 text-[var(--color-green)] transition-colors duration-300 group-hover:text-white">
                    {item.value}
                  </span>
                </span>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
                >
                  {contactContent}
                </a>
              );
            }

            return (
              <div key={item.id}>
                {contactContent}
              </div>
            );
          })}
        </div>

        {/* ===================================================
            FOLLOW US
        =================================================== */}

        <div className="mt-7">
          <h3 className="font-['Inter'] text-xl font-bold leading-6 text-white">
            Follow Us
          </h3>

          <p className="mt-2 font-['Inter'] text-sm leading-5 text-white/65">
            Stay connected with us on social media.
          </p>

          {/* =================================================
              SOCIAL BUTTONS
          ================================================= */}

          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                style={{ borderColor: getSocialBorderColor(social.id) }}
                className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-transparent outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.03] hover:shadow-[0_0_12px_rgba(255,255,255,0.08)] focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 active:scale-95"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* ===================================================
            BRAND TEXT
        =================================================== */}

        <div className="mt-8 hidden font-['Inter'] text-[10px] font-medium uppercase tracking-[0.25em] text-white/20 sm:block">
          Bytherix Technology
        </div>
      </div>
    </motion.aside>
  );
};

export default ContactInfo;