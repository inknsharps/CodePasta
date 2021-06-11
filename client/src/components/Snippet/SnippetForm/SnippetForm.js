import React from "react";
import "./SnippetForm.css";
import useInput from "../../../hooks/useInput";

const SnippetForm = () => {
    const [ inputName, setInputName ] = useInput("");
    const [ inputContent, setInputContent ] = useInput("");
    
	return (
		<div className="SnippetForm">
            <form className="flex flex-col items-center" onSubmit={e =>{e.preventDefault();console.log(e)}}>
                <label className="pt-2">Snippet Name</label>
                <input className="w-1/3 text-black text-center" type="text" placeholder="Foo" value={ inputName } onChange={ setInputName }></input>
                <label className="pt-2">Snippet Content</label>
                <textarea className="w-1/3 text-black text-center" type="text" placeholder="console.log('bar')" value={ inputContent } onChange={ setInputContent }></textarea>
				<input className="transform transition duration-500 mt-6 px-5 rounded-full bg-pink-300 hover:bg-pink-500 hover:bg-opacity-50 ring ring-transparent hover:ring hover:ring-white bg-opacity-50" type="submit" value="Submit!"></input>
            </form>
        </div>
	)
};

export default SnippetForm;