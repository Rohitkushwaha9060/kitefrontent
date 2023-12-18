"use client";
import React from "react";
import { motion as m } from "framer-motion";
function HomeAbout() {
  return (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{
        delay: 0.5,
        duration: 0.75,
        ease: "easeInOut",
      }}
    >
      <section data-aos="zoom-in">
        <div className="fs-4 text-center my-3   ">
          HelpLine
          <a href="tel:+" className="text-decoration-none text-center mx-2">
            +91 9060445234
          </a>
        </div>

        <article className="text-justify">
          KITE- KAMESHWAR INSTITUTE OF TECHNICAL EDUCATION, a leading ISO
          9001-2008, certified educational Institute with International
          accreditation from JAS-ANZ (Join accreditation system- Australia and
          New Zeeland), registered with NCT, Delhi Govt. is a place to pursue
          knowledge beyond boundaries. KITE has the distinction of training and
          placing 100% candidates. KITE has corporate tie-up with reputed
          companies, corporate houses, industry leaders in India and abroad
          .KITE offers professional tailor made courses to students who wants to
          make a place in the field of Financial Accounts, Computer Programing,
          Web designing, Hardware, Auto-Cad, Animation and office.KITE has
          garnered one of the top ten diploma Institute in Katihar in just few
          years by being faithful towards its aim to life ennobling education.
          The main aim of the institute is to promote academic excellence by
          offering undergraduate, postgraduate, diploma programs.|
        </article>
      </section>
    </m.div>
  );
}

export default HomeAbout;
