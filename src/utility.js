function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function toggleLinkContainer() {
    let $linkContainer = document.querySelector(".Link-container");
    let $caretSpan = document.querySelector("#caret");
    $linkContainer.classList.toggle("hidden");
    if ($linkContainer.classList.contains("hidden")) {
        $caretSpan.classList.remove("fa-caret-up");
        $caretSpan.classList.add("fa-caret-down");
    } else {
        $caretSpan.classList.remove("fa-caret-down");
        $caretSpan.classList.add("fa-caret-up");
    }
}

function closeLinkContainer() {
    let $linkContainer = document.querySelector(".Link-container");
    let $caretSpan = document.querySelector("#caret");
    $linkContainer.classList.add("hidden");
    $caretSpan.classList.remove("fa-caret-up");
    $caretSpan.classList.add("fa-caret-down");
}

function getLocal(key) {
    return window.localStorage.getItem(key);
}

function setLocal(key, val) {
    window.localStorage.setItem(key, val);
}

export {getRandom, toggleLinkContainer, closeLinkContainer, getLocal, setLocal};