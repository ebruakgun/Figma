// script.js
document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.getElementById("videoContainer");
  const myVideo = document.getElementById("myVideo");
  const closeVideo = document.getElementById("closeVideo");

  myVideo.addEventListener("play", function () {
    videoContainer.style.display = "block";
  });

  closeVideo.addEventListener("click", function () {
    videoContainer.style.display = "none";
    myVideo.pause();
  });
});
