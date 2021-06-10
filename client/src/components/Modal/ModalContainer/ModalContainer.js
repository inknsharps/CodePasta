// Note that for the current modal I have set up, it statically generates the SnippetForm component in the ModalBody.
// Ideally, one should be able to pass in props to set the ModalBody to different components, if this were to be reused.

import React from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import "./ModalContainer.css";

const ModalContainer = ({ show, closeModal }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="ModalContainer backdrop-filter backdrop-blur fixed flex flex-col items-center justify-center inset-0 bg-pink-200 bg-opacity-50">
			<ModalHeader />
			<ModalBody />
			<ModalFooter closeModal={ closeModal } />
		</div>
	)
};

export default ModalContainer;