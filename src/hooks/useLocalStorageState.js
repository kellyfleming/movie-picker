import {useState, useEffect} from "react";

function useLocalStorageState(key, initialValue) {
    let [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(initialValue));
        } catch (e) {
            val = initialValue;
        }
        return val;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default useLocalStorageState;