import React from "react";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../context";
function Modal() {
	const { isModalOpen, closeModal, handleSubmit, titleRef, contentRef } = GlobalContext();
	return (
		<div className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
			<div className="modal-container">
				<form onSubmit={handleSubmit}>
					<label htmlFor="title">Title</label>
					<input type="text" placeholder="Add title" id="title" ref={titleRef} />
					<label htmlFor="content">Content</label>
					<input type="text" placeholder="Add content" id="content" ref={contentRef} />
					<button type="submit">Post</button>
				</form>
				<button className="close-modal-btn" onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
}

export default Modal;
