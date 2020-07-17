function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function toggleLinkContainer(evt) {
    evt.stopPropagation();
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

function initStorage(key, val) {
    if (!getLocal(key)) {
        setLocal(key, val);
    }
}

function toggle(key, setter) {
    let current = JSON.parse(getLocal(key));
    if (current !== null) {
        setLocal(key, !current);
        setter(!current);
    }
}

function addClass(id, c) {
    document.querySelector(id).classList.add(c);
}

function removeClass(id, c) {
    document.querySelector(id).classList.remove(c);
}

export {getRandom, toggleLinkContainer, closeLinkContainer, getLocal, setLocal, initStorage, toggle, addClass, removeClass};