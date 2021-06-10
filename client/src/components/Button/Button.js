import React from "react";

const Button = ({ buttonContent }) => {
	return (
		<button className="Button">{ buttonContent }</button>
	)
};

Button.defaultProps = {
	buttonContent: "Button"
}

export default Button;