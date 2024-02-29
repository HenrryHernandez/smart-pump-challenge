import Image from "next/image";

import { PageWrapper } from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <PageWrapper className="center">
      <Card className="max-w-[400px] w-full shadow-md">
        <CardHeader className="center">
          <div className="w-3/5 flex flex-col gap-y-4 center">
            <Image src="/logo.png" alt="logo" width={896} height={762} />
          </div>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="grid gap-2 py-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="********" type="password" />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default LoginPage;
