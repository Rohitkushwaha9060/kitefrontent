import Image from "next/image";
import React from "react";

function Com() {
  return (
    <>
      <section className="container my-5">
        <div className="row">
          <div className="col-12 m-auto rounded">
            <Image
              src="/com.jpg"
              alt="course image"
              width={500}
              height={300}
              style={{ width: "100%", height: "300px" }}
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Com;
