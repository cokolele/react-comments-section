import React from "React";

import "./styles/CommentsSection.css";

import Comment from "./comment.jsx";
import Divider from "./divider.jsx";

/*
   extra-small: 0px or larger
   small: 600px or larger
   medium: 960px or larger
   large: 1280px or larger
   xlarge: 1920px or larger
*/

const names = ["John", "Colinn", "Lucas", "Pete", "&&šč⻅⻆📋 Paste 👌⻇", "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "HeyThere", "TooBitchy"];
const texts = ["m",
               "mmmmmmmmmm",
               "<script>alert(\"???\")</script>",
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
               "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"];
const userIcons = ["userIcon-a1", "userIcon-a2", "userIcon-a3", "userIcon-a4", "userIcon-a5"];
const times = ["just now", "today", "yesterday", "tommorow", "16.5.2014"];

class CommentsSection extends React.Component {
   render() {
      return (
         <div className="commentsSection">
         {
            /*
            <Divider text="Pridať Komentár" />
            <Comment/>
             */
         }
            <Divider text="Comments" />
            <Comment name={names[0]} text={texts[0]} time={times[0]} userIcon={userIcons[0]}/>
            <Comment name={names[1]} text={texts[1]} time={times[1]} userIcon={userIcons[1]}/>
            <Comment name={names[2]} text={texts[2]} time={times[2]} userIcon={userIcons[2]}/>
            <Comment owner name={names[3]} text={texts[3]} time={times[3]} userIcon={userIcons[3]}/>
            <Comment name={names[4]} text={texts[4]} time={times[4]} userIcon={userIcons[4]}/>
         </div>
      )
   }
}

export default CommentsSection;