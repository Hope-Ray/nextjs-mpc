import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp  } from "react-icons/fa6";

// const inter = Inter({ subsets: ["latin"] });

const futura = localFont(
  {
    src: [{
      path: "../../public/fonts/futura medium bt.ttf",
      weight: "500",
    }],
    variable: "--font-futura"
  }
);

export const metadata = {
  title: "MPC",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${futura.variable}`}>
      <body className='relative'>
        <Navbar/>
        {children}
         <a href="https://wa.me/+918169400907" className="z-50 fixed min-h-[2.5rem] 
          rounded-full bottom-5 bg-green-600 right-5 text-white text-4xl md:text-5xl">
           <FaWhatsapp  className="m-2"/>
         </a>
        <Footer/>
      </body>
    </html>
  );
}
