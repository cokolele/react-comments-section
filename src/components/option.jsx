import React from "react";
import { Reply, Remove, Edit } from "./icons.jsx";

import "./styles/option.css";

class Options extends React.Component {
   onClick() {
      console.log("hmm");
   }

   render() {
      let label, Icon;

      if (this.props.reply) {
         label = "reply";
         Icon = Reply;
      } else if (this.props.edit) {
         label = "edit";
         Icon = Edit;
      } else if (this.props.remove) {
         label = "remove";
         Icon = Remove;
      }

      return (
         <span onClick={this.props.onClick} className="option">
            <Icon/>{ label }
         </span>
      )
   }
}

export default Options;