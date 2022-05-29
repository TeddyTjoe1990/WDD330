const todosList = [];

let savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
savedTasks.forEach(todoTemplate);


function todoTemplate(task) {
    const li = document.createElement("li");
    const ul = document.querySelector("ul");

    li.innerHTML = `<i class="fa-regular fa-square"></i><span>${task}</span> <i class="fa-solid fa-xmark del"></i>`;
    ul.appendChild(li);
    todosList.push(task);
}

let count = 0;
const tasksLeft = document.querySelector("#tasksLeft");
tasksLeft.textContent = 0;

//*** Add Todo ***
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", function() {
    let inputVal = document.getElementById("todo").value;

    if (inputVal.length) {
        todoTemplate(inputVal);
        clearInput();
        count++;
        const tasksLeft = document.querySelector("#tasksLeft");
        tasksLeft.textContent = count;

        let localSet = localStorage.setItem("todos", JSON.stringify(todosList));
    } else {
        alert("This field cannot be empty")
    }
    return count;
});

function clearInput() {
    document.getElementById("todo").value = "";
}

const todosEntries = document.querySelector(".todosEntries");

if (todosEntries.children) {

    todosEntries.addEventListener("click", (e) => {
        if (e.target.classList.contains("del")) {
            const localList = JSON.parse(localStorage.getItem("todos")) || [];
            const index = localList.indexOf(
                e.target.parentElement.textContent.trim()
            );
            localList.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(localList));


            e.target.parentElement.remove();

            if (count > 0) {
                count--;
            }

            const tasksLeft = document.querySelector("#tasksLeft");
            tasksLeft.textContent = count;
        }
    });

    const unchecked = document.querySelectorAll(".fa-regular");

    console.log(unchecked);

    unchecked.forEach((unchecked) => {
        unchecked.addEventListener("click", function(e) {
            e.target.classList.toggle("fa-square-check");
            e.target.parentElement.classList.toggle("completed");
        });
    });
}

const active = document.querySelector(".active");
const all = document.querySelector("#all");
const activeTask = document.querySelector("#active");
const completedTask = document.querySelector("#completed");

activeTask.addEventListener("click", function() {
    activeTask.classList.add("active");
    all.classList.remove("active");
    completedTask.classList.remove("active");

    const li = document.querySelectorAll("li.completed");
    li.forEach(li => { li.classList.add("hidden") })

    const activeLi = document.querySelectorAll("li:not(.completed")
    activeLi.forEach(activeLi => { activeLi.classList.remove("hidden") })

    document.querySelector(".tasks").textContent = activeLi.length;

});

completedTask.addEventListener("click", function() {
    completedTask.classList.add("active");
    activeTask.classList.remove("active");
    all.classList.remove("active");

    const li = document.querySelectorAll("li");
    li.forEach(li => { li.classList.add("hidden") })
    const completeLi = document.querySelectorAll("li.completed")
    completeLi.forEach(completeLi => { completeLi.classList.remove("hidden") })

    document.querySelector(".tasks").textContent = completeLi.length;
});

all.addEventListener("click", function() {
    all.classList.add("active");
    activeTask.classList.remove("active");
    completedTask.classList.remove("active");

    const li = document.querySelectorAll("li");
    li.forEach(li => { li.classList.remove("hidden") })

    document.querySelector(".tasks").textContent = li.length;
});


window.onload = (event) => {
    let liList = document
        .querySelector(".todosEntries")
        .getElementsByTagName("li");
    let liLength = liList.length;

    document.querySelector(".tasks").textContent = liLength;
};