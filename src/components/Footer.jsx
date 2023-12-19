import React from "react";

function Footer() {
  return (
    <>
      <footer className="fixed-bottom">
        <div className="bg-primary px-2 py-2 text-center text-white">
          © 2023 Copyright: KITE Technical Institute | Developed by{" "}
          <a
            href="https://github.com/RohitKushwaha9060"
            target="_blank"
            className="text-warning mx-2"
          >
            Rohit Kushwaha
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
