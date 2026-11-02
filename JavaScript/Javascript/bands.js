let bandList = [];
function addBand(){
    let input = document.getElementById("band");
    let output = document.getElementById("list");
    let band = input.value;
    bandList.push(band);
    input.value="";
    updateScreen();
}

function clearList(){
    bandList=[];
    updateScreen();
}

function reverseList(){
    bandList.reverse();
    updateScreen();
}
function updateScreen(){
    let output = document.getElementById("list");
    output.textContent = "["+ bandList.join('-');
}
