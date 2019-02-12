import React, { useEffect, useReducer, useContext, createContext } from "react";

import api, { parseLinkHeader } from "/utils/api/api.js";
import commentsReducer, { loadInitialComments, loadMoreComments, createComment, updateComment, removeComment } from "/modules/comments.js";

import "./Comments.css";
import Divider from "/components/divider.jsx";
import Comment from "/components/comment.jsx";
/*
import NewComment from "./comment-new.jsx";
*/

function Comments() {
   const [state, dispatch] = useReducer(commentsReducer, { comments: []});

   useEffect(() => {
      const data = api.get("/comments?_limit=5&_page=1")
         .then(async (response) => {
            const comments = await response.json();
            const links = parseLinkHeader( response.headers.get("Link") );
            dispatch(loadInitialComments(comments, links));
         });
   }, []);

   return (
      <div className="comments">
         {
            /*
            <Divider text="Add your comment" />
            <NewComment/>
            */
         }
         <Divider text="Comments" />
         {
            state.comments.map(comment => (
               <Comment owner={comment.owner} name={comment.name} time={comment.timestamp} text={comment.text} id={comment.id} key={comment.id}/>
            ))
         }
      </div>
   )
}

export default Comments;