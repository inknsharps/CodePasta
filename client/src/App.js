import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SnippetContainer from "./components/Snippet/SnippetContainer/SnippetContainer";
import ModalContainer from "./components/Modal/ModalContainer/ModalContainer";
import useToggle from "./hooks/useToggle";
import Footer from "./components/Footer/Footer";
import useReload from "./hooks/useReload";
import { getCodeSnippets } from "./utils/API";

function App() {
	const [ showModal, setShowModal ] = useToggle(false);
	const [ reload, setReload, memoGetCodeSnippets ] = useReload(getCodeSnippets, false);

    return (
        <div className="App min-h-full min-w-full lg:min-h-screen lg:min-w-screen text-white">
			<Navbar setShowModal={ setShowModal } />
			<section className="divide-y divide-solid divide-pink-200">
				<h1 className="rounded-lg md:rounded-full bg-pink-700 bg-opacity-50 p-5 mx-5 xl:mx-32 my-10 text-4xl">
					Code Snippets that you can save and reference for any project.
				</h1>
				<SnippetContainer reload={reload} setReload={ setReload } memoGetCodeSnippets={ memoGetCodeSnippets } />
				<ModalContainer show={ showModal } setShowModal={ setShowModal } setReload={ setReload } />
			</section>
			<Footer />
        </div>
    );
};

export default App;
