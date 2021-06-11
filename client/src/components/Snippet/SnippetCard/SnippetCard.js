import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./SnippetCard.css";

import { updateCodeSnippet, deleteCodeSnippet } from "../../../utils/API";


// Storing data ids here is probably not the greatest idea, consider another alternative such as state.
const SnippetCard = ({ snippetTitle, snippetContent, dataID, index }) => {
	const [ editMode, setEditMode ] = useState(false);
	const [ originalSnippet, setOriginalSnippet ] = useState("");
	const [ snippetID, setSnippetID ] = useState(dataID);
	
	useEffect(() => {
		const snippet = document.querySelector(`textarea[name="SnippetCard-textarea-${ index }`);
		setOriginalSnippet(snippet.value);
		setSnippetID(dataID);
	}, [dataID, index]);
	
	const toggleEditMode = () => {
		setEditMode(!editMode);
	};
	
	// These are the worst DOM traversals I've ever seen holy shit
	const handleUpdate = event => {
		event.stopPropagation();
		const snippetTitle = event.target.parentElement.parentElement.children[0].textContent;
		const snippetContent = event.target.parentElement.parentElement.children[1].firstChild.firstChild.value;
		updateCodeSnippet(snippetID, snippetTitle, snippetContent);
		toggleEditMode();
		document.location.reload();
	};

	const handleCancel = event => {
		event.stopPropagation();
		event.target.parentElement.parentElement.children[1].firstChild.firstChild.value = originalSnippet;
		setEditMode(false);
	};
	
	const handleDelete = event => {
		event.stopPropagation();
		deleteCodeSnippet(snippetID);
		document.location.reload();
	};

	const handleCopy = async event => {
		try {
			event.stopPropagation();
			navigator.clipboard.writeText(originalSnippet);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="SnippetCard flex flex-col justify-between mx-12 lg:mx-16 xl:mx-32 my-3 rounded-xl bg-pink-400 bg-opacity-50"> 
			<h3 className="rounded-t-xl p-2 bg-pink-600 bg-opacity-50 text-2xl">{ snippetTitle }</h3>
			<div className="p-5">
				<pre className="flex flex-col justify-items-stretch text-left whitespace-pre-wrap">
					<label name={`SnippetCard-textarea-${ index }`}></label>
					<textarea className="resize-none box-content bg-transparent border-box focus:outline-none font-mono" name={`SnippetCard-textarea-${ index }`} defaultValue={ snippetContent } readOnly={ !editMode } rows="12" cols="40"></textarea> 
				</pre>
			</div>
			<div className="flex flex-row justify-evenly p-2 rounded-b-xl bg-pink-700 bg-opacity-50">
				{ editMode
					? null
					: <Button buttonContent="📋" buttonCallback={ handleCopy } />
				}
				<Button buttonContent={ editMode ? "Submit" : "Update"} buttonCallback={ editMode ? handleUpdate : toggleEditMode }/>
				{ editMode 
					? <Button buttonContent="Cancel" buttonCallback={ handleCancel } />
					: <Button buttonContent="Delete" buttonCallback={ handleDelete } />  
				}
			</div>
		</div>
	)
};

SnippetCard.defaultProps = {
	snippetTitle: "Hello World!",
	snippetContent: "console.log('Hello World!')"
};

export default SnippetCard;