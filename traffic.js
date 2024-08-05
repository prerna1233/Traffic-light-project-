function turnOnRed(){
    changelight()
 document.getElementById('stopLight').style.backgroundColor='red';
 
}

function turnOnYellow(){
    changelight()
    document.getElementById('readyLight').style.backgroundColor='yellow';
}

function turnOnGreen(){
    changelight()
    document.getElementById('goLight').style.backgroundColor='green';
}


function changelight(){
    document.getElementById('stopLight').style.backgroundColor='grey';
    document.getElementById('readyLight').style.backgroundColor='grey';
    document.getElementById('goLight').style.backgroundColor='grey';
}