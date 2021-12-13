var front = document.querySelector(".front");
var container = document.querySelector(".container")
var video = document.querySelector(".back video")

front.addEventListener("click", function(){
  container.classList.add("anim");

  setTimeout(function(){
    video.play()
  }, 8000);

})

var front2 = document.querySelector(".front2");
var container2 = document.querySelector(".container2")
var video = document.querySelector(".back2 video")

front2.addEventListener("click", function(){
  container2.classList.add("anim");

  setTimeout(function(){
    video.play()
  }, 8000);

})
