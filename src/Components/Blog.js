import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { GlobalContext } from "../context";
function Blog({ title, author, content, CreatedAt }) {

	let date = new Date(CreatedAt).toDateString();
	date = date.slice(3);
	const {sanitized, setSanitized} = GlobalContext();
	if (!sanitized){
		return (
			<article className="single-blog">
				<div className="blog-header">
					<div className="blog-title">{title}</div>
					<div className="blog-author">{author}</div>
				</div>
				<span className="blog-content" dangerouslySetInnerHTML={{ __html: content}}></span>
				<div className="blog-footer">
					<div className="date">Posted {date}</div>
					<button className="share">
						<FaShareAlt />
					</button>
				</div>
			</article>
		);
	}
	if (sanitized){
		return (
			<article className="single-blog">
				<div className="blog-header">
					<div className="blog-title">{title}</div>
					<div className="blog-author">{author}</div>
				</div>
				<div className="blog-content" >{content}</div>
				<div className="blog-footer">
					<div className="date">Posted {date}</div>
					<button className="share">
						<FaShareAlt />
					</button>
				</div>
			</article>
		);
	}
}

export default Blog;
