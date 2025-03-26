import React from "react";
import Image from "next/image";
import logo from "@/public/img/luthiers.com_Logo.png";
import { footerSection } from "@/constans/index";

const Footer = () => {
  return (
    <div className="bg-orange-700 px-8 py-12 text-white lg:px-64">
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-8 py-12">
          <div className="w-full md:w-1/4">
            <Image src={logo} width={162} alt="footerlogo" />
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              deserunt!
            </p>
          </div>
          {footerSection.map((section, index) => (
            <div key={index} className="w-full md:w-1/6">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-400 my-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>Orhan Aypars Celik - Made It</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
