import React from "react";
import Button from "../../Button/Button";
import "./ModalFooter.css";

const ModalFooter = ({ handleSubmit, closeModal }) => {
	return (
		<div className="ModalFooter w-1/2 pb-5 pt-7 rounded-b-lg bg-pink-800">
			<Button buttonContent="Submit" buttonCallback={ handleSubmit }/>
			<Button buttonContent="Close" buttonCallback={ closeModal }/>
		</div>
	)
};

export default ModalFooter;