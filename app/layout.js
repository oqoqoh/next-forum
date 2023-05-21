import "./globals.css";
import { Inter } from "next/font/google";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import Link from "next/link";
import { getServerSession } from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  
  return (
    <html>
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/" className="logo">
            Nextforum
          </Link>
          <Link href="/list">List</Link>
          {
            !session 
            ? <LoginBtn></LoginBtn> 
            : <LogoutBtn></LogoutBtn>
          }
        </div>
        {children}
      </body>
    </html>
  );
}
