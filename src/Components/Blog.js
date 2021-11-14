import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const cookies = new Cookies();
function Blog() {
	const history = useHistory();
	const [blogs, setBlogs] = useState([]);

	const getBlogs = async () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		let res = await fetch("http://localhost:8080/blogs", requestOptions);
		res = await res.json();
		setBlogs(res);
	};

	useEffect(() => {
		const info = cookies.getAll();
		if (!info["username"] || !info["password"]) {
			history.push("/login");
		}
		getBlogs();
	}, []);
	if (blogs.length !== 0) {
		console.log(blogs.length);
		console.log(blogs);
		return (
			<div>
				<h1>Blogs</h1>
				<hr />
				<br />
				{blogs.map((blog) => {
					return (
						<div id={blog.id}>
							<h3>{blog.title}</h3>
							<hr />
						</div>
					);
				})}
			</div>
		);
	} else {
		return <div>hello</div>;
	}
	return (
		<div>
			<h1>Blogs</h1>
			<hr />
			<br />
			{blogs.map((blog) => {
				<div id={blog.id}>
					<h3>{blog.title}</h3>
					<hr />
				</div>;
			})}
		</div>
	);
}

export default Blog;
