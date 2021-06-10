import React, { useEffect, useState } from "react";
import SnippetCard from "../SnippetCard/SnippetCard";
import getCodeSnippets from "../../../utils/API";

const SnippetContainer = () => {
	const [ currentSnippets, setCurrentSnippets ] = useState([]);

	useEffect(() => {
		getCodeSnippets()
			.then(({ data }) => {console.log(data);setCurrentSnippets(data)})
			.catch(error => console.log(error));
	}, []);

	const generateSnippetCards = snippetsArray => {
		return snippetsArray.map(snippet => {
			return (
				<SnippetCard 
					snippetTitle={ snippet.snippetTitle }
					snippetContent={ snippet.snippetContent }
				/>
			)
		})
	};

	return (
		<div className="SnippetContainer"> 
			<h2>Snippet Container</h2>
			{generateSnippetCards(currentSnippets)}
		</div>
	)
};

export default SnippetContainer;