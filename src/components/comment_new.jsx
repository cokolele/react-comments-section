import React, { useState, useRef, useEffect } from "react";

import { createComment } from "/modules/comments.js";

import "./comment.css";
import Avatar from "/components/avatar.jsx";
import Option from "/components/option.jsx";
import TextArea from "/components/textarea.jsx";
import Button from "/components/button.jsx";

function Comment({ dispatch }) {
	const [text, setText] = useState("");

   const onAdd = () => {
   	if (text != "")
      	dispatch(createComment("kokhoot", text));
   }

   return (
      <div className="comment">
         <div className="comment__avatar">
            <Avatar iconType={1}/>
         </div>
         <div className="comment__stripe"></div>
         <div className="comment__content">
            <span className="comment__name">Username</span>
            <span className="comment__time">now</span>
            <TextArea value={text} onChange={setText} placeholder="Your comment..." minHeight="32"/>
            <Button primary text="Add" onClick={onAdd}/>
         </div>
      </div>
   )
}

export default Comment;