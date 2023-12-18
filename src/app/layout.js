import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import "aos/dist/aos.css";

//redux provider
import { ReduxProvider } from "@/redux/provider";
import CookiePopUp from "@/components/shared/CookiePopUp";
import Script from "next/script";

//font family
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// meta data
export const metadata = {
  title: {
    default: "Kite Institute",
    template: "%s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Script src="/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <ReduxProvider>
          <CookiePopUp />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
