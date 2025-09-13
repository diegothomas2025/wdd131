let input = document.querySelector("#favchap");
let button = document.querySelector("button");
let list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        let deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
        input.focus();
        input.value = ""

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
            input.value = ""
});
    } else { 
        alert("Enter a chapter");
        input.focus();
    }
});



