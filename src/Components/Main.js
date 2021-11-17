import React, { useEffect, useState, useRef } from "react";
import { GlobalContext } from "../context";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
import Blogs from "./Blogs";
const cookies = new Cookies();
function Main() {
	const { blogs, loading, setName, fetchBlogs } = GlobalContext();
	const history = useHistory();

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
	} else if (blogs.length === 0) {
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
