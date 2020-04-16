// function applyGoatMode(){
//     //select body element
//     const bodyElement = document.querySelector("body");
//     // apply class of goat mode to body element
//     bodyElement.classList.add("goat-mode");

//     const listItems = document.querySelectorAll(".list-item")
//     console.log("should be all items", listItems)
//     listItems.classList.add("orange-backround");
//     for(let i = -0;)
// }
// applyGoatMode();

function applyChanges(){
    const articleOne = document.querySelector(".article__header")
    articleOne.textContent = "Welcome to the Devin Blog"

}

function secondChanges(){
const articleAll = document.querySelectorAll(".article__header")
for(let i = 0; i < articleAll.length; i ++)
    articleAll[i].classList.add("important")
}


applyChanges()
secondChanges()