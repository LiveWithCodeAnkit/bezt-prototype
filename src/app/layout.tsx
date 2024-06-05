import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { CssBaseline, Container } from "@mui/material";
import { Baloo_2 as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./style.css";
import "react-phone-input-2/lib/style.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Assessment Prototype",
  description: "Student Assessment Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <CssBaseline />
        <Container maxWidth="sm" sx={{ my: 2 }}>
          {children}
          <Toaster />
        </Container>
      </body>
    </html>
  );
}
