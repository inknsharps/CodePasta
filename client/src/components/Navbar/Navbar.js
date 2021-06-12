import React from "react";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = ({ setShowModal }) => {
	return (
		<nav className="Navbar flex flex-row justify-between p-3 bg-gradient-to-r from-red-900 to-pink-800 text-white font-medium"> 
			<h1 className="text-3xl px-8">CodePasta🍝</h1>
			<ul className="flex flex-row justify-between">
				<li className="p-2">
					<Button buttonContent="+ New Snippet" buttonCallback={ setShowModal } buttonType="button"/>
				</li>
			</ul>
		</nav>
	)
};

export default Navbar;