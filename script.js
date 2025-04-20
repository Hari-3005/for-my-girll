let slideIndex = 0;


function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let texts = document.getElementsByClassName("slide-text");
  let messageContainer = document.querySelector(".message-container");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    texts[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { 
    document.querySelector(".final-message").style.display = "block";
    messageContainer.style.display = "block"; 
    return; 
  }
  slides[slideIndex - 1].style.display = "block";
  texts[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 7142);
}

function startSlideShow() {
  let music = document.getElementById("background-music");
  music.play();
  music.onended = function() {
    music.pause();
  };

  document.querySelector(".slideshow-container").style.display = "block";
  document.querySelector(".message-container").style.display = "block";
  showSlides();
  document.querySelector("button").style.display = "none";
}
