import React, { useEffect, useReducer, useContext, createContext } from "react";

import api, { parseLinkHeader } from "/utils/api/api.js";
import commentsReducer, { loadInitialComments, loadMoreComments } from "/modules/comments.js";

import "./Comments.css";
import Divider from "/components/divider.jsx";
import Comment from "/components/comment.jsx";
import NewComment from "/components/comment-new.jsx";


function Comments() {
   const [state, dispatch] = useReducer(commentsReducer, { comments: [] });

   useEffect(() => {
      async function fetchComments() {
         const response = await api.get("/comments?_limit=7&_page=1&_sort=id&_order=desc");
         const comments = await response.json();

         const linkHeader = response.headers.get("Link");
         if (linkHeader)
            dispatch(loadInitialComments(comments, parseLinkHeader(linkHeader)));
         else
            dispatch(loadInitialComments(comments, null));
      }  

      fetchComments();
   }, []);

   return (
      <div className="comments">
         <Divider text="Add your comment" />
         <NewComment dispatch={dispatch}/>
         <Divider text="Comments" />
         {
            state.comments.map(comment => (
               <Comment dispatch={dispatch} owner={comment.owner} name={comment.name} timestamp={comment.timestamp} text={comment.text} id={comment.id} key={comment.id}/>
            ))
         }
      </div>
   )
}

export default Comments;