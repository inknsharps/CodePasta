import React from "react";
import Button from "../../Button/Button";
import "./SnippetCard.css";

const SnippetCard = ({ snippetTitle, snippetContent }) => {
	return (
		<div className="SnippetCard"> 
			<h2>{ snippetTitle }</h2>
			<p>{ snippetContent }</p>
			<Button buttonContent="Update"/>
			<Button buttonContent="Delete"/>
		</div>
	)
};

SnippetCard.defaultProps = {
	snippetTitle: "Hello World!",
	snippetContent: "console.log('Hello World!')"
};

export default SnippetCard;