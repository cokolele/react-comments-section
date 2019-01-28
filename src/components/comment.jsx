import React from "react";
import Option from "./option.jsx";

import "./styles/comment.css";

class Comment extends React.Component {
	replyHandler() {
		console.log("hmm");
	}

	render() {
		return (
			<div className="comment">
				<div>
					<div className={"comment__userIcon " + this.props.userIcon}></div>
				</div>
				<div className="comment__stripe"></div>
				<div>
					<div>
						<span className="comment__name">{this.props.name}</span>
						<span className="comment__time">{this.props.time}</span>
						<span className="comment__options">
							<Option reply onClick={this.replyHandler}/>
							{
								this.props.owner ? <Option edit onClick={this.replyHandler}/> : null
							}
							{
								this.props.owner ? <Option remove onClick={this.replyHandler}/> : null
							}
						</span>
					</div>
					<div className="comment__text">{this.props.text}</div>
				</div>
			</div>
		)
	}
}

export default Comment;