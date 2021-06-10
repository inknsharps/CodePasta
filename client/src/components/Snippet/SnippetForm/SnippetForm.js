import React from "react";
import "./SnippetForm.css";
import useInput from "../../../hooks/useInput";

const SnippetForm = () => {
    const [ inputName, setInputName ] = useInput("");
    const [ inputContent, setInputContent ] = useInput("");
    
	return (
		<div className="SnippetForm">
            <form className="flex flex-col items-center">
                <label>Snippet Name</label>
                <input className="w-1/3 text-black" placeholder="Foo" value={ inputName } onChange={ setInputName }></input>
                <label>Snippet Content</label>
                <input className="w-1/3 text-black" placeholder="console.log('bar')" value={ inputContent } onChange={ setInputContent }></input>
            </form>
        </div>
	)
};

export default SnippetForm;