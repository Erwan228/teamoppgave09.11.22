//model
let site = document.getElementById(`app`);
let mood = '<img class="image" src="images/9140_Moogle.png">';  
let food = 100;
let sleep = 100;
let play = 100;
let moussecount = '';
let bonusPictures ='';
let backgroundMusic = new Audio('FFXIV OST Moogle Beast Tribe  _ Mogmender Theme.webm'); 
//view
updateView();
function updateView(){
    site.innerHTML = /*HTML*/ `
    <h1 class="title">Dette er Mousse ${moussecount}. Pass godt på Mousse ${moussecount}!</h1>
    <div>${mood}</div>
    <div class="metersAndButtons">
    <meter class="foodbar" value="${food}" max="100"></meter><button class="foodbutton" onclick="generateValue('food')">Feed</button>
    <meter class="sleepbar" value="${sleep}" max="100" ></meter><button class="sleepbutton" onclick="generateValue('sleep')">Sleep</button>
    <meter class="playbar" value="${play}" max="100"></meter><button class="playbutton" onclick="generateValue('play')">Play!</button>
    </div>
    <div> ${bonusPictures} </div>
    `;
}

function gameOver(){
    site.innerHTML = /*HTML*/ `
    <h1 class="title">Mousse ${moussecount} har fått nok av din elendige behandling!</h1>
    <div class="moogle-pics">${mood}</div>
    <div class="metersAndButtons">
    <button onclick="resetValues()">Reset</button>
    </div>
    `;  
    
}
//controller
decreasingValue();
function addValue(addPoints){
    if (addPoints == 'food' && food < 100) food += 10;
    if (addPoints == 'sleep' && sleep < 100) sleep += 10;
    if (addPoints == 'play' && play < 100) play += 10;
    updateView();
}

function decreasingValue(){
    setTimeout(decreasingValue, 1000);
    food -= 2;
    sleep -= 1; 
    play -= 1.5; 
    if (food >= 70 || sleep >= 70 || play >= 70) mood = '<img class="image" src="images/9140_Moogle.png">'; 
    if (food <=70 && food >= 30 || sleep <= 70 && sleep >= 30 || play <= 70 && play >= 30) mood = '<img class="image" src="images/AngryMoogle.jpg">';
    if (food <= 30 && food >= 0 || sleep <= 30 && sleep >= 0 || play <= 30 && play >= 0) mood = '<img class="image" src="images/crying _moogle.png">';
    if (food <= 0 || sleep <= 0 || play <= 0) {
        mood = '<img class="image" src="images/gameover_moogle.png"<br/><div class="gameover">GAME OVER</div>'
        return gameOver();
    };
    updateView();
}

function resetValues(){
    food = 100;
    sleep = 100;
    play = 100;
    if (moussecount == '') {
        moussecount = 0;
        moussecount += 2;
    }else {moussecount++;}
    updateView();
}

function generateValue(regenerateBonusPicture){
    if (regenerateBonusPicture == 'food') bonusPictures = `
    <div class ="valuePicture" onclick="addValue('food')"><img src="images/cookie.png"></div>`;

    if (regenerateBonusPicture == 'sleep') bonusPictures = `
    <div class ="valuePicture" onclick="addValue('sleep')"><img src="images/1280px-Steel_bed.png"></div>`;

    if (regenerateBonusPicture == 'play') bonusPictures = `
    <div class ="valuePicture" onclick="addValue('play')"><img src="images/toys.png"></div>`;
    console.log(bonusPictures);
    updateView();
}

function playMusic(){
    if(sleep == 100 && food == 100 && play == 100) {backgroundMusic.play(); }

   // window.onload=function(){
    //backgroundMusic.play();}
}
