import React, { useState } from "react";
import Button from "../../Button/Button";
import "./SnippetCard.css";

import { updateCodeSnippet, deleteCodeSnippet } from "../../../utils/API";


// Storing data ids here is probably not the greatest idea, consider another alternative such as state.
const SnippetCard = ({ snippetTitle, snippetContent, dataID }) => {
	const [ editMode, setEditMode ] = useState(false);
	
	const toggleEditMode = () => {
		setEditMode(!editMode);
	};
	
	// These are the worst DOM traversals I've ever seen holy shit
	const handleUpdate = event => {
		event.stopPropagation();
		console.log(event);
		const snippetID = event.target.parentElement.dataset.id;
		const snippetTitle = event.target.parentElement.parentElement.children[0].textContent;
		const snippetContent = event.target.parentElement.parentElement.children[1].firstChild.firstChild.value;
		updateCodeSnippet(snippetID, snippetTitle, snippetContent);
		toggleEditMode();
		document.location.reload();
	};
	
	const handleDelete = event => {
		event.stopPropagation();
		const snippetID = event.target.parentElement.dataset.id;
		deleteCodeSnippet(snippetID);
		document.location.reload();
	};

	return (
		<div className="SnippetCard flex flex-col justify-between mx-12 lg:mx-16 xl:mx-32 my-3 rounded-xl bg-pink-400 bg-opacity-50"> 
			<h3 className="rounded-t-xl p-2 bg-pink-600 bg-opacity-50 text-2xl">{ snippetTitle }</h3>
			<div className="p-5">
				<pre className="text-left whitespace-pre-wrap">
					{ editMode ? <textarea className="text-black" defaultValue={ snippetContent }></textarea> : <code>{ snippetContent }</code> }
				</pre>
			</div>
			<div className="flex flex-row justify-evenly p-2 rounded-b-xl bg-pink-700 bg-opacity-50" data-id={ dataID }>
				<Button buttonContent={ editMode ? "Submit" : "Update"} buttonCallback={ editMode ? handleUpdate : toggleEditMode }/>
				<Button buttonContent="Delete" buttonCallback={ handleDelete }/>
			</div>
		</div>
	)
};

SnippetCard.defaultProps = {
	snippetTitle: "Hello World!",
	snippetContent: "console.log('Hello World!')"
};

export default SnippetCard;