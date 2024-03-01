import { FaUser } from "react-icons/fa";

import { PageWrapper } from "@/components/PageWrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
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
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2 py-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" disabled />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" placeholder="Ej. 30" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="eye-color">Eye Color</Label>
                <Input id="eye-color" placeholder="Ej. blue" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Ej. Ed" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Ej. Dewitt" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Ej. Dewitt" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="********" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input id="confirm-password" placeholder="********" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Ej. +1 123 123 4567" />
              </div>

              <div className="grid gap-2 py-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Ej. Riley Ct Boise, Idaho(ID), 83709"
                />
              </div>
            </div>

            <Button type="submit">Save</Button>
          </form>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export default SettingsPage;
