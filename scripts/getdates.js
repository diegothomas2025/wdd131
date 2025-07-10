const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();

year.textContent = currentYear 


const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;

