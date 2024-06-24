import { Inter } from "next/font/google";
import "./globals.css";
import { SideProvider } from "./context/sideContext";
import AuthChecker from "./components/AuthChecker";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BH Equipement",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><AuthChecker><SideProvider>{children}</SideProvider></AuthChecker></body>
    </html>
  );
}
