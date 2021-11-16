import React from "react";
import { FaShareAlt } from "react-icons/fa";
function Blog({ title, author, content }) {
	return (
		<article className="single-blog">
			<div className="header">
				<div className="date">Posted Date</div>
				<button className="share">
					<FaShareAlt />
				</button>
			</div>
			<div className="title">{title}</div>
			<div className="content">{content}</div>
			<div className="footer">{author}</div>
		</article>
	);
}

export default Blog;
