"use client";
import { motion as m } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TypeWriterUtils = dynamic(() => import("@/components/shared/TypeWriter"));

function Hero() {
  const [logedIn, setLogedIn] = useState(false);
  const authState = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (authState) {
      setLogedIn(authState.isAuthenticated);
    }
  }, []);

  return (
    <>
      <div className="row my-5">
        <m.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            delay: 0.5,
            duration: 0.75,
            ease: "easeInOut",
          }}
          className="col-lg-6 mt-3"
        >
          <h3 className="my-2 fs-2">Kite Technical Institute</h3>
          <p className="text-justify my-2 text-secondary">
            <TypeWriterUtils
              words={["The best software available"]}
              delay={1000 * 60 * 2}
            />
          </p>
          <div className="mt-5">
            {logedIn === true ? (
              <Link href={"/dashboard"} className="btn btn-sm btn-warning mx-3">
                Dashboard
              </Link>
            ) : (
              <Link href="/auth/signup" className="btn btn-sm btn-warning mx-3">
                Sign Up Now
              </Link>
            )}

            <Link
              href="/course/courses"
              className="btn btn-sm btn-warning mx-3"
            >
              Explore Now
            </Link>
          </div>
        </m.div>
        <m.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            delay: 0.75,
            duration: 0.75,
            ease: "easeInOut",
          }}
          className="col-lg-6"
        >
          <Image
            src="/hero2.png"
            alt="alt"
            className="img-fluid"
            width={500}
            height={500}
            priority
          />
        </m.div>
      </div>
    </>
  );
}

export default Hero;
