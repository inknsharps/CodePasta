import React from "react";
import "./ModalBody.css";
import SnippetForm from "../../Snippet/SnippetForm/SnippetForm";

const ModalBody = ({ setShowModal, setReload }) => {
	return (
		<div className="ModalBody w-1/2 pt-4 bg-pink-800 bg-opacity-80">
			<SnippetForm setShowModal={ setShowModal } setReload={ setReload } />
		</div>
	)
};

export default ModalBody;