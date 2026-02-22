// app/layout.tsx - Root layout
import type { Metadata } from "next";
import "./globals.css";  // Optional if you add Tailwind later

export const metadata: Metadata = {
  title: "SEO Blog Builder",
  description: "Generate SEO blogs, publish automatically, and create AI videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
