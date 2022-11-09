//model
let site = document.getElementById(`app`);
let mood = '<img src="images/9140_Moogle.png">'; 
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
    <meter value="${food}" max="100"></meter><button onclick="addValue('food')">Feed</button>
    <meter value="${sleep}" max="100"></meter><button onclick="addValue('sleep')">Sleep</button>
    <meter value="${play}" max="100"></meter><button onclick="addValue('play')">Play!</button>
    </div>
    `;
}

//controller

function addValue(addPoints){
        if (addPoints == 'food' && food < 100) food += 10;
        if (addPoints == 'sleep' && sleep < 100) sleep += 10;
        if (addPoints == 'play' && play < 100) play += 10;
        updateView();
}

function decreasingValue(){
    if (food == 70 || sleep == 70 || play == 70) mood = '<img src="images/AngryMoogle.jpg"';
    if (food == 30 || sleep == 30 || play == 30) mood = '<img src="images/crying _moogle.png"';
    if (food == 0 || sleep == 0 || play == 0) mood = '<img src=""';
    updateView();
}

