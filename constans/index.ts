type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Anasayfa" },
  { href: "/shop", label: "Alışveriş" },
  { href: "/category1", label: "Kategori 1" },
  { href: "/category2", label: "Kategori 2" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "İletişim" },
];

type FooterSection = {
  title: string;
  links: string[];
};

export const footerSection: FooterSection[] = [
  {
    title: " About Us",
    links: ["Who we are", "Our values", "Careers", "Press"],
  },
  {
    title: " Customers Service",
    links: ["Help center", "FAQs", "Returns", "Shopping info"],
  },
  {
    title: "Products",
    links: ["New arrivals", "Best sellers", "Gift cards", "Special offer"],
  },
];
