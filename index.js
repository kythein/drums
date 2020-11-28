//document.querySelector(".set").addEventListener("click", handleClick);

var totalBtn = document.querySelectorAll(".set .drum").length;

//click pressed
for(var i = 0; i < totalBtn; i++){
  document.querySelectorAll(".set .drum")[i].addEventListener("click", function(){
    var buttonText = this.innerHTML;
    sound(buttonText);
    animation(buttonText);
  });
}
//can also document.querySelector(".set .drum").addEventListener("click", handleClick); without () when calling function
// function handleClick(){
//   alert("I got clicked!");
// }


//Keyboard pressed
document.addEventListener("keydown", function(event){
  sound(event.key);
  animation(event.key);
});

//play relevant sound
function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    default:
      console.log(key + " key is not programmed. Check the above cases again.");
  }
}


function animation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  //add a gray shadow (written in the css file)
  activeBtn.classList.add("pressed");
  //make it go back to original style without shadow after 0.1second/100milsecond
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  }, 100);

}
