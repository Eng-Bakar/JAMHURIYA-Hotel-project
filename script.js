let OpenMenu = document.querySelector("#OpenMenu")
let CloseMenu = document.querySelector("#CloseMenu")
let NavigationText = document.querySelector("#home-anchor")
let Buttons = document.querySelector(".Btn")

OpenMenu.addEventListener("click", function(){
    NavigationText.style.display = "block";
    Buttons.style.display = "block"
    OpenMenu.style.display = "none"
    CloseMenu.style.display = "flex"
})

CloseMenu.addEventListener("click", function(){
    NavigationText.style.display = "none"
    Buttons.style.display = "none"
    OpenMenu.style.display = "block"
    CloseMenu.style.display = "none"
})



// let OpenMenu = document.querySelector("#OpenMenu");
// let CloseMenu = document.querySelector("#CloseMenu");
// let NavigationText = document.querySelector("#home-anchor");
// let Buttons  = document.querySelector(".Btn");

// OpenMenu.addEventListener("click", () => {
//   NavigationText.style.display = "block";
//   Buttons.style.display = "flex";
//   OpenMenu.style.display = "none";
//   CloseMenu.style.display = "block";
// });

// CloseMenu.addEventListener("click", () => {
//   NavigationText.style.display = "none";
//   Buttons.style.display = "none";
//   OpenMenu.style.display = "block";
//   CloseMenu.style.display = "none";
// });
