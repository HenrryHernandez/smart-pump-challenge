"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { LuLoader2 } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { toast } from "sonner";

import { PageWrapper } from "@/components/PageWrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { modifyUserInformation, useAppSelector } from "@/redux";
import { useUser } from "@/hooks/useUser";
import { z } from "zod";
import { UpdateUserInformationSchema } from "@/schemas";

const SettingsPage = () => {
  const { user } = useAppSelector((state) => state.authReducer);
  const { isLoading, updateUserInformation } = useUser();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof UpdateUserInformationSchema>>({
    resolver: zodResolver(UpdateUserInformationSchema),
  });

  const onSubmit = (formData: z.infer<typeof UpdateUserInformationSchema>) => {
    updateUserInformation(formData).then((data) => {
      if (data.success) {
        delete formData.password;
        dispatch(modifyUserInformation(formData));

        toast.success(data.success);
      }

      if (data.error) {
        toast.error(data.error);
      }
    });
  };

  useEffect(() => {
    if (!!user) {
      setValue("picture", user.picture);
      setValue("age", user.age);
      setValue("eyeColor", user.eyeColor);
      setValue("name.first", user.name.first);
      setValue("name.last", user.name.last);
      setValue("company", user.company);
      setValue("address", user.address);
      setValue("email", user.email);
      setValue("phone", user.phone);
      setValue("address", user.address);
    }
  }, [user]);

  return (
    <PageWrapper className="center">
      <Card className="max-w-[600px] w-full shadow-md">
        <CardHeader className="center gap-y-4">
          <p className="text-2xl font-semibold text-center">⚙️ Settings</p>

          <Avatar className="max-w-[100px] max-h-[100px] w-full h-[100px]">
            {/* <AvatarImage src="http://placehold.it/32x32" /> */}
            <AvatarFallback className="bg-blue-100">
              <FaUser className="text-blue-500 w-2/5 h-2/5" />
            </AvatarFallback>
          </Avatar>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="grid gap-2 py-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" disabled {...register("email")} />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Ej. 30"
                  {...register("age")}
                />

                {errors.age && (
                  <p className="text-destructive text-sm">
                    {errors.age.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="eye-color">Eye Color</Label>
                <Input
                  id="eye-color"
                  placeholder="Ej. blue"
                  {...register("eyeColor")}
                />

                {errors.eyeColor && (
                  <p className="text-destructive text-sm">
                    {errors.eyeColor.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="Ej. Ed"
                  {...register("name.first")}
                />

                {errors.name?.first && (
                  <p className="text-destructive text-sm">
                    {errors.name.first.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Ej. Dewitt"
                  {...register("name.last")}
                />

                {errors.name?.last && (
                  <p className="text-destructive text-sm">
                    {errors.name.last.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Ej. Zero Copy Labs"
                  {...register("company")}
                />

                {errors.company && (
                  <p className="text-destructive text-sm">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  {...register("password")}
                />

                {errors.password && (
                  <p className="text-destructive text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                  {...register("confirmPassword")}
                />

                {errors.confirmPassword && (
                  <p className="text-destructive text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="Ej. +1 123 123 4567"
                  {...register("phone")}
                />

                {errors.phone && (
                  <p className="text-destructive text-sm">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Ej. Riley Ct Boise, Idaho(ID), 83709"
                  {...register("address")}
                />

                {errors.address && (
                  <p className="text-destructive text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <LuLoader2 className="animate-spin text-xl" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default SettingsPage;
