const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`

// let firstName = 'Antonia';
// let lastName = 'Francesca';

// function fullName(first, last) {
//     fullName = `${first} ${last}`
//     return fullName;
// }

// console.log(fullName(firstName, lastName));
