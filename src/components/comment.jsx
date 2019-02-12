import React, { useState } from "react";

import "./comment.css";
import Avatar from "./avatar.jsx";

function Comment({ id, name, timestamp, text }) {
   const [editing, toggleEditing] = useState(false);

   return (
      <div className="comment">
         <Avatar iconType={id}/>
         <div className="comment__stripe"></div>
         <div style={{width: "100%"}}>
            <span>
                  <span className="comment__name">{name}</span>
                  <span className="comment__time">{timestamp}</span>
            </span>
            <div style={{width: "100%"}}>
                  <div className="comment__text">{text}</div>
            </div>
         </div>
      </div>
   )
}

export default Comment;