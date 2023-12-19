"use client";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

function CookiePopUp() {
  return (
    <>
      <CookieConsent
        location="bottom"
        style={{ background: "#0d6efd", zIndex: "1", marginBottom: "50px" }}
        buttonStyle={{
          color: "#000",
          background: "#fff",
          fontSize: "14px",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
        expires={30}
      >
        {" "}
        This Site uses cookies. See our{" "}
        <Link href={"/privacy&policy"} className="text-black">
          {" "}
          privacy & policy{" "}
        </Link>
        for more
      </CookieConsent>
    </>
  );
}

export default CookiePopUp;
