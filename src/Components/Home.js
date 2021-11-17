import React from "react";
import Main from "./Main";
import Modal from "./Modal";
import { GlobalContext } from "../context";
function Home() {
	const { openModal } = GlobalContext();
	return (
		<>
			<Main />
			<Modal />
			<div className="add-blog">
				<button type="button" className="btn" onClick={openModal}>
					Add Blog
				</button>
			</div>
		</>
	);
}

export default Home;
