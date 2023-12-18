//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
