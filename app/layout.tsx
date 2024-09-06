// Next.js
import type { Metadata } from "next";

// Styles
import "@/ui/globals.css";

// Fonts
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenWeather Interface",
  description: "Graphical UI for OpenWeather API",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}