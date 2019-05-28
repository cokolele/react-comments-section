import React, { useRef, useEffect, useLayoutEffect } from "react";

import "./textarea.css";

function TextArea({value, onChange, placeholder, minHeight}) {
   const ref = useRef(null);

   useEffect(() => {
      if (minHeight === undefined)
         minHeight = "0px";
      ref.current.style.minHeight = minHeight + "px";
   }, []);

   useLayoutEffect(() => {
      ref.current.style.height = "1px";
      ref.current.style.height = ref.current.scrollHeight + "px";
      ref.current.focus();
      ref.current.setSelectionRange(ref.current.value.length, ref.current.value.length);
   }, [window.innerWidth, value]);

   return (
      <textarea
         ref={ref}
         value={value}
         onChange={(e) => { onChange(e.target.value) }}
         className="comment__text textarea"
         placeholder={placeholder}
         spellCheck="false"
      />
   )
}

export default TextArea;