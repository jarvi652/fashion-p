var btn = document.querySelector(".button")
var image = document.querySelector(".image")
var thenumber = document.querySelector(".numberGen")

image.style.display ="none"

btn.addEventListener("click", () => {
    var randomNum = Math.floor(Math.random() * 5) + 1
    thenumber.textContent= randomNum
    if(randomNum===2){
        image.style.display ="block"
    }
    else{
        console.log("failed code !!!")
    }
})