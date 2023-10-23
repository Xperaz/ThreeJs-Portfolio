import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BlackStone = localFont({
  src: [
    {
      path: "../../public/fonts/blackstone-regular-webfont.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-BlackStone",
});

export const metadata = {
  title: "Aouhadou",
  description: "Azedine Ouhadou Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${BlackStone.variable} font-normal text-md`}
      >
        {children}
      </body>
    </html>
  );
}
