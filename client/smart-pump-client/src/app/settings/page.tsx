"use client";

import { useState } from "react";

import { FaUser } from "react-icons/fa";

import { PageWrapper } from "@/components/PageWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux";
import { EditForm } from "./_components/EditForm";

const SettingsPage = () => {
  const { user } = useAppSelector((state) => state.authReducer);

  const [edit, setEdit] = useState(false);

  return (
    <PageWrapper className="items-center">
      <Card className="max-w-[600px] w-full shadow-md">
        <CardHeader className="center gap-y-4">
          <p className="text-2xl font-semibold text-center">⚙️ Settings</p>

          <Avatar className="max-w-[100px] max-h-[100px] w-full h-[100px]">
            <AvatarImage src={user?.picture} className="object-cover" />
            <AvatarFallback className="bg-blue-100">
              <FaUser className="text-blue-500 w-2/5 h-2/5" />
            </AvatarFallback>
          </Avatar>
        </CardHeader>

        <CardContent>
          <div className={cn("flex center gap-x-8", { "mb-8": edit })}>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Balance</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <p>
                  Your balance is:{" "}
                  <span className="font-bold">{user?.balance}</span>
                </p>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              className="w-24"
              onClick={() => setEdit((prev) => !prev)}
            >
              Edit
            </Button>
          </div>

          <EditForm edit={edit} />
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default SettingsPage;
