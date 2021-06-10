import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SnippetContainer from "./components/Snippet/SnippetContainer/SnippetContainer";
import ModalContainer from "./components/Modal/ModalContainer/ModalContainer";
import Button from "./components/Button/Button";
import useToggle from "./hooks/useToggle";

function App() {
	const [ showModal, setShowModal ] = useToggle(false);

    return (
        <div className="App h-screen bg-black text-white">
			<Navbar />
			<h1 className="bg-pink-700 bg-opacity-50 p-3 mx-5 my-3 text-4xl">
				Code Snippets that you can save and reference for any project.
			</h1>
			<SnippetContainer />
			<Button buttonContent="Show Modal" buttonCallback={ setShowModal } />
			<ModalContainer show={ showModal } closeModal={ setShowModal } />
        </div>
    );
};

export default App;
