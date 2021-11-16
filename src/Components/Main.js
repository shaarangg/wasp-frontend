import React, { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
import Blogs from "./Blogs";
const cookies = new Cookies();
function Main() {
	const url = "http://localhost:8080/blogs";
	const history = useHistory();
	const titleRef = useRef("");
	const contentRef = useRef("");
	const [blogs, setBlogs] = useState([]);
	const [name, setName] = useState();
	const [loading, setLoading] = useState(true);

	const fetchBlogs = async () => {
		setLoading(true);
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};
		try {
			const res = await fetch(url, requestOptions);
			const blgs = await res.json();
			setLoading(false);
			setBlogs(blgs);
		} catch (error) {
			setLoading(true);
			console.log(error);
		}
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
			console.log(oldBlogs);
			return [...oldBlogs, b];
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
		fetchBlogs();
	}, []);
	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (blogs.length === 0) {
		return (
			<main>
				<h2>No blogs present</h2>
			</main>
		);
	}
	return (
		<main>
			<Blogs blogs={blogs} />
		</main>
	);
}
export default Main;
