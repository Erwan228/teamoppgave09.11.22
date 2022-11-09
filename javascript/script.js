//model
let site = document.getElementById(`app`);
let mood; 
let food = 0;
let sleep = 0;
let play = 0;

//view
updateView();
function updateView(){
    site.innerHTML = /*HTML*/ `
    <h1>Dette er Mousse. Pass godt på Mousse!</h1>
    <div class="moogle-pics">${mood}</div>
    <div class="metersAndButtons">
    <meter value="${food}" max="100"><button onclick="addValue()">Feed</button>
    <meter value="${sleep}" max="100"><button onclick="addValue()">Sleep</button>
    <meter value="${play}" max="100"><button onclick="addValue()">Play!</button>
    </div>
    `;
}

//controller

function addValue(){
    
}

