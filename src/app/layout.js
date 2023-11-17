import { Allison, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const allison = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
});

export const metadata = {
  title: "Aouhadou",
  description: "Azedine Ouhadou Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${allison.variable} font-normal text-md`}
      >
        {children}
      </body>
    </html>
  );
}
