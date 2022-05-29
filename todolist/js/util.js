let del = "fa-solid fa-xmark del";
let checkbox = "&#9744;";
let checked = "&#9746;";

function todoTemplate(task) {
    const li = document.createElement("li");
    const ul = document.querySelector("ul");
    const i = document.createElement("i");

    i.classList.add("fa-solid", "fa-xmark", "del");
    li.innerHTML = `${checkbox} ${task} ${i}`;
    ul.appendChild(li);
    todosList.push(task);
}

function clearInput() {
    document.getElementById("todo").value = "";
}

function addTodo() {
    const addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", function() {
        let inputVal = document.getElementById("todo").value;

        if (inputVal.length) {
            todoTemplate(inputVal);
            clearInput();
        }
    });
}