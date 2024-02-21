const submit = document.getElementById("submit");
const newTask = document.getElementById("task");

submit.disabled = true;

newTask.addEventListener("input", () => {
    if (newTask.ariaValueMax.length > 0) {
        submit.disabled = false;
    }  else {
        submit.disabled = true;
    }
})

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    //preventing default submission of the form
    e.preventDefault();

    const task = newTask.value;
 
    const li = document.createElement("li");
    li.textContent = task;
    
    const tasksList = document.getElementById("tasks");
    tasksList.appendChild(li);

    newTask.value = " ";
    submit.disabled = true;

})