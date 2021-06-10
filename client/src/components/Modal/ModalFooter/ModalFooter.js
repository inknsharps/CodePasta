import React from "react";
import Button from "../../Button/Button";
import "./ModalFooter.css";

const ModalFooter = ({ closeModal }) => {
	return (
		<div className="ModalFooter w-1/2 p-5 rounded-b-lg bg-pink-800">
			<Button buttonContent="Close" buttonCallback={ closeModal }/>
		</div>
	)
};

export default ModalFooter;