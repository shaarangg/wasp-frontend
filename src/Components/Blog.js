import React from "react";
import { FaShareAlt } from "react-icons/fa";
function Blog({ title, author, content }) {
	return (
		<article className="single-blog">
			<div className="blog-header">
				<div className="blog-title">{title}</div>
				<div className="blog-author">{author}</div>
			</div>
			<div className="blog-content">{content}</div>
			<div className="blog-footer">
				<div className="date">Posted Date</div>
				<button className="share">
					<FaShareAlt />
				</button>
			</div>
		</article>
	);
}

export default Blog;
