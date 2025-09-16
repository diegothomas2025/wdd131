const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`

const hambutton = document.querySelector("#menu");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});
