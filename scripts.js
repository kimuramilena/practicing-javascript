// funcao que adc tarefa
function addTask() {

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

        //clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".shopping-title").textContent = taskTitle;

        //remover as classes desnecesssarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona tarefa na lista
        const list = document.querySelector("#shopping-list");

        list.appendChild(newTask);

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        
        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        //limpar texto
        document.querySelector("#task-title").value = "";
    }

}

//funcao de remover tarefa
function removeTask (task) {
    task.parentNode.remove(true);
}

//funcao de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");

}

//evento de adc tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();
    

});