//task question are highlited in comments
//query for the submit button and input task field once in the begining and store those two values in the variables submit and newTask
const submit = document.getElementById("submit");
const newTask = document.getElementById("task");

//disable the submit button by default
submit.disabled = true;

//listen for input to be typed into the input field
newTask.addEventListener("input", () => {
    if (newTask.ariaValueMax.length > 0) {
        submit.disabled = false;
    }  else {
        submit.disabled = true;
    }
})

//listen for submission of form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    //preventing default submission of the form
    e.preventDefault();

    //find the task the user just submitted
    const task = newTask.value;

    //create a list item for the new task and add the task to it
    const li = document.createElement("li");
    li.textContent = task;
    
    //add new elemet to our unordered list
    const tasksList = document.getElementById("tasks");
    tasksList.appendChild(li);

    newTask.value = " ";
    submit.disabled = true;

})