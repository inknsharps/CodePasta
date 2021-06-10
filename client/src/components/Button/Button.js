import React from "react";
import "./Button.css";

const Button = ({ buttonContent, buttonCallback }) => {
	return (
		<button className="Button" onClick={buttonCallback}>{ buttonContent }</button>
	)
};

Button.defaultProps = {
	buttonContent: "Button",
	buttonCallback: () => {console.log("Button Clicked!")}
}

export default Button;