"use client";

import Link from "next/link";

import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { LogoutButton } from "./LogoutButton";

export const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {/* <AvatarImage src="http://placehold.it/32x32" /> */}
          <AvatarFallback className="bg-blue-100">
            <FaUser className="text-blue-500 p-[1px]" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/settings" className="w-full h-full flex items-center">
            <CiSettings className="h-4 w-4 mr-2" /> Settings
          </Link>
        </DropdownMenuItem>

        <Separator />

        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
