// function for adding data into localstorage
function setLocalStorage(list) {
    localStorage.setItem(list, JSON.stringify(list));
}


// function for take data from the localstorage 
function getLocalStorage(list, template) {
    let savedTasks = JSON.parse(localStorage.getItem(list)) || [];
    savedTasks.forEach(template);
}