function play(){

    let move = document.getElementById("sound-love")
    move.classList.remove("soundlove")
    move.classList.add("sound-visible")

    let FirstBtn = document.getElementById("btn1")
    FirstBtn.classList.remove("play")
    FirstBtn.classList.add("hide")

    let SecBtn = document.getElementById("btn2")
    SecBtn.classList.remove("play2")
    SecBtn.classList.add("hide2")

}    
function hide(){

    let SecBtn = document.getElementById("btn2")
    SecBtn.classList.remove("hide2")
    SecBtn.classList.add("play2")

    let move = document.getElementById("sound-love")
    move.classList.remove("sound-visible")
    move.classList.add("soundlove")

    let FirstBtn = document.getElementById("btn1")
    FirstBtn.classList.remove("hide")
    FirstBtn.classList.add("play")
}

function showPhoto(){

    let thdBtn = document.getElementById("btn-3")
    thdBtn.classList.remove("btn-3")
    thdBtn.classList.add("hide_btn-3")

    let fourthBtn = document.getElementById("btn-4")
    fourthBtn.classList.remove("btn-4")
    fourthBtn.classList.add("show-btn-4")

    let show_photo = document.getElementById("hidden-photos")
    show_photo.classList.remove("hidden-photos")
    show_photo.classList.add("show-photos")
    
}

function hidePhotos(){

    let thdBtn = document.getElementById("btn-3")
    thdBtn.classList.remove("hide_btn-3")
    thdBtn.classList.add("btn-3")

    let fourthBtn = document.getElementById("btn-4")
    fourthBtn.classList.remove("show-btn-4")
    fourthBtn.classList.add("btn-4")


    let hide_photos = document.getElementById("hidden-photos")
    hide_photos.classList.remove("show-photos")
    hide_photos.classList.add("hidden-photos")

}


// --------------eyes-------------

document.querySelector('body').addEventListener('mousemove', eyeball)

function eyeball(){
    const eye = document.querySelectorAll(".eye");
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);


        let radian = Math.atan2(event.pageX - x, event.pageY - y)
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rotation+"deg)"

    })
}