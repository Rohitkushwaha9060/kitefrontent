"use client";
import { motion as m, AnimatePresence } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";

function PageAnimation({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  });
  return (
    <AnimatePresence mode="wait">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.75, ease: "easeOut" }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}

export default PageAnimation;
