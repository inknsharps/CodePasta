import React, { useEffect, useState } from "react";
import SnippetCard from "../SnippetCard/SnippetCard";
import "./SnippetContainer.css";

// Utils
import { getCodeSnippets } from "../../../utils/API";

const SnippetContainer = () => {
	const [ currentSnippets, setCurrentSnippets ] = useState([]);

	useEffect(() => {
		getCodeSnippets()
			.then(({ data }) => setCurrentSnippets(data))
			.catch(error => new Error(error));
	}, []);

	const generateSnippetCards = snippetsArray => {
		return snippetsArray.map((snippet, index) => {
			return (
				<SnippetCard 
					key={ snippet._id }
					index={ index }
					dataID={ snippet._id }
					snippetTitle={ snippet.snippetTitle }
					snippetContent={ snippet.snippetContent }
				/>
			)
		})
	};

	return (
		<div className="SnippetContainer grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 py-10 min-h-screen lg:min-h-full"> 
			{ generateSnippetCards(currentSnippets) }
		</div>
	)
};

export default SnippetContainer;