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
const $SENDPROGRESS = document.querySelectorAll('.send-inprogress');


let currentdate = new Date();
document.querySelector('.currentdate').textContent = currentdate.getDate() + ".";
document.querySelector('.currentmonth').textContent = currentdate.getMonth() + 1 + ".";
document.querySelector('.currentyear').textContent = currentdate.getFullYear();


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

let done = JSON.parse(localStorage.getItem('done')) || [];

function localmake (){
  localStorage.setItem('todo',JSON.stringify(make));
}

function localprogress (){
  localStorage.setItem('arr',JSON.stringify(progress));
}

function localdone (){
  localStorage.setItem('done',JSON.stringify(done));
}

function localupdate(){
 if (make !==[]) {
 make.forEach((element, index)=>{
 $TASKMAKE.innerHTML += rendermake(element,index);
 $ACCUM.innerHTML = index + 1;
 })
 };
 if (progress !== [] ) {
 progress.forEach((element,index)=>{
$TASKINPROGRESS.innerHTML += renderprogress(element,index);

$ACCUM2.innerHTML = index + 1;})
}
 
if (done !==[]) {
done.forEach((element,index)=>{
  $TASKDONE.innerHTML += renderdone(element,index);
  $ACCUM3.innerHTML = index + 1;
})
}
}


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
  localmake();
})
localupdate();

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
      localprogress();     
         })
 
  function renderprogress(el,i){
   return `
  <div class="card-item" id="${i}">
  <h3 class="card-title">${el.title}</h3>
  <div class="card-content">Task: ${el.message}</div>
  <div class="card-footer">
    <span class="name">Name: ${el.author}</span><br>
    <button type="submit" class="remove-maketask" data-action="delete" id="${i}">Remove</button>
    <button class="sendback" id="${i}">Send Back</button>
    <button class="sendnext" id="${i}">Next</button>
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
localmake();
$TASKINPROGRESS.innerHTML = '';
progress.forEach((element,index)=>{
  $TASKINPROGRESS.innerHTML += renderprogress(element,index);})
    //localStorage.setItem('arr',JSON.stringify(progress)); 
};
localprogress();
$ACCUM.innerHTML = make.length;
$ACCUM2.innerHTML = progress.length;
})



$TASKMAKE.addEventListener('click',function(event){
  console.log(event.target);
  if (event.target.dataset.action === 'delete') {
  let cardParent = event.target.getAttribute('id');
    console.log(cardParent);
    $TASKMAKE.innerHTML = '';
    make.splice(cardParent,1);
    make.forEach((element,index)=>{
      $TASKMAKE.innerHTML += rendermake(element,index);     
    });   

    localmake();
    //localStorage.setItem('todo',JSON.stringify(make));
  let arrlength = make.length;
  $ACCUM.innerHTML = arrlength;

}});




  document.querySelector('.first-trash').addEventListener('click', ()=>{
    let value = document.querySelector('.task-make');
    value.innerHTML = '';
    make.length = 0;
    console.log(make);
    $ACCUM.innerHTML = make.length;
    localmake();
  });



  $TASKINPROGRESS.addEventListener('click', function(tasks){
    let del = tasks.target.getAttribute('class');
    console.log(del);
    let idTask = tasks.target.getAttribute('id');
    console.log(idTask);
    if (del == "sendback") {
      $TASKINPROGRESS.innerHTML = '';
    make.push(progress[idTask]); 
     progress.splice(idTask,1);
    progress.forEach((element,index)=>{
      $TASKINPROGRESS.innerHTML += renderprogress(element,index);
    });
    localprogress();
    $TASKMAKE.innerHTML = '';
    make.forEach((element,index)=>{
      $TASKMAKE.innerHTML += rendermake(element,index);})
      // localStorage.setItem('arr',JSON.stringify(progress)); 
    };
    localmake();
    $ACCUM.innerHTML = make.length;
   if (del == "sendnext") {   
    $TASKINPROGRESS.innerHTML = '';
     done.push(progress[idTask]);  
    progress.splice(idTask,1);
    progress.forEach((element,index)=>{
      $TASKINPROGRESS.innerHTML += renderprogress(element,index);
    });
    localprogress();
    $TASKDONE.innerHTML = '';
    done.forEach((element,index)=>{
    $TASKDONE.innerHTML += renderdone(element,index);
    })
    localdone();
    } $ACCUM2.innerHTML = progress.length;
      $ACCUM3.innerHTML = done.length;
    }  
       );

 
     $TASKINPROGRESS.addEventListener('click',function(event){
          console.log(event.target);
          if (event.target.dataset.action === 'delete') {
          let cardParent = event.target.getAttribute('id');
            console.log(cardParent);
            $TASKINPROGRESS.innerHTML = '';
            progress.splice(cardParent,1);
            progress.forEach((element,index)=>{
              $TASKINPROGRESS.innerHTML += renderprogress(element,index);             
            });   
        
            localprogress();
            let arrlength = progress.length;
          $ACCUM2.innerHTML = arrlength;        
        }});


    document.querySelector('.second-trash').addEventListener('click', ()=>{
      let value = document.querySelector('.task-inprogress');
      value.innerHTML = '';
      progress.length = 0;
      console.log(progress);
      $ACCUM2.innerHTML = progress.length;
      localprogress();
    });

    function renderdone (el,i) {
   return `
   <div class="card-item" id="${i}">
  <h3 class="card-title">${el.title}</h3>
  <div class="card-content">Task: ${el.message}</div>
  <div class="card-footer">
    <span class="name">Name: ${el.author}</span><br>
    <button type="submit" class="remove-task" data-action="delete" id="${i}">Remove</button>
    <button class="sendstart"id="${i}">Start to over</button>
  </div>
</div>`
    }

    $TASKDONE.addEventListener('click',function(tasks){
      let del = tasks.target.getAttribute('class');
      console.log(del);
      let idTask = tasks.target.getAttribute('id');
      console.log(idTask);
      if (del == "sendstart"){
        $TASKDONE.innerHTML = '';
        make.push(done[idTask]);  
        done.splice(idTask,1);
        done.forEach((element,index)=>{
          $TASKDONE.innerHTML += renderdone(element,index);
        });
        localdone();
        $TASKMAKE.innerHTML = '';
    make.forEach((element,index)=>{
    $TASKMAKE.innerHTML += rendermake(element,index);
    })
    localmake();
      }
      $ACCUM3.innerHTML = done.length;
      $ACCUM.innerHTML = make.length;
    })

    $TASKDONE.addEventListener('click',function(event){
      console.log(event.target);
      if (event.target.dataset.action === 'delete') {
      let cardParent = event.target.getAttribute('id');
        console.log(cardParent);
        $TASKDONE.innerHTML = '';
        done.splice(cardParent,1);
        done.forEach((element,index)=>{
          $TASKDONE.innerHTML += renderdone(element,index);             
        });   
            localdone();
        let arrlength = done.length;
      $ACCUM3.innerHTML = arrlength;        
    }});

  document.querySelector('.done-trash').addEventListener('click', ()=>{
    let value = document.querySelector('.task-done');
    value.innerHTML = '';
    done.length = 0;
    console.log(done);
    $ACCUM3.innerHTML = done.length;
    localdone();
  });
