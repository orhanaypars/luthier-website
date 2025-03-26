import { Search, User } from "lucide-react";
import { FaTurkishLiraSign } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/luthiers.com_Logo.png";
import React from "react";
import MobileMenu from "@/app/(routes)/_components/Menu/MobileMenu";
import { Input } from "@/components/ui/input";
import AllCategories from "@/app/(routes)/_components/Menu/AllCategories";
import MainMenu from "@/app/(routes)/_components/Menu/MainMenu";
import Card from "./Card";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-6 lg:h-8 bg-orange-700 text-center items-center justify-center">
        <p className="text-white text-xs md:text-sm">
          İlk siparişe özel seçili ürünlerde sepette anında %30'a varan
          indirimler!
        </p>
      </div>
      <div className="border-b hidden lg:flex lg:px-32 xl:px-64">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center text-sm font-semibold text-amber-000 p-3">
            <div className="flex flex-row gap-6">
              <Link href="/">Hakkımızda</Link>
              <Link href="/">Hesabım</Link>
              <Link href="/">İstek listesi</Link>
            </div>
            <div className="hidden lg:flex text-center lg:mr-24">
              <p>%100 Güvenilirlik ve takip</p>
            </div>
            <div className="flex flex-row gap-2">
              <span>Yardım</span>
              <span className="font-bold"> +90 552 584 5941</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-4 lg:px-32 xl:px-64 justify-between items-center py-4 mx-2">
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
        <Image src={logo} width={158} height={50} alt={"logo"} />
        <div className="hidden lg:flex mx-4 relative">
          <Input
            className="bg-slate-100 lg: w-[450px] 2xl:w-[700px] py-4 outline-none "
            placeholder="Arama yapınız.."
          />
          <Search className="absolute text-slate-700 right-1 top-1" />
        </div>
        <div className="flex flex-row text-base items-center gap-3 lg:gap-6 font-semibold">
          <div className="border rounded-full p-2">
            <User />
          </div>
          <div className="hidden lg:flex lg:flex-row lg:relative lg:items-center justify-center">
            <div className="text-green-500">Bakiyeniz: 0</div>
            <div className="absolute -right-3 top-1">
              <FaTurkishLiraSign size={13} className="text-green-500" />
            </div>
          </div>
          <Card />
        </div>
      </div>
      <div className="hidden lg:flex py-4 border-b flex-row lg:px-32 xl:px-64 mx-2 items center justify-between">
        <AllCategories />
        <MainMenu />
      </div>
    </div>
  );
};

export default Header;
