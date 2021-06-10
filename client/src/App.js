import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SnippetContainer from "./components/Snippet/SnippetContainer/SnippetContainer";
import ModalContainer from "./components/Modal/ModalContainer/ModalContainer";
import useToggle from "./hooks/useToggle";
import Footer from "./components/Footer/Footer";

function App() {
	const [ showModal, setShowModal ] = useToggle(false);

    return (
        <div className="App h-full w-full lg:h-screen lg:w-screen bg-black text-white">
			<Navbar setShowModal={ setShowModal }/>
			<section className="divide-y divide-solid divide-pink-200">
				<h1 className="rounded-full bg-pink-700 bg-opacity-50 p-5 mx-32 my-10 text-4xl">
					Code Snippets that you can save and reference for any project.
				</h1>
				<SnippetContainer />
				<ModalContainer show={ showModal } closeModal={ setShowModal } />
			</section>
			<Footer />
        </div>
    );
};

export default App;
