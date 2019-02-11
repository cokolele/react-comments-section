import React, { useState } from "react";

import "./button.css";

function Button() {
   const [input, setInput] = useState("");
   return (
      <div>
         <button className="button" value={input} onChange={e => setInput(e.target.value)}>Hmm</button>
      </div>
   );
}

export default Button