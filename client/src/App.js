import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SnippetContainer from "./components/Snippet/SnippetContainer/SnippetContainer";
import ModalContainer from "./components/Modal/ModalContainer/ModalContainer";
import useToggle from "./hooks/useToggle";

function App() {
	const [ showModal, setShowModal ] = useToggle(false);

    return (
        <div className="App h-full w-full lg:h-screen lg:w-full bg-black text-white">
			<Navbar setShowModal={ setShowModal }/>
			<h1 className="bg-pink-700 bg-opacity-50 p-3 mx-5 my-3 text-4xl">
				Code Snippets that you can save and reference for any project.
			</h1>
			<SnippetContainer />
			<ModalContainer show={ showModal } closeModal={ setShowModal } />
        </div>
    );
};

export default App;
