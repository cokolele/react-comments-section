//polyfills
/*
	import "@babel/polyfill";

	as of parcel < 2 version you cannot specify @babel-preset-env option useBuiltIns
	since this is such a small app and loading whole polyfill package would double the size
	i hardcoded useBuiltIns: "usage" instead of "entry"/false
	in the file /node_modules/parcel-bundler/src/transforms/babel/env.js @line 56, column 26
 */

//css frameworks
import "normalize.css"
import "./index.css";

//react
import React from "react";
import { render } from "react-dom";

import CommentsSection from "./components/CommentsSection.jsx";

const App = () => (
	<CommentsSection/>
);

render( <App /> , document.querySelector("#app"));