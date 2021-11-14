import React, { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const cookies = new Cookies();
function Blog() {
	const history = useHistory();
	const titleRef = useRef("");
	const contentRef = useRef("");
	const [blogs, setBlogs] = useState([]);
	const [name, setName] = useState();

	const getBlogs = async () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		let res = await fetch("http://localhost:8080/blogs", requestOptions);
		res = await res.json();
		setBlogs(res);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let id = (blogs.length + 1).toString();
		const b = {
			id: id,
			title: titleRef.current.value,
			author: name,
			content: contentRef.current.value,
		};

		console.log(JSON.stringify(b));
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(b),
		};
		
		let res = await fetch("http://localhost:8080/blogs", requestOptions);
		res = await res.json();

        setBlogs((oldBlogs) => {
            console.log(oldBlogs)
            return [...oldBlogs, b]
		});
        titleRef.current.value = "";
        contentRef.current.value = "";
	};

	useEffect(() => {
		const info = cookies.getAll();
		if (!info["username"] || !info["password"]) {
			history.push("/login");
		}
		setName(info["username"]);
		getBlogs();
	}, []);

	if (blogs.length !== 0) {
		return (
			<div>
				<h1>Blogs</h1>
				<hr />
				<br />
				{blogs.map((blog) => {
					return (
						<div key={blog.id}>
							<h3>{blog.title}</h3>
							<p>{blog.content}</p>
							<hr />
						</div>
					);
				})}
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Add title" ref={titleRef} />
					<br />
					<input type="text" placeholder="Add content" ref={contentRef} />
					<br />
					<br />
					<button type="submit">Post</button>
				</form>
			</div>
		);
	} else {
		return <div></div>;
	}
}

export default Blog;
