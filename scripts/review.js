let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector("#reviewCountDisplay");
    if (display) {
        display.textContent = `You have submitted ${reviewCount} reviews`;
    }
})