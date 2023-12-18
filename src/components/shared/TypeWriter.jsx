"use client";
import { Typewriter } from "react-simple-typewriter";

function TypeWriterUtils({
  words,
  loop = true,
  typeSpeed = 50,
  deleteSpeed = 50,
  delay = 500,
}) {
  return (
    <>
      <Typewriter
        words={words}
        cursor
        loop={loop}
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delay}
      />
    </>
  );
}

export default TypeWriterUtils;
