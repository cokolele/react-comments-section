import React, { useEffect, useReducer, useContext, createContext } from "react";

import api, { parseLinkHeader } from "/utils/api/api.js";
import commentsReducer, { loadInitialComments, loadMoreComments, createComment, updateComment, removeComment } from "/modules/comments.js";

import "./Comments.css";
/*
import Comment from "./comment.jsx";
import NewComment from "./comment-new.jsx";
import Divider from "./divider.jsx";
*/

function CommentsSection() {
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
      <div className="comments__wrapper">
      {
         state.comments.map(comment => (
            <div key={comment.id}>{`${comment.owner} ${comment.name} ${comment.timestamp}`}</div>
			))
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