import React from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import "./ModalContainer.css";

const ModalContainer = () => {
	return (
		<div className="ModalContainer">
			<ModalHeader />
			<ModalBody />
			<ModalFooter />
		</div>
	)
};

export default ModalContainer;