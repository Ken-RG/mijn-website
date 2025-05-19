// hier assistentie gebruikt om de scroll pijlen weer te geven

const scrollContainer = document.querySelector(".project-gallery");
const leftArrow = document.getElementById("scrollLeft");
const rightArrow = document.getElementById("scrollRight");

leftArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
});

function updateArrows() {
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    leftArrow.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
    rightArrow.style.display = scrollContainer.scrollLeft < maxScroll ? "block" : "none";
}

scrollContainer.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
window.addEventListener("load", updateArrows);
