//model
let site = document.getElementById(`app`);
let mood; 
let hunger = 0;
let sleep = 0;
let play = 0;

//view
updateView();
function updateView(){
    site.innerHTML = /*HTML*/ `
    <h1>Dette er Mousse. Pass godt på Mousse!</h1>
    <div>${mood}</div>
    
    <meter value="${hunger}" max="100"><button onclick=""></button>
    <meter value="${sleep}" max="100"><button></button>
    <meter value="${play}" max="100"><button></button>
    `;
}

//controller

function reduce(){
    
}

