import { ShoppingBag } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="border relative bg-red-100 rounded-full p-2">
      <ShoppingBag className="text-amber-600" />
      <div className="absolute text-xs bg-orange-600 rounded-full text-white py-1 px-2 -top-2 -right-2 ">
        0
      </div>
    </div>
  );
};

export default Card;
