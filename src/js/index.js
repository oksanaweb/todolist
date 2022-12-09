const $FORM = document.querySelector('.task-form');
const $TASK = document.querySelector('.task')
const $TITLE = $FORM.querySelector("#title");
const $AUTHOR = $FORM.querySelector("#author");
const $MESSAGE = $FORM.querySelector('#message');
const $CREATE = $FORM.querySelector("#btn-create");
const $BTNINPROGRESS = $FORM.querySelector("#btn-inprogress");
const $CLOSEFORM = $FORM.querySelector('.close-btn');

const $ADD = document.querySelector('.add');
const $ADDNEW = document.querySelector('.addnew');
const $ADDDONE = document.querySelector('.adddone');
const $TRASH = document.querySelectorAll('.trash');
const $TASKMAKE = document.querySelector('.task-make');
const $TASKINPROGRESS = document.querySelector('.task-inprogress');
const $TASKDONE = document.querySelector('.task-done');
const $ACCUM = document.querySelector('.accum');
const $ACCUM2 = document.querySelector('.accum2');
const $ACCUM3 = document.querySelector('.accum3');
const $DELETE = 
document.querySelectorAll('.remove-maketask');
const $SENDPROGRESS = document.querySelectorAll('.send-inprogress')



$ADD.addEventListener('click',(e)=>{
  $TASK.classList.toggle("active"); 
  $TASK.style.display = "block";
})

$ADDNEW.addEventListener('click',(e)=>{
  $TASK.classList.toggle("active"); 
  $TASK.style.display = "block";
})


let make = JSON.parse(localStorage.getItem('todo')) || [] 
;
let progress = JSON.parse(localStorage.getItem('arr')) || [];
let done = [];

function TaskUser (title,message,author) {
this.title = title;
this.message = message;
this.author = author;
}

$CREATE.addEventListener('click',(event)=>{
  event.preventDefault();
  let todo = new TaskUser ($TITLE.value, $MESSAGE.value,$AUTHOR.value);  
  make.push(todo);
  let newTask = make[make.length-1];
  let newTaskIndex = make.lastIndexOf(newTask);
  ClearValue();
  $TASKMAKE.innerHTML += rendermake(newTask,newTaskIndex);
  let arrlength = make.length;
  $ACCUM.innerHTML = arrlength;
localStorage.setItem('todo',JSON.stringify(make));
})






function rendermake(el,i) {
  return `
  <div class="card-item" id="${i}">
  <h3 class="card-title">${el.title}</h3>
  <div class="card-content">Task: ${el.message}</div>
  <div class="card-footer">
    <span class="name">Name: ${el.author}</span><br>
    <button type="submit" class="remove-maketask" data-action="delete" id="${i}">Remove</button>
    <button class="send-inprogress" id="${i}">Send</button>
  </div>
  </div> `;
    }; 


  function ClearValue(){
    $TITLE.value = "";
    $AUTHOR.value = "";
    $MESSAGE.value = "";
  }

  $CLOSEFORM.addEventListener('click',(e)=>{
    event.preventDefault();
    $TASK.classList.toggle("active"); 
    $TASK.style.display = "none";
    })

    $BTNINPROGRESS.addEventListener('click',(event)=>{
      event.preventDefault();
      let todo = new TaskUser ($TITLE.value, $MESSAGE.value,$AUTHOR.value);
      progress.push(todo);
      let lasttask = progress[progress.length-1];
      let lasttaskindex = progress.lastIndexOf(lasttask);
      ClearValue ();
      $TASKINPROGRESS.innerHTML += renderprogress(lasttask,lasttaskindex); 
      let arrProgresslength = progress.length;
      $ACCUM2.innerHTML = arrProgresslength;
      localStorage.setItem('arr',JSON.stringify(progress));     
         })
 
  function renderprogress(el,i){
   return `
  <div class="card-item" id="${i}">
  <h3 class="card-title">${el.title}</h3>
  <div class="card-content">Task: ${el.message}</div>
  <div class="card-footer">
    <span class="name">Name: ${el.author}</span><br>
    <button type="submit" class="remove-maketask" data-action="delete" id="${i}">Remove</button>
    <button class="send-inprogress" id="${i}">Send Back</button>
  </div>
</div> `;}




$TASKMAKE.addEventListener('click', function(tasks){
let del = tasks.target.getAttribute('class');
console.log(del);
let idTask = tasks.target.getAttribute('id');
console.log(idTask);
if (del == "send-inprogress") {
  $TASKMAKE.innerHTML = '';
progress.push(make[idTask]);  
make.splice(idTask,1);
make.forEach((element,index)=>{
  $TASKMAKE.innerHTML += rendermake(element,index);
});
progress.forEach((element,index)=>{
  $TASKINPROGRESS.innerHTML += renderprogress(element,index);})
  localStorage.setItem('arr',JSON.stringify(progress)); 
};})

$TASKMAKE.addEventListener('click',deleteTask); 
function deleteTask (event){
  console.log(event.target);
  if (event.target.dataset.action === 'delete') {
  let cardParent = event.target.closest('.card-item');
    console.log(cardParent);
   cardParent.remove();
  let idTask = event.target.closest('id');
  console.log(idTask); 
  make.splice(idTask,1); 
  localStorage.setItem('todo',JSON.stringify(make));
  let arrlength = make.length;
  $ACCUM.innerHTML = arrlength;
  }
  }