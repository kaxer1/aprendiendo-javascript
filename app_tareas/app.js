document.getElementById('formTask').addEventListener('submit',saveTask);

function saveTask(e){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    let task = {
        title, //title: title
        description //description: description ----> es una forma rapida de escribir codigo CLAVE: VALOR
    };

    if(localStorage.getItem('tasks') === null){ // si es obtienen valores nulos de almacenados en tasks en el navegador.
        let tasks = [];
        tasks.push(task); //envio los datos al arreglo
        localStorage.setItem('tasks', JSON.stringify(tasks)); // almaceno datos en el navegador
    } else { // obtener y actualizarlas
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task); //actualiza nuevas tareas
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
    };    
    
    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault(); 
}

function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('mostrar');

    tasksView.innerHTML = '';

    for(let i=0; i < tasks.length; i++){
        let title = tasks[i].title;//almacena uno por uno el titulo de la tarea
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card"> 
            <div class="card-body">
                <p>${title} - ${description}</p> 
                <a class="btn btn-danger" onclick="deleteTasks('${title}')"> ELIMINAR </a>
            </div>
        </div>` //muestra el titulo en pantalla
    }
}

function deleteTasks(title){
    let tasks = JSON.parse(localStorage.getItem('tasks')); // obtuve datos
    //quite el dato
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].title == title){
            tasks.splice(i, 1);
        }
    }
    //almaceno otra vez los datos
    localStorage.setItem('tasks', JSON.stringify(tasks))
    getTasks();
}
getTasks();


/*
    localStorage.setItem('tasks', JSON.stringify(task)); //almacena en el navegador los datos. 
    localStorage.getItem('tasks'); //.getItem para obtener los datos almacenados en el navegador
    JSON.parse()--->transformar de string a objeto
    JSON.stringify()--->transformar de objeto a string
*/