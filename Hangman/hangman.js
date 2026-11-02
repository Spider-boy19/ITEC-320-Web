let POSSIBLE_WORDS = ["obdurate", "verismilitude", "defenstrate", "obsequious", "dissonant", "Toady", "imdempotent"];

function newGame(){
    let RandomIntex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[RandomIntex];
    let clurString = "";
    for(let i = 0; i<word.length;i++){
        clurString +="_";
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
function guest(){
    
}