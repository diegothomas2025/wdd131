const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();

year.textContent = currentYear 


const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;

const ulContainer = document.querySelector(".navigation");
const hamburguerButton = document.querySelector("#menu");

hamburguerButton = addEventListener("click", () => {
    ulContainer.classList.toggle("show");
    hamburguerButton.classList.toggle("show");

});