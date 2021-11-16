import React from "react";
import Blog from "./Blog";
function Blogs({ blogs }) {
	return (
		<section>
			<div className="title">
				<h2>Blogs</h2>
				<div className="underline"></div>
			</div>
			<div>
				{blogs.map((blog) => {
					return <Blog key={blog.id} {...blog} />;
				})}
			</div>
		</section>
	);
}

export default Blogs;
