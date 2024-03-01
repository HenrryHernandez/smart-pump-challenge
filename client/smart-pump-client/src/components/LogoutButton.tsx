"use client";

import { CiLogout } from "react-icons/ci";
import { toast } from "sonner";
import { useDispatch } from "react-redux";

import { useAuth } from "@/hooks";
import { AppDispatch, resetAuth } from "@/redux";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export const LogoutButton = () => {
  const { logout } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const signOut = () => {
    logout().then((data) => {
      if (data.error) {
        toast.success(data.error);
        return;
      }

      dispatch(resetAuth());
    });
  };

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
      <CiLogout className="h-4 w-4 mr-2" />
      Logout
    </DropdownMenuItem>
  );
};
