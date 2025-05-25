const scrollContainer = document.querySelector(".project-gallery-outer");
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
    const isScrollable = scrollContainer.scrollWidth > scrollContainer.clientWidth;

    leftArrow.style.display = isScrollable && scrollContainer.scrollLeft > 0 ? "block" : "none";
    rightArrow.style.display = isScrollable && scrollContainer.scrollLeft < maxScroll ? "block" : "none";
}

function centerGallery() {
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    scrollContainer.scrollLeft = maxScroll / 2;
}

scrollContainer.addEventListener("scroll", updateArrows);
window.addEventListener("resize", () => {
    updateArrows();
    centerGallery();
});
window.addEventListener("load", () => {
    updateArrows();
    centerGallery();
});
