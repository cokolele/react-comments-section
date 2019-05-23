import React from "react";

import "./button.css";

const Button = ({onClick, primary, text}) => (	
   <button type="button" onClick={onClick} className={"button" + (primary ? " button-primary" : "")}>{text}</button>
)

export default Button