
var video = document.getElementById('vid');
var vol = 1;

var isPlay = false;


function playVid () {
    video.play();
   
}

function pauseVid () {
    video.pause();

}

// function minVol () {
//     vol -= 0.1
    
//     if (vol <= 0) {
//         vol = 0;
//     }

//     console.log(vol);
//     // update video element
//     video.volume = vol;
// }

// function maxVol () {
//     vol += 0.1
    
//     if (vol >= 1) {
//         vol = 1;
//     }

//     console.log(vol);
//     // update video element
//     video.volume = vol;

// }

function updateVol (num) {
    vol += num;

    if (vol >= 1) {
        vol = 1;
    } else if (vol <= 0) {
        vol = 0;
    } 

    console.log(vol);
    // update video element
    video.volume = vol;

}

function playAlt () {

    if (isPlay == false) {
        video.play();
        isPlay = true;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-pause'></i>";

    } else if (isPlay == true) {
        video.pause();
        isPlay = false;
        document.getElementById('switch-btn').innerHTML = "<i class='fas fa-play'></i>";
    }
}

function switchVid (filename) {
    video.src = filename;
}