import React, { useEffect, useReducer, useContext, createContext } from "react";

import api from "/utils/api/api.js";
import commentsReducer from "/modules/comments.js";

import "./Comments.css";
/*
import Comment from "./comment.jsx";
import NewComment from "./comment-new.jsx";
import Divider from "./divider.jsx";
*/

function CommentsSection() {
   const [state, dispatch] = useReducer(commentsReducer, {});

   useEffect(() => {
      const data = api.get("/comments")
         .then(response => response.json())
         .then(data => {
         	console.log(data);
         });
   }, []);

   return (
      <div className="comments__wrapper">
      {
         /*
         <Divider text="Add your comment" />
         <NewComment/>
         <Divider text="Comments" />
         {
            state.comments.map(comment => (
               <Comment owner={comment.owner} name={comment.name} time={comment.timestamp} text={comment.text} iconType={comment.id} key={comment.id}/>
            ))
         }
         
         */
      }
      </div>
   )
}

export default CommentsSection;