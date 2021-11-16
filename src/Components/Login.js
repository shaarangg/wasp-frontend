import React from "react";
import { useState, useRef, useEffect } from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const cookies = new Cookies();
function Login() {
	const userNameRef = useRef("");
	const passwordRef = useRef("");
	const history = useHistory();

	useEffect(() => {
		const info = cookies.getAll();
		if (info["username"] && info["password"]) {
			history.push("/blogs");
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		cookies.set("username", userNameRef.current.value, { path: "/" });
		cookies.set("password", passwordRef.current.value, { path: "/" });
		history.push("/blogs");
	};

	return (
		<section className="login-container">
			<div className="form-container">
				<form className="form" onSubmit={handleSubmit}>
					<h2 className="form-title">Sign-In</h2>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						placeholder="Enter username"
						id="username"
						className="input"
						ref={userNameRef}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="Enter password"
						id="password"
						className="input"
						ref={passwordRef}
					/>
					<button type="Submit" className="btn">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}

export default Login;
