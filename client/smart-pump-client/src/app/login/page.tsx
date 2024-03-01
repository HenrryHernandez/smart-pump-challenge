"use client";

import Image from "next/image";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LuLoader2 } from "react-icons/lu";
import { toast } from "sonner";

import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks";
import { LoginData } from "@/interfaces";
import { AppDispatch, setAuth } from "@/redux";

const LoginPage = () => {
  const { isLoading, login } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = (formData: LoginData) => {
    login(formData).then((data) => {
      if (data.success) {
        toast.success(data.success);

        dispatch(setAuth({ isAuthorized: true, user: data.user }));
      }

      if (data.error) {
        toast.error(data.error);
      }
    });
  };

  return (
    <PageWrapper className="center">
      <Card className="max-w-[400px] w-full shadow-md">
        <CardHeader className="center">
          <div className="w-3/5 flex flex-col gap-y-4 center">
            <Image src="/logo.png" alt="logo" width={896} height={762} />
          </div>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <div className="grid gap-2 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email", { required: "Email required" })}
                />

                {errors.email && (
                  <p className="text-destructive text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="********"
                  type="password"
                  {...register("password", { required: "Password required" })}
                />

                {errors.password && (
                  <p className="text-destructive text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <LuLoader2 className="animate-spin text-xl" />
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default LoginPage;
