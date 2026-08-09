export interface ContactInfoItem {
  id: string;
  title: string;
  value: string;
  href?: string;
  type: "phone" | "location" | "email";
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "linkedin";
}

export const contactInfo: ContactInfoItem[] = [
  {
    id: "phone",
    title: "Call us",
    value: "+977 9800000000",
    href: "tel:+9779800000000",
    type: "phone",
  },
  {
    id: "location",
    title: "Visit us",
    value: "Kathmandu, Nepal",
    type: "location",
  },
  {
    id: "email",
    title: "Email us",
    value: "info@bytherix.com",
    href: "mailto:info@bytherix.com",
    type: "email",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
];