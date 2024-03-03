import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "sonner";

import { Initializer } from "@/components/Initializer";
import { Navbar } from "@/components/Navbar";
import { AuthenticatedProvider } from "@/contexts/AuthenticatedContext";
import { ReduxProvider } from "@/redux";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Pump",
  description: "We have what you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ReduxProvider>
          <AuthenticatedProvider>
            <Initializer>
              <Navbar />
              {children}

              <Toaster position="top-center" richColors />
            </Initializer>
          </AuthenticatedProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
