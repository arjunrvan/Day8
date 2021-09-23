
var score = 0;


function count(num) {

    score += num ;

    if (score < 0) {
        score = 0;
    }
    
    document.querySelector('h1').innerHTML = score;

    console.log("is clicked", score);

    if (score > 10 && score <= 20) {
        document.querySelector('#container').style.backgroundColor = 'silver';
    }  else if (score > 20) {
        document.querySelector('#container').style.backgroundColor = 'gold';
    } else {
        document.querySelector('#container').style.backgroundColor = 'white';
    }

}

function changeBg (color) {

    document.querySelector("#container").style.backgroundColor = color;
}


document.getElementById('blue-btn').addEventListener('mouseout',outBtn);
document.getElementById('green-btn').addEventListener('mouseout',outBtn);
document.getElementById('red-btn').addEventListener('mouseout',outBtn);

function outBtn () {
    this.style.backgroundColor = 'black';
}



document.getElementById('blue-btn').addEventListener('mouseover',overBtn);
document.getElementById('green-btn').addEventListener('mouseover',overBtn);
document.getElementById('red-btn').addEventListener('mouseover',overBtn);

function overBtn () {
    this.style.backgroundColor = 'gray';
}

document.getElementById('blue-btn').addEventListener('mousedown',downBtn);
document.getElementById('green-btn').addEventListener('mousedown',downBtn);
document.getElementById('red-btn').addEventListener('mousedown',downBtn);

function downBtn () {
    this.style.backgroundColor = 'darkgray';
}


document.getElementById('blue-btn').addEventListener('mouseup',upBtn);
document.getElementById('green-btn').addEventListener('mouseup',upBtn);
document.getElementById('red-btn').addEventListener('mouseup',upBtn);

function upBtn () {
    this.style.backgroundColor = 'gray';
}