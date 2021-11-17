import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<AppContext.Provider value={{ isModalOpen, openModal, closeModal }}>
			{children}
		</AppContext.Provider>
	);
}
export function GlobalContext() {
	return useContext(AppContext);
}
