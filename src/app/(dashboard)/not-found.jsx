import Link from "next/link";

function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Return Home</Link>
    </>
  );
}

export default NotFound;
