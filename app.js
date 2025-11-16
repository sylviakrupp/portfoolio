const btnHamburger = document.querySelector(".hamburger")
const menuPanel = document.querySelector(".menu-panel")
const btnXbox = document.querySelector(".x-box")
const menuLinks = document.querySelectorAll(".menu-panel a")
const frameImg = document.querySelector("#frame")
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

let currentImgIx = 0

//console.log("")

btnHamburger.addEventListener("click", (event)=> {
    menuPanel.classList.toggle("active")
})

btnXbox.addEventListener("click", (event)=>{
    menuPanel.classList.toggle("active")
})

document.addEventListener("click", (event) =>{
    if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)){
        menuPanel.classList.remove("active");
    } 
})

menuLinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        menuPanel.classList.remove("active")
    })
})

frameImg.addEventListener("click", ()=> {
    currentImgIx = (currentImgIx+1) % images.length
    frameImg.src = "images/" + images[currentImgIx]
})
