import React, { useEffect, useState } from "react";
import SnippetCard from "../SnippetCard/SnippetCard";
import "./SnippetContainer.css";

const SnippetContainer = ({ reload, setReload, memoGetCodeSnippets}) => {
	const [ currentSnippets, setCurrentSnippets ] = useState([]);

	useEffect(() => {
		memoGetCodeSnippets()
			.then(({ data }) => setCurrentSnippets(data))
			.catch(error => new Error(error));
	}, [memoGetCodeSnippets, reload]);

	const generateSnippetCards = snippetsArray => {
		return snippetsArray.map((snippet, index) => {
			return (
				<SnippetCard 
					key={ snippet._id }
					index={ index }
					dataID={ snippet._id }
					snippetTitle={ snippet.snippetTitle }
					snippetContent={ snippet.snippetContent }
					setReload={ setReload }
				/>
			)
		})
	};

	return (
		<div className="SnippetContainer grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 py-10 xl:mx-24 min-h-screen lg:min-h-full"> 
			{ generateSnippetCards(currentSnippets) }
		</div>
	)
};

export default SnippetContainer;