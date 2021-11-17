import React from "react";
import { GlobalContext } from "../context";
function Navbar() {
	const { name } = GlobalContext();
	return (
		<nav className="nav-center">
			<div className="nav-header">ISAA-PROJECT</div>
			<div className="user-name">{name}</div>
		</nav>
	);
}
export default Navbar;
