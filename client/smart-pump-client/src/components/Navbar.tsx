"use client";

import Image from "next/image";
import Link from "next/link";

import { CiLogin, CiSettings } from "react-icons/ci";
import { RiMenuLine } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { LogoutButton } from "./LogoutButton";
import { UserButton } from "./UserButton";
import { LoggedInValidatorWrapper } from "./LoggedInValidatorWrapper";

const NavItemsDesktop = () => {
  return (
    <div className="hidden sm:flex gap-4 text-lg text-white font-medium">
      <ul className="flex gap-4">
        <LoggedInValidatorWrapper forLoggedIn={false}>
          <li className="flex center">
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </li>
        </LoggedInValidatorWrapper>

        <LoggedInValidatorWrapper>
          <li className="flex center">
            <UserButton />
          </li>
        </LoggedInValidatorWrapper>
      </ul>
    </div>
  );
};

const NavItemsMobile = () => {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded-sm text-xl bg-theme-400">
          <RiMenuLine className="text-white" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-44" align="end">
          <LoggedInValidatorWrapper>
            <DropdownMenuItem className="cursor-pointer p-2">
              <Link
                href="/settings"
                className="w-full h-full flex items-center"
              >
                <CiSettings className="h-4 w-4 mr-2" /> Settings
              </Link>
            </DropdownMenuItem>

            <Separator />

            <LogoutButton />
          </LoggedInValidatorWrapper>

          <LoggedInValidatorWrapper forLoggedIn={false}>
            <DropdownMenuItem className="cursor-pointer">
              <Link href="/login" className="w-full h-full flex">
                <CiLogin className="h-4 w-4 mr-2" /> Login
              </Link>
            </DropdownMenuItem>
          </LoggedInValidatorWrapper>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-between items-center sticky top-0 p-4 px-8 shadow-lg z-20 bg-blue-500">
      <Link href="/" className="w-16 h-full">
        <Image
          src="/logo.png"
          alt="logo"
          width={896}
          height={762}
          className="w-full h-full object-contain"
        />
      </Link>

      <NavItemsDesktop />

      <NavItemsMobile />
    </nav>
  );
};
