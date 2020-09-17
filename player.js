var songs = ["songs/batman.mp3","songs/superman.mp3","songs/flash.mp3","songs/lanterna.mp3", "songs/darkseid.mp3"];
var title = ["Batman", "Superman","Flash", "Lanterna", "Darkseid"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var currentTime = document.getElementById("currentTime");
var currentSong = 0;    // it point to the current song

var song = new Audio();


window.onload = playSong;   // it will call the function playSong when window is load

function playSong(){
    
    song.src = songs[currentSong];  //set the source of 0th song 
    
    songTitle.textContent = title[currentSong]; // set the title of song
    
    song.play();    // play the song
}

function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        $("#play img").attr("src","img/pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","img/play-button.png");
    }
}

song.addEventListener('timeupdate',function(){ 
    
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';

    convertTime(Math.round(song.currentTime)); //convert decimal no into integer

    if(song.ended){
        next();
    }
});

function convertTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(song.duration));
}
function totalTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += "/" + min + ":" + sec;
}
function next(){
    
    currentSong++;
    if(currentSong > 4){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","img/pause.png");

}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = 4;
    }
    playSong();
    $("#play img").attr("src","img/pause.png");

}

function decreaseVolume(){
    song.volume -= 0.20; // volume value must be between 0 to 1
}

function increaseVolume(){
    song.volume += 0.20;
}
