import PageAnimation from "@/components/formerMotion/page";
import Link from "next/link";

export default function Home() {
  return (
    <PageAnimation>
      <h1>Kite Technical Institute </h1>
      <Link href="/dashboard/admin">Admin Dashboard </Link>
    </PageAnimation>
  );
}
