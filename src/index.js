//css frameworks
import "normalize.css"
import "/main.css";

//react
import React from "react";
import { render } from "react-dom";

import Comments from "/pages/Comments.jsx";

const App = () => (
    <Comments/>
);

render( <App /> , document.querySelector("#app"));