const carousel = document.querySelector(".Reasons")
FirstP = carousel.querySelectorAll("p")[0];
arrowIcons = document.querySelectorAll(".wrapper button")



let IsDragStart = false, prevPageX, prevScrollLeft;

let firstPWidth = FirstP.clientWidth  ;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstPWidth : firstPWidth;
    });
});

const dragStart = (e)  => {
    IsDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!IsDragStart) return;
    e.preventDefault(); 
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
} 


const dragStop = () => {
    IsDragStart = false;
    carousel.classList.remove("dragging");

}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragStop)

