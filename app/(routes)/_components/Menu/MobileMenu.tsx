import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constans/index";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/luthiers.com_Logo.png";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image src={logo} width={158} height={50} alt={"logo"} />
          </SheetTitle>
          <SheetDescription className="flex flex-col justify-start items-start gap-6 text-md font-semibold text-amber-700 mt-5 mx-3">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="hover:underline underline-offset-10 decoration-orange-700 transition duration-500"
              >
                {link.label}
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
