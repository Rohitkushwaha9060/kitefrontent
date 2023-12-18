// components
import Header from "@/components/dashboard/Header";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
