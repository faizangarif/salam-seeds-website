export const site = {
  name: "Salam Seeds",
  tagline: "Joyful Islamic learning, delivered each Hijri month.",
  description:
    "Monthly Hijri-themed Islamic educational subscription boxes for kids, paired with a digital companion platform and an Islamic eCommerce store.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  social: {
    instagram: "#",
    tiktok: "#",
    youtube: "#",
  },
};

export const navigation = [
  { href: "/boxes", label: "Boxes" },
  { href: "/digital", label: "Digital" },
  { href: "/store", label: "Store" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
