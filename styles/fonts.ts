import { Geist, Playfair_Display } from "next/font/google";

export const geistSans = Geist({ subsets: ["latin"] });

export const luxeSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-luxe-serif",
  style: ["normal", "italic"]
});
