import React from "react";
import "./Button.css";

const Button = ({ buttonContent, buttonCallback }) => {
	return (
		<button className="Button px-5 rounded-full bg-pink-300 bg-opacity-50" onClick={ buttonCallback }>{ buttonContent }</button>
	)
};

Button.defaultProps = {
	buttonContent: "Button",
	buttonCallback: () => {console.log("Button Clicked!")}
}

export default Button;