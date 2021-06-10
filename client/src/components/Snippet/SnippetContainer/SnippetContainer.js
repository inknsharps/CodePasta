import React, { useEffect, useState } from "react";
import SnippetCard from "../SnippetCard/SnippetCard";
import "./SnippetContainer.css";
// Utils
import getCodeSnippets from "../../../utils/API";

const SnippetContainer = () => {
	const [ currentSnippets, setCurrentSnippets ] = useState([]);

	useEffect(() => {
		getCodeSnippets()
			.then(({ data }) => setCurrentSnippets(data))
			.catch(error => new Error(error));
	}, []);

	const generateSnippetCards = snippetsArray => {
		return snippetsArray.map(snippet => {
			return (
				<SnippetCard 
					key={ snippet._id }
					snippetTitle={ snippet.snippetTitle }
					snippetContent={ snippet.snippetContent }
				/>
			)
		})
	};

	return (
		<div className="SnippetContainer"> 
			<h2>Snippet Container</h2>
			{ generateSnippetCards(currentSnippets) }
		</div>
	)
};

export default SnippetContainer;