import React from "react";
import "./ModalHeader.css";
import Button from "../../Button/Button";

const ModalHeader = ({ closeModal }) => {
	return (
		<div className="ModalHeader flex justify-between w-1/2 rounded-t-xl p-2 bg-pink-500 text-2xl">
			<h4 className="ml-5">New Snippet</h4>
			<div className="mr-1">
				<Button buttonContent="X" buttonCallback={ closeModal }/>
			</div>
		</div>
	)
};

export default ModalHeader;