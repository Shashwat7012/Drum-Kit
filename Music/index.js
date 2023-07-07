// This is a comment
var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrums;i++)
{
// Two Parameters.//Dads Example.
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// Two Parameters.//Dads Example.
// Do not use Parenthesis after function in it bcz interpretation will happened.
function handleClick()
{
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML)
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    

    // this.style.color="white";
    // for audio file.
    // var a = new Audio("sounds/tom-1.mp3");
    // a.play();
    //What to do when click detected.
}
// It can be similarly represented as :-
/* document.querySelector("botton").addEventListener("click",function()
{
    alert("I got clicked");
})*/
}
// there is keypress Event through this we can play the music by using our keypad.
// Detecting Keyboared press
document.addEventListener("keypress", function(event)
{
   makeSound(event.key);
   console.log(typeof(event.key))
   buttonAnimation(event.key);
   
});
function makeSound(key){
    switch(key) {
        case "w":
            var a = new Audio("sounds/tom-1.mp3");
             a.play();
             break;
              case "a":
                var a = new Audio("sounds/tom-2.mp3");
                a.play();
                break;
                case "s":
                var a = new Audio("sounds/tom-3.mp3");
                a.play();
                break;
                case "d":
                var a = new Audio("sounds/tom-4.mp3");
                a.play();
                break;
                case "j":
                var a = new Audio("sounds/snare.mp3");
                a.play();
                break;
                case "k":
                var a = new Audio("sounds/kick-bass.mp3");
                a.play();
                break;
                case "l":
                var a = new Audio("sounds/crash.mp3");
                a.play();
                break;
             default:/*it is like else statement*/
    
        }

}
function buttonAnimation (currentKey)
{
     var activebutton = document.querySelector("." + currentKey);
     activebutton.classList.add("pressed");
     setTimeout(function(){
        activebutton.classList.remove("pressed");
     }, 100);
}