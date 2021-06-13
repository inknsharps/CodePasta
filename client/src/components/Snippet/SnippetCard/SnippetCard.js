import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "./SnippetCard.css";

import { updateCodeSnippet, deleteCodeSnippet } from "../../../utils/API";

const SnippetCard = ({ snippetTitle, snippetContent, dataID, index, setReload }) => {
	const [ editMode, setEditMode ] = useState(false);
	const [ originalSnippet, setOriginalSnippet ] = useState("");
	const [ updatedSnippet, setUpdatedSnippet ] = useState("");
	const [ snippetID, setSnippetID ] = useState("");
	const [ snippetInput, setSnippetInput ] = useState("");

	useEffect(() => {
		setSnippetInput(snippetContent);
		setOriginalSnippet(snippetContent);
		setSnippetID(dataID);
	}, [dataID, snippetContent]);

	useEffect(() => {
		setUpdatedSnippet(snippetInput);
	}, [snippetInput]);
	
	const toggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleInput = event => {
		setSnippetInput(event.target.value);
	};
	
	const handleUpdate = event => {
		event.stopPropagation();
		console.log(snippetInput);
		setUpdatedSnippet(snippetInput);
		updateCodeSnippet(snippetID, snippetTitle, updatedSnippet);
		setOriginalSnippet(updatedSnippet);
		toggleEditMode();
		setReload(prev => !prev);
	};

	const handleCancel = event => {
		event.stopPropagation();
		setSnippetInput(originalSnippet);
		setEditMode(false);
		setReload(prev => !prev);
	};
	
	const handleDelete = event => {
		event.stopPropagation();
		deleteCodeSnippet(snippetID);
		setReload(prev => !prev);
	};

	// This is async because the writeText() method returns a promise, and it can break because of user permissions.
	const handleCopy = async event => {
		try {
			event.stopPropagation();
			navigator.clipboard.writeText(originalSnippet);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="SnippetCard flex flex-col justify-between mx-5 lg:mx-16 xl:mx-4 my-3 rounded-xl bg-pink-400 bg-opacity-50 font-light"> 
			<h2 className="rounded-t-xl p-2 bg-pink-600 bg-opacity-50 text-2xl">{ snippetTitle }</h2>
			<div className="p-5">
				<pre className="flex flex-col justify-items-stretch text-left whitespace-pre-wrap">
					<label htmlFor={ `SnippetCard-textarea-${ index }` }>
						<textarea 
							className="resize-none box-content bg-transparent border-box focus:outline-none font-mono" 
							// name={ `SnippetCard-textarea-${ index }` } 
							id={ `SnippetCard-textarea-${ index }` }
							value={ snippetInput } 
							readOnly={ !editMode }
							onChange={ editMode ? handleInput : null } 
							rows="12" 
							cols="40">
						</textarea> 
					</label>
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