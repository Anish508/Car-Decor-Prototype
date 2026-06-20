import type { Metadata, Viewport } from "next";
import { Orbitron, Outfit } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Car Decor | Luxury Automotive Customization & Accessories",
  description: "Transform your vehicle into a bespoke masterpiece. Premium car audio, ambient lighting, custom seat covers, off-road builds, and elite detailing in Mangalore, India.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${outfit.variable} dark scroll-smooth h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-background text-foreground font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
