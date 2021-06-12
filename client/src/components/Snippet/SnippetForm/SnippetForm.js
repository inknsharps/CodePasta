import React, { useState } from "react";
import "./SnippetForm.css";
import useInput from "../../../hooks/useInput";
import { postCodeSnippet } from "../../../utils/API";

const SnippetForm = ({ setShowModal, setReload }) => {
    const [ inputName, setInputName ] = useInput("");
    const [ inputContent, setInputContent ] = useInput("");
	const [ nameWarning, setNameWarning ] = useState(false);
	const [ codeWarning, setCodeWarning ] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		
		// Resets the warning states to false so we can run form validation again.
		setNameWarning(false);
		setCodeWarning(false);

		// The submit event shoves both inputs into an array on the event.target attribute.
		const nameValue = event.target[0].value;
		const codeValue = event.target[1].value;
		console.log(nameValue, codeValue)

		// Validation for the inputs. If either aren't inputted, then we set the respective warning states to true and render warning markup, and stop the POST request from being made.
		if (nameValue === ""){
			setNameWarning(true);
		};
		if (codeValue === ""){
			setCodeWarning(true);
		};
		if (nameWarning || codeWarning){
			return;
		}
		postCodeSnippet(nameValue, codeValue);
		setShowModal(false);
		setReload(prev => !prev);
		// document.location.reload();
	};
    
	return (
		<div className="SnippetForm">
            <form className="flex flex-col items-center" onSubmit={ handleSubmit }>
                <label className="pt-2">Snippet Name { nameWarning ? <span className="text-yellow-300"> Please input a name!</span> : null }</label>
                <input className="w-1/3 text-black text-center" type="text" placeholder="// Function Foo" required={ true } value={ inputName } onChange={ setInputName }></input>
                <label className="pt-2">Snippet Content { codeWarning ? <span className="text-yellow-300"> Please input code!</span> : null }</label>
                <textarea className="w-1/3 text-black text-center" type="text" placeholder="foo => console.log('bar')" required={ true } value={ inputContent } onChange={ setInputContent }></textarea>
				<input className="transform transition duration-500 mt-6 px-5 rounded-full bg-pink-300 hover:bg-pink-500 hover:bg-opacity-50 ring ring-transparent hover:ring hover:ring-white bg-opacity-50" type="submit" value="Submit!"></input>
            </form>
        </div>
	)
};

export default SnippetForm;