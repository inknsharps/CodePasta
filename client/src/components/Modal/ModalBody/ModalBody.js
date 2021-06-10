import React from "react";
import "./ModalBody.css";
import SnippetForm from "../../Snippet/SnippetForm/SnippetForm";

const ModalBody = () => {
	return (
		<div className="ModalBody w-1/2 bg-pink-800">
			<SnippetForm />
		</div>
	)
};

export default ModalBody;