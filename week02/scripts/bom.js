let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list = document.querySelector("#list");

let li = document.createElement("li");
let deleteButton = document.createElement('button');

li.textContent = input.value;
button.textContent = "❌"

li.append(deleteButton);
li.append(list);
