import useLocalStorageState from "./useLocalStorageState";

function useLocalStorageToggle(key, initialVal = false) {
    let [state, setState] = useLocalStorageState(key, initialVal);

    function toggle() {
        setState(!state);
    }

    return [state, toggle];
}

export default useLocalStorageToggle;