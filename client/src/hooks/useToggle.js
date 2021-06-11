import { useState } from "react";

const useToggle = (initialState = true) => {
    const [ toggleState, setToggleState ] = useState(initialState);

    const handleToggle = () => {
        setToggleState(!toggleState);
    };

	const handleToggleTrue = () => {
		setToggleState(true);
	};

	const handleToggleFalse = () => {
		setToggleState(false);
	};

    return [toggleState, handleToggle, handleToggleTrue, handleToggleFalse];
};

export default useToggle;