import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SnippetContainer from "./components/Snippet/SnippetContainer/SnippetContainer";

function App() {
    return (
        <div className="App">
			<Navbar />
			<h1>CodePasta</h1>
			<SnippetContainer />
        </div>
    );
};

export default App;
