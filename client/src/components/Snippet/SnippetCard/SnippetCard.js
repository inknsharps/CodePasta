import React from "react";
import Button from "../../Button/Button";
import "./SnippetCard.css";

const SnippetCard = ({ snippetTitle, snippetContent }) => {
	return (
		<div className="SnippetCard mx-32 my-3 rounded-xl bg-pink-400 bg-opacity-50"> 
			<h3 className="rounded-t-xl p-2 bg-pink-600 bg-opacity-50 text-2xl">{ snippetTitle }</h3>
			<div className="p-5">
				<code>{ snippetContent }</code>
			</div>
			<div className="flex flex-row justify-evenly p-2 rounded-b-xl bg-pink-700 bg-opacity-50">
				<Button buttonContent="Update"/>
				<Button buttonContent="Delete"/>
			</div>
		</div>
	)
};

SnippetCard.defaultProps = {
	snippetTitle: "Hello World!",
	snippetContent: "console.log('Hello World!')"
};

export default SnippetCard;