import React from "react";
import Blog from "./Blog";
import { GlobalContext } from "../context";
import Switch from "react-switch";

function Blogs({ blogs }) {

	const {sanitized, setSanitized} = GlobalContext();
	const handleChange = () => {
		setSanitized(!sanitized);
	}
	return (
		<section>
			<div className="title">
				<h2>Blogs</h2>
				<div className="underline"></div>
				<br/>
				<Switch onChange={handleChange} checked={sanitized}/>
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
