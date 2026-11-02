let POSSIBLE_WORDS = ["obdurate", "verismilitude", "defenstrate", "obsequious", "dissonant", "Toady", "imdempotent"];

function newGame(){
    let RandomIntex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    let word = POSSIBLE_WORDS[RandomIntex];
    updateScreen
}
function guest(){
    let input = document.getElementById(guess);
    let letter = input.value;
    let guesses = "";
    guesses+=letter;


function updateScreen(){
    let clurString = "";
    for(let i = 0; i<word.length;i++){
        let letter = word.charAt(i)[]
        if(){
            clurString += letter+" ";
        } else{
            clurString +="_";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}
}