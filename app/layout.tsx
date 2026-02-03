import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DashboardShell } from "../components/DashboardShell";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Property Management Dashboard",
  description: "Premium 2026-ready property management dashboard experience"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
