
let player; 

//https://www.w3schools.com/js/js_es6.asp
const startplayer = () => {
	player = document.getElementById('video_player');
	player.controls = false;
} 

const play_vid = () => {
	player.play();
}

const pause_vid = () => {
	player.pause();
}

const stop_vid = () => {
	player.pasue();
	player.currentTime = 0;
}

const change_vol = () => {
	player.volume = document.getElementById('change_vol').value;
}

document.addEventListener('DOMContentLoaded', function() { startplayer(); }, false);