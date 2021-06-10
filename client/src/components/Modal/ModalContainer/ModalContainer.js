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
		<div className="ModalContainer">
			<h3>Modal Container</h3>
			<ModalHeader />
			<ModalBody />
			<ModalFooter closeModal={ closeModal } />
		</div>
	)
};

export default ModalContainer;