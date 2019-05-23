import React from "react";

import "./avatar.css";

const avatarImgs = [
	require("/images/users/setC1.jpg"),
	require("/images/users/setC2.jpg"),
	require("/images/users/setC3.jpg"),
	require("/images/users/setC4.jpg"),
	require("/images/users/setC5.jpg"),
	require("/images/users/setC6.jpg"),
	require("/images/users/setC7.jpg"),
	require("/images/users/setC8.jpg")
];

const Avatar = ({ iconType }) => (
   <div className="avatar">
		<img src={avatarImgs[iconType]} alt="user avatar"/>
   </div>
);

export default Avatar;