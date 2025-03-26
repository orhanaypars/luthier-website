import Link from "next/link";
import React from "react";
import { navLinks } from "@/constans/index";

const MainMenu = () => {
  return (
    <div className="flex gap-8 lg:gap-12">
      {navLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="hover:underline underline-offset-10 decoration-orange-700 transition duration-500"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MainMenu;
