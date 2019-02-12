import React from "react";

import "./avatar.css";

const Avatar = (props) => (
   <div className={"avatar type" + props.iconType}></div>
);

export default Avatar;