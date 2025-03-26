import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

const AllCategories = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-row items-center gap-2 bg-amber-700 text-white px-6 py-2 rounded-full cursor-pointer">
            <Menu />
            Kategoriler
            <FaCaretDown className="mt-2" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-60 text-slate-600 mt-3">
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger></DropdownMenuSubTrigger>
            </DropdownMenuSub>
          </DropdownMenuGroup>

          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AllCategories;
