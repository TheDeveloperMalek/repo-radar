import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  name: "RepoRadar",
  shortname: "Radar",
  description:
    "Explore detailed GitHub user profiles, repositories, and activity dashboards with a clean and intuitive interface.",
  url: "",
  ogImage: "",
  keywords: [
    "GitHub Viewer",
    "developer portfolio",
    "GitHub repos",
    "GitHub profile",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistInter.variable} flex flex-col antialiased`}>
        <main className="flex-1">{children}</main>
        <Toaster richColors={true} position="top-center" closeButton={true} />
        <Footer />
      </body>
    </html>
  );
}
