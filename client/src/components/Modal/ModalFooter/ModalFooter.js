import React from "react";
import Button from "../../Button/Button";
import "./ModalFooter.css";

const ModalFooter = ({ closeModal }) => {
	return (
		<div className="ModalFooter">
			<Button buttonContent="Close" buttonCallback={ closeModal }/>
		</div>
	)
};

export default ModalFooter;