"use client";

import { CiLogout } from "react-icons/ci";

import { DropdownMenuItem } from "./ui/dropdown-menu";

export const LogoutButton = () => {
  return (
    <DropdownMenuItem className="cursor-pointer">
      <CiLogout className="h-4 w-4 mr-2" />
      Logout
    </DropdownMenuItem>
  );
};
