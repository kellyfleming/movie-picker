import {useState} from "react";

function useToggle(initialValue = false) {
    let [state, setState] = useState(initialValue);

    function toggle() {
        setState(!state);
    }

    return [state, toggle];
}

export default useToggle;