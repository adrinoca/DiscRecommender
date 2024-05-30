import { Inter } from "next/font/google";
import "./ui/globals.css";
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
