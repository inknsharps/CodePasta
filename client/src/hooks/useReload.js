// Custom React Hook for non-opinionated rerendering, it's probably very jank so don't rely on this and get better at state management and useEffect().
// Pass in a callback you want to memoize, the initialState.
// What is returned is the reload state, setter for the reload state, and the memoized callback.
// Use a useEffect() hook in the component you want to rerender, then add the reload state as a dependency, then pass the setter for the reload state to whatever you want to cause rerendering.
// The setter should called with a function, like `setReload(prev => !prev)`.

import { useState, useCallback } from "react";

const useReload = (callback, initialState = false) => {
	const [ reload, setReload ] = useState(initialState);
	const memoCallback = useCallback(callback, [callback, reload]);
	if (!callback) {
		throw new Error("useReload requires a callback to memoize.");
	};

	return [ reload, setReload, memoCallback ];
};

export default useReload;