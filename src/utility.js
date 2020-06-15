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

export {getRandom, toggleLinkContainer, closeLinkContainer};