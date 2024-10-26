import "../styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <html lang="en" dir="ltr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
