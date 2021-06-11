import { useState } from "react";

const useToggle = (initialState = true) => {
    const [ toggleState, setToggleState ] = useState(initialState);

    const handleToggle = event => {
		event.preventDefault();
		event.stopPropagation();
        setToggleState(!toggleState);
    };

	const handleToggleTrue = event => {
		event.preventDefault();
		event.stopPropagation();
		setToggleState(true);
	};

	const handleToggleFalse = event => {
		event.preventDefault();
		event.stopPropagation();
		setToggleState(false);
	};

    return [toggleState, handleToggle, handleToggleTrue, handleToggleFalse];
};

export default useToggle;