import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JRS Music Lessons | Private Music Lessons in Iowa",
  description: "Private guitar, vocal, drum, piano and bass lessons in Iowa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
