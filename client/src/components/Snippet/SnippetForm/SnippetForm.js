import React from "react";
import "./SnippetForm.css";
import useInput from "../../../hooks/useInput";

const SnippetForm = () => {
    const [ inputName, setInputName ] = useInput("");
    const [ inputContent, setInputContent ] = useInput("");
    
	return (
		<div className="SnippetForm">
            <form className="flex flex-col items-center">
                <label className="pt-2">Snippet Name</label>
                <input className="w-1/3 text-black text-center" placeholder="Foo" value={ inputName } onChange={ setInputName }></input>
                <label className="pt-2">Snippet Content</label>
                <input className="w-1/3 text-black text-center" placeholder="console.log('bar')" value={ inputContent } onChange={ setInputContent }></input>
            </form>
        </div>
	)
};

export default SnippetForm;