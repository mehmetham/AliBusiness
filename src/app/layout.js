import { Josefin_Sans, Open_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "./globals.css";

const josefin_Sans = Josefin_Sans({subsets:  ['latin']});
const open_Sans = Open_Sans({subsets:  ['latin']});

export const metadata = {
  title: "Ali's Business",
  description: "Ali's Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />    
        <main className="main__content_wrapper">
            {children}
        </main>
        <Footer />
        <button aria-label="scroll top btn" id="scroll__top"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 244l144-144 144 144M256 120v292"/></svg></button>
        <Script src="/assets/js/vendor/popper.js" />
        <Script src="/assets/js/vendor/bootstrap.min.js" />
        <Script src="/assets/js/plugins/swiper-bundle.min.js" />
        <Script src="/assets/js/plugins/glightbox.min.js" />
        <Script src="/assets/js/script.js" />
      </body>
    </html>
  );
}
