import React from "react";
import "./SnippetForm.css";
import useInput from "../../../hooks/useInput";

const SnippetForm = () => {
    const [ inputName, setInputName ] = useInput("");
    const [ inputContent, setInputContent ] = useInput("");
    
	return (
		<div className="SnippetForm">
            <h2>Snippet Form</h2>
            <form>
                <label>Snippet Name</label>
                <input placeholder="Foo" value={ inputName } onChange={ setInputName }></input>
                <label>Snippet Content</label>
                <input placeholder="console.log('bar')" value={ inputContent } onChange={ setInputContent }></input>
            </form>
        </div>
	)
};

export default SnippetForm;