import Image from "next/image";
import React from "react";

function Com() {
  return (
    <>
      <section className="container my-5">
        <Image
          src="/com.jpg"
          width={500}
          height={500}
          alt="com image"
          className="img-fluid rounded"
          style={{ width: "100%", height: "100%" }}
        />
      </section>
    </>
  );
}

export default Com;
