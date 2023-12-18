"use client";
import React, { useRef } from "react";
import JoditEditor from "jodit-react";

function Editor({ value, onChange }) {
  const editor = useRef(null);

  return (
    <>
      <JoditEditor ref={editor} value={value} onChange={onChange} />
    </>
  );
}

export default Editor;
