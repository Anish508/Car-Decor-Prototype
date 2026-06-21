import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Oswald, Manrope } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Car Decor | Luxury Automotive Customization & Garage",
  description: "Mangalore's iconic custom workshop. Premium car audio engineering, ambient lighting upgrades, bespoke leather seats, performance styling, and elite transformations.",
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
      className={`${bebasNeue.variable} ${oswald.variable} ${manrope.variable} dark scroll-smooth h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-background text-foreground font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
