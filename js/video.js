var video;
var volume_num;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume_num = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = volume_num+"%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow down video, current speed is " + video.playbackRate);
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed up video, current speed is " + video.playbackRate);
	video.playbackRate *= 1.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("video length is " + video.duration);
	console.log("Skip ahead, current timestamp is " + video.currentTime);
	if ((video.currentTime + 10) >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("New timestamp is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	console.log("Mute/unmute, current status is " + video.muted);
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	console.log("New status is " + video.muted);
});

document.querySelector("#slider").addEventListener("change", function () {
	volume_num = document.querySelector("#slider").value;
	console.log("Setting volume to " + volume_num);
	video.volume = volume_num/100;
	document.querySelector("#volume").innerHTML = volume_num+"%";
});

document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector("#player1").classList.remove("oldSchool");
});
