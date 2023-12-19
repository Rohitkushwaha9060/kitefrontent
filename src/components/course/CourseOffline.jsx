import Image from "next/image";
import React from "react";
import { FaStopwatch } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import Link from "next/link";

function CourseOffline() {
  return (
    <>
      <section className="container my-5">
        <h1 className="text-center fw-bold my-3">Offers Courses</h1>

        <div className="row shadow-lg rounded my-5 " data-aos="zoom-out-up">
          <div className="col-lg-4 col-md-4 p-2">
            <Image
              src="/1.jpg"
              alt="course image"
              className="img-fluid rounded"
              width={400}
              height={500}
            />
          </div>
          <div className="col-lg-6 col-md-4 p-2">
            <h2 className="text-center fw-bold">Certification in Python </h2>
            <article className="my-2 my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              voluptatem consequuntur optio asperiores. Ipsa nostrum veritatis
              iusto id totam cumque commodi adipisci dolor suscipit consequatur.
              Illo, libero consequatur! Fuga quo veniam itaque consequuntur
              facere mollitia voluptatibus, quia, exercitationem, optio repellat
              similique praesentium tempore laboriosam tempora? Placeat corporis
              esse dolor libero.
            </article>
            <div className="row mx-2">
              <div className="col-4 text-center">
                <h5 className="text-center fw-bold fs-3">
                  <FaStopwatch /> <span className="mx-2 fs-5">12 months</span>
                </h5>
              </div>
              <div className="col-3 text-center">
                <h5 className="text-center fw-bold fs-3">
                  <FaRupeeSign />
                  <span className="mx-2 fs-5">8500</span>
                </h5>
              </div>
              <div className="col-4 text-center">
                <h5 className="text-center fw-bold fs-3">
                  <TbCertificate />
                  <span className="mx-2 fs-5">Certificate</span>
                </h5>
              </div>
              <Link
                href="/courses/10?mode=offline"
                className="btn btn-primary m-auto col-3"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseOffline;
