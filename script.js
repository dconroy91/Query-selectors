function applyGoatMode(){
    //select body element
    const bodyElement = document.querySelector("body");
    // apply class of goat mode to body element
    bodyElement.classList.add("goat-mode");

    const listItems = document.querySelectorAll(".list-item")
    console.log("should be all items", listItems)
    listItems.classList.add("orange-backround");
    for(let i = -0;)
}
applyGoatMode();