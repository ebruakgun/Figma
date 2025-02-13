const videoModalElement = document.getElementById("videoModal");

videoModalElement.addEventListener("shown.bs.modal", (event) => {
  const myVideoElement = document.getElementById("myVideo");
  myVideoElement.play();
});

videoModalElement.addEventListener("hide.bs.modal", (event) => {
  const myVideoElement = document.getElementById("myVideo");
  myVideoElement.pause();
});

// carousel
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;
$(".carousel-control-next").on("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    //check if you can go any further
    scrollPosition += cardWidth; //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
  }
});

$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});
