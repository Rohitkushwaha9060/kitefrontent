"use client";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";

function HomeNotice() {
  return (
    <>
      <m.section
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          delay: 0.7,
          duration: 0.75,
          ease: "easeInOut",
        }}
        className="container my-5 shadow py-3 rounded"
        data-aos="zoom-out-up"
      >
        <h1 className="my-3 fs-2 fw-bold text-center">News And Events</h1>
        <m.div
          className="p-2"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            delay: 0.3,
            duration: 0.75,
            ease: "easeInOut",
          }}
        >
          <Marquee pauseOnHover={true} pauseOnClick={true}>
            <Link className="text-decoration-none fw-bold fs-5" href="/5">
              Link
            </Link>
          </Marquee>
        </m.div>
      </m.section>

      <m.section
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          delay: 0.7,
          duration: 0.75,
          ease: "easeInOut",
        }}
        className="container my-5 shadow py-3 rounded"
        data-aos="zoom-out-up"
      >
        <h1 className="my-3 fs-2 fw-bold text-center">Notices & Circulars</h1>
        <m.div
          className="p-2"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            delay: 0.3,
            duration: 0.75,
            ease: "easeInOut",
          }}
        >
          <Marquee pauseOnHover={true} pauseOnClick={true}>
            <Link className="text-decoration-none fw-bold fs-5" href="#">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              et!
            </Link>
          </Marquee>
        </m.div>
      </m.section>
    </>
  );
}

export default HomeNotice;
