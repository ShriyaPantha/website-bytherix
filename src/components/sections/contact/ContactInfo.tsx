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

type ContactIconType = "phone" | "location" | "email";

type SocialIconType =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok";

type ContactItem = {
  id: string;
  type: ContactIconType;
  value: string;
  secondaryValue?: string;
  href?: string;
};

type SocialItem = {
  id: string;
  icon: SocialIconType;
  label: string;
  href: string;
};

const contactInfo: ContactItem[] = [
  {
    id: "email",
    type: "email",
    value: "demonhunters402@gmail.com",
    href: "mailto:demonhunters402@gmail.com",
  },
  {
    id: "phone",
    type: "phone",
    value: "+977 9861165413",
    href: "tel:+9779861165413",
  },
  {
    id: "location",
    type: "location",
    value: "Kathmandu, Nepal",
  },
];

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

const getContactIcon = (type: ContactIconType) => {
  switch (type) {
    case "phone":
      return (
        <Phone
          size={27}
          strokeWidth={2}
          aria-hidden="true"
        />
      );

    case "location":
      return (
        <MapPin
          size={27}
          strokeWidth={2}
          aria-hidden="true"
        />
      );

    case "email":
      return (
        <Mail
          size={27}
          strokeWidth={2}
          aria-hidden="true"
        />
      );

    default:
      return null;
  }
};

const getSocialIcon = (icon: SocialIconType) => {
  switch (icon) {
    case "youtube":
      return (
        <FaYoutube
          size={19}
          aria-hidden="true"
          className="
            transition-colors
            duration-300
            group-hover:text-[#FF0000]
            group-focus-visible:text-[#FF0000]
          "
        />
      );

    case "facebook":
      return (
        <FaFacebookF
          size={19}
          aria-hidden="true"
          className="
            transition-colors
            duration-300
            group-hover:text-[#1877F2]
            group-focus-visible:text-[#1877F2]
          "
        />
      );

    case "instagram":
  return (
    <FaInstagram
      size={21}
      aria-hidden="true"
      className="transition-all duration-300 group-hover:text-[#E1306C]"
    />
  );

    case "tiktok":
  return (
    <FaTiktok
      size={20}
      aria-hidden="true"
      className="transition-all duration-300 group-hover:text-black"
    />
  );

    default:
      return null;
  }
};

const ContactInfo = () => {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label="Contact information"
      className="
        relative
        min-h-full
        overflow-hidden
        bg-blue-950
        px-7
        py-10
        text-white

        sm:px-10
        sm:py-12

        lg:px-8
        lg:py-14
        lg:pl-16

        lg:[clip-path:polygon(14%_0,100%_0,100%_100%,14%_100%,0_50%)]
      "
    >
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-center

          lg:min-h-[430px]
        "
      >
        {/* Contact Details */}
        <div
          className="
            mx-auto
            w-full
            max-w-[300px]
            space-y-7

            sm:max-w-[340px]
            sm:space-y-8

            lg:max-w-[310px]
            lg:space-y-8
          "
        >
          {contactInfo.map((item) => {
            const isEmail = item.type === "email";

            return (
              <a
                key={item.id}
                href={item.href || "#"}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  outline-none
                  transition-transform
                  duration-300
                  hover:translate-x-1
                  focus-visible:ring-2
                  focus-visible:ring-[var(--color-green)]
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[var(--color-navy)]
                "
              >
                {/* Icon */}
                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    text-[var(--color-green)]
                    transition-colors
                    duration-300
                    group-hover:text-white
                    group-focus-visible:text-white

                    sm:h-12
                    sm:w-12
                  "
                >
                  {getContactIcon(item.type)}
                </span>

                {/* Content */}
                <span
                  className="
                    min-w-0
                    flex-1
                    text-center
                  "
                >
                  {isEmail ? (
                    <span
                      className="
                        block
                        space-y-1
                        text-xs
                        leading-5

                        sm:text-[13px]
                      "
                    >
                      <span
                        className="
                          block
                          break-all
                          font-medium
                          text-[var(--color-green)]
                          transition-colors
                          duration-300
                          group-hover:text-white
                          group-focus-visible:text-white
                        "
                      >
                        {item.value}
                      </span>

                      {item.secondaryValue && (
                        <span
                          className="
                            block
                            break-all
                            text-white/85
                          "
                        >
                          {item.secondaryValue}
                        </span>
                      )}
                    </span>
                  ) : (
                    <span
                      className="
                        block
                        text-sm
                        font-medium
                        leading-6
                        text-[var(--color-green)]
                        transition-colors
                        duration-300
                        group-hover:text-white
                        group-focus-visible:text-white

                        sm:text-[15px]
                      "
                    >
                      {item.value}
                    </span>
                  )}
                </span>
              </a>
            );
          })}
        </div>

        {/* Social Links */}
        <div
          className="
            mt-10
            flex
            justify-center
            gap-4

            sm:mt-12
            sm:gap-5
          "
        >
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-md
                bg-white
                font-['Chakra_Petch']
                text-sm
                font-bold
                uppercase
                text-[var(--color-navy)]
                outline-none
                transition-all
                duration-300

                hover:-translate-y-1

                focus-visible:ring-2
                focus-visible:ring-[var(--color-green)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--color-navy)]

                sm:h-12
                sm:w-12
              "
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default ContactInfo;