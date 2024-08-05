

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp  } from "react-icons/fa6";
import { Sacramento } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] });

const sacramento = Sacramento(
  {
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-sacramento'
  }
)

const futura = localFont(
  {
    src: [{
      path: "../../public/fonts/futura medium bt.ttf",
      weight: "500",
    }],
    variable: "--font-futura"
  }
);

const futura_light = localFont(
  {
    src: [{
      path: "../../public/fonts/Futura_Book_font.ttf",
    }],
    variable: "--font-futura_light"
  }
);

 const metadata = {
  title: "MPC",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${futura.variable} ${futura_light.variable} ${sacramento.variable}`}>
     <head>
     {/* <title>{metadata.title}</title> */}
     {/* <meta name="description" content={metadata.description} /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16469387110"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16469387110');
            `,
          }}
        />
        

        <script id="conversion-event" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `gtag('event','conversion',{'send_to':'AW-16469387110/lrbtCOrchsMZEObOm609'});`
          }} />
       
      </head>  
      <body className='relative'>
        <Navbar/>
        {children}
         <a href="https://wa.me/+918169400907" rel="noopener noreferrer" target="_blank" className="z-50 fixed min-h-[2.5rem] 
          rounded-full bottom-5 bg-green-600 right-5 text-white text-4xl md:text-5xl">
           <FaWhatsapp  className="m-2"/>
         </a>
        <Footer/>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3PJF6D8"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </body>
    </html>
  );
}
