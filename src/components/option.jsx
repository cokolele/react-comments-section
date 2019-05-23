import React from "react";
import { Reply, Remove, Edit } from "./icons.jsx";

import "./option.css";

function Option({ reply, edit, remove, onClick }) {
   if (reply) {
      return (
         <button type="button" onClick={onClick} className="option">
            <Reply/>
            reply
         </button>
      )
   } else if (edit) {
      return (
         <button type="button" onClick={onClick} className="option">
            <Edit/>
            edit
         </button>
      )
   } else if (remove) {
      return (
         <button type="button" onClick={onClick} className="option">
            <Remove/>
            remove
         </button>
      )
   }
}

export default Option;