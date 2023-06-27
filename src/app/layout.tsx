import "./globals.css";
import { Barlow_Condensed } from "next/font/google";
import type { Metadata } from "next";

//  heading should be - font-family: Formula Condensed;
const barlow = Barlow_Condensed({
  weight: ["400", "500"],
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B2 Tech Solutions",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={barlow.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
