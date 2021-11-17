import React, { useState, useContext, useRef, useEffect } from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
const AppContext = React.createContext();
export function AppProvider({ children }) {
	const url = "http://localhost:8080/blogs";
	const history = useHistory();
	console.log(history);
	const titleRef = useRef("");
	const contentRef = useRef("");
	const [blogs, setBlogs] = useState([]);
	const [name, setName] = useState();
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

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
		closeModal();
	};

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				blogs,
				loading,
				isModalOpen,
				openModal,
				closeModal,
				handleSubmit,
				titleRef,
				contentRef,
				name,
				setName,
				fetchBlogs,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
export function GlobalContext() {
	return useContext(AppContext);
}
