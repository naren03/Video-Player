const video = document.getElementById('video');
const toggle = document.getElementById('toggle');
const timestamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');
const song1 = document.getElementById('song1');
const song2 = document.getElementById('song2');

// play and pause using button
toggle.addEventListener('click', toggleBtn);
//play and pause directly clicking on video
video.addEventListener('click', directToggle);

//update timestamp
video.addEventListener('timeupdate', changeTime);

//progress bar
progress.addEventListener('change', changeProgress);

function directToggle() {
	if (toggle.classList.contains('fa-play')) {
		video.play();
		toggle.classList.remove('fa-play');
		toggle.classList.add('fa-pause');
	} else {
		video.pause();
		toggle.classList.remove('fa-pause');
		toggle.classList.add('fa-play');
	}
}

function toggleBtn(e) {
	if (e.target.classList.contains('fa-play')) {
		video.play();
		e.target.classList.remove('fa-play');
		e.target.classList.add('fa-pause');
	} else {
		video.pause();
		e.target.classList.remove('fa-pause');
		e.target.classList.add('fa-play');
	}
}

function changeTime() {
	let curMins = Math.floor(video.currentTime / 60);
	let curSecs = Math.floor(video.currentTime % 60);
	let totalMins = Math.floor(video.duration / 60);
	let totalSecs = Math.floor(video.duration % 60);

	if (curMins < 10) {
		curMins = '0' + curMins;
	}
	if (curSecs < 10) {
		curSecs = '0' + curSecs;
	}
	if (totalMins < 10) {
		totalMins = '0' + totalMins;
	}
	if (totalSecs < 10) {
		totalSecs = '0' + totalSecs;
	}

	//updating timestamp continously
	timestamp.textContent = `${curMins}:${curSecs}/${totalMins}:${totalSecs}`;

	//update the progress bar
	updateProgress((video.currentTime / video.duration) * 100);
}

function updateProgress(curValue) {
	progress.value = curValue;
}

function changeProgress() {
	video.currentTime = (progress.value * video.duration) / 100;
}

song1.addEventListener('click', addToPlayer);
song2.addEventListener('click', addToPlayer);

function addToPlayer(e) {
	video.src = e.target.src;
	video.setAttribute('autoplay', 'true');
	toggle.classList.remove('fa-play');
	toggle.classList.add('fa-pause');
}
