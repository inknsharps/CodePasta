import React from "react";
import "./Button.css";

const Button = ({ buttonContent, buttonCallback, buttonType }) => {
	return (
		<button 
			className="Button transform transition duration-500 px-5 rounded-full bg-pink-300 hover:bg-pink-500 hover:bg-opacity-50 ring ring-transparent hover:ring hover:ring-white bg-opacity-50" 
			onClick={ buttonCallback }
			type={ buttonType }
		>
			{ buttonContent }
		</button>
	)
};

Button.defaultProps = {
	buttonContent: "Button",
	buttonCallback: () => {console.log("Button Clicked!")},
	buttonType: "button"
}

export default Button;