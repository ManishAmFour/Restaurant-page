import { ToDoList} from "./document.js";

DomArrange();

let List = JSON.parse(localStorage.getItem(`List`));

function DomArrange(){

document.querySelector(`.create-button`).addEventListener(`click`,()=>{

let InputFields = document.createElement(`div`);
InputFields.innerHTML = `<div>
<input class="input-projectName input-fields">
<input class="input-title input-fields">
<input class="input-description input-fields">
<input class="input-dueDate input-fields">
<input class="input-priority input-fields">
<input class="input-notes input-fields">
<input class="input-checklist input-fields">
<button class="enter-button">Enter</button>
</div>`

document.getElementById(`content`).appendChild(InputFields);
CreationOfTodo();
});
}


function CreationOfTodo(){

document.querySelector(`.enter-button`).addEventListener(`click`,()=>{

let ProjectName  = document.querySelector(`.input-projectName`).value;
let Title  = document.querySelector(`.input-title`).value;
let description  = document.querySelector(`.input-description`).value;
let dueDate  = document.querySelector(`.input-dueDate`).value;
let priority  = document.querySelector(`.input-priority`).value;
let notes  = document.querySelector(`.input-notes`).value;
let checklist  = document.querySelector(`.input-checklist`).value;
        
 let NewObject = new ToDoList(ProjectName,Title,description,dueDate,priority,notes,checklist);

List.push(NewObject);
SavingTheList();
CreationOfEmptyDiv();
        
})}

function SavingTheList(){

localStorage.setItem(`List`, JSON.stringify(List));
}


function CreationOfEmptyDiv(){

document.querySelector(`.project-list`).innerHTML += `<div class="empty-div"></div>`


}

RenderToDo();

function RenderToDo(){

List.forEach((element,index1)=>{

    console.log(index1)

document.querySelectorAll(`.project-list`).forEach((ind,index2)=>{


    console.log(index2)

    /*if(index1 === index2){


    }*/



})


})



}