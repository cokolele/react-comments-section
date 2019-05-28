import React, { useState, useRef, useEffect } from "react";

import api from "/utils/api/api.js";
import { updateComment, removeComment } from "/modules/comments.js";

import "./comment.css";
import Avatar from "/components/avatar.jsx";
import Option from "/components/option.jsx";
import TextArea from "/components/textarea.jsx";
import Button from "/components/button.jsx";

function Comment({ dispatch, id, owner, name, timestamp, text }) {
   const [editing, setEditing] = useState(false);
   const [editText, setEditText] = useState(text);

   const onReply = () => {
      //todo
   }

   const onEdit = () => {
      setEditing(true);
   }

   const onRemove = async () => {
      const response = await api.delete("/comments/" + id);

      if (response.status === 200) {
         dispatch(removeComment(id));
         setEditing(false);
      }
   }

   const onCancel = () => {
      setEditing(false);
      setEditText(text);
   }

   const onSave = async () => {
      const response = await api.patch("/comments/" + id, {
         text: editText
      });

      if (response.status === 200) {
         dispatch(updateComment(id, editText));
         setEditing(false);
      }
   }

   return (
      <div className="comment">
         <div className="comment__avatar">
            <Avatar iconType={id % 7}/>
         </div>
         <div className="comment__stripe"></div>
         <div className="comment__content">
            <span className="comment__name">{name}</span>
            <span className="comment__time">{timestamp}</span>
            <span>
               <Option reply onClick={onReply}/>
               {
                  owner &&
                  <span>
                     <Option edit onClick={onEdit}/>
                     <Option remove onClick={onRemove}/>
                  </span>
               }
            </span>
            {
               editing ?
               <TextArea value={editText} onChange={setEditText}/>
               :
               <div className="comment__text">{text}</div>
            }
            {
               editing &&
               <div>
                  <Button text="Cancel" onClick={onCancel}/>
                  <Button primary text="Save" onClick={onSave}/>
               </div>
            }
         </div>
      </div>
   )
}

export default Comment;