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
        <div className="App">
			<Navbar />
			<h1>CodePasta</h1>
			<SnippetContainer />
			<Button buttonContent="Show Modal" buttonCallback={ setShowModal } />
			<ModalContainer show={ showModal } closeModal={ setShowModal } />
        </div>
    );
};

export default App;
