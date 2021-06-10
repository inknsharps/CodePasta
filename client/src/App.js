import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SnippetContainer from "./components/Snippet/SnippetContainer/SnippetContainer";
import ModalContainer from "./components/Modal/ModalContainer/ModalContainer";
import Button from "./components/Button/Button";

function App() {
	const [ showModal, setShowModal ] = useState(false);

	const displayModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

    return (
        <div className="App">
			<Navbar />
			<h1>CodePasta</h1>
			<SnippetContainer />
			<Button buttonContent="Show Modal" buttonCallback={ displayModal } />
			<ModalContainer show={ showModal } closeModal={ closeModal } />
        </div>
    );
};

export default App;
