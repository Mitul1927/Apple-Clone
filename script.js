/* ************************************************************************ */
// section 3 video pause button
var video = document.getElementById("myVideo");
// Get the button
var btn = document.getElementById("myBtn");
var icon = document.getElementById("icon");
// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    //btn.innerHTML = "Pause";
  } else {
    video.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    //btn.innerHTML = "Play";
  }
}
/* ************************************************************************ */
