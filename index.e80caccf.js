!function(){const e=document.querySelector(".task-form"),t=document.querySelector(".task"),n=e.querySelector("#title"),r=e.querySelector("#author"),l=e.querySelector("#message"),o=e.querySelector("#btn-create"),a=e.querySelector("#btn-inprogress"),c=e.querySelector(".close-btn"),s=(document.querySelectorAll(".input-task"),document.querySelector(".add")),i=document.querySelector(".addnew"),d=(document.querySelector(".adddone"),document.querySelectorAll(".trash"),document.querySelector(".task-make")),u=document.querySelector(".task-inprogress"),g=document.querySelector(".task-done"),m=document.querySelector(".accum"),L=document.querySelector(".accum2"),h=document.querySelector(".accum3");document.querySelectorAll(".remove-maketask"),document.querySelectorAll(".send-inprogress"),e.querySelectorAll(".input-task");let v=new Date,T=`${v.getDate()}.${v.getMonth()+1}.${v.getFullYear()}.`;document.querySelector(".currentdate").textContent=T,s.addEventListener("click",(e=>{t.classList.toggle("active"),t.style.display="block"})),i.addEventListener("click",(e=>{t.classList.toggle("active"),t.style.display="block"}));let M=JSON.parse(localStorage.getItem("todo"))||[],H=JSON.parse(localStorage.getItem("arr"))||[],f=JSON.parse(localStorage.getItem("done"))||[];function y(){localStorage.setItem("todo",JSON.stringify(M))}function S(){localStorage.setItem("arr",JSON.stringify(H))}function b(){localStorage.setItem("done",JSON.stringify(f))}function k(e,t,n){this.title=e,this.message=t,this.author=n}let p=document.getElementById("btn-create"),E=document.getElementById("btn-inprogress"),q=document.getElementById("title");function $(e,t){return`\n  <div class="card-item" id="${t}">\n  <h3 class="card-title">${e.title}</h3>\n  <div class="card-content">Task: ${e.message}</div>\n  <div class="card-footer">\n    <span class="name">Name: ${e.author}</span><br>\n    <button type="submit" class="remove-maketask" data-action="delete" id="${t}">Remove</button>\n    <button class="send-inprogress" id="${t}">Send</button>\n  </div>\n  </div> `}function A(){n.value="",r.value="",l.value=""}function I(e,t){return`\n  <div class="card-item" id="${t}">\n  <h3 class="card-title">${e.title}</h3>\n  <div class="card-content">Task: ${e.message}</div>\n  <div class="card-footer">\n    <span class="name">Name: ${e.author}</span><br>\n    <button type="submit" class="remove-maketask" data-action="delete" id="${t}">Remove</button>\n    <button class="sendback" id="${t}">Send Back</button>\n    <button class="sendnext" id="${t}">Next</button>\n  </div>\n</div> `}function N(e,t){return`\n   <div class="card-item" id="${t}">\n  <h3 class="card-title">${e.title}</h3>\n  <div class="card-content">Task: ${e.message}</div>\n  <div class="card-footer">\n    <span class="name">Name: ${e.author}</span><br>\n    <button type="submit" class="remove-task" data-action="delete" id="${t}">Remove</button>\n    <button class="sendstart"id="${t}">Start to over</button>\n  </div>\n</div>`}q.addEventListener("keyup",(e=>{console.log(e.currentTarget.value);const t=e.currentTarget.value;p.disabled=!1,E.disabled=!1,""===t&&(p.disabled=!0,E.disabled=!0,q="")})),o.addEventListener("click",(e=>{e.preventDefault();let t=new k(n.value,l.value,r.value);M.push(t);let o=M[M.length-1],a=M.lastIndexOf(o);A(),d.innerHTML+=$(o,a);let c=M.length;m.innerHTML=c,y()})),M!==[]&&M.forEach(((e,t)=>{d.innerHTML+=$(e,t),m.innerHTML=t+1})),H!==[]&&H.forEach(((e,t)=>{u.innerHTML+=I(e,t),L.innerHTML=t+1})),f!==[]&&f.forEach(((e,t)=>{g.innerHTML+=N(e,t),h.innerHTML=t+1})),c.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("active"),t.style.display="none"})),a.addEventListener("click",(e=>{e.preventDefault();let t=new k(n.value,l.value,r.value);H.push(t);let o=H[H.length-1],a=H.lastIndexOf(o);A(),u.innerHTML+=I(o,a);let c=H.length;L.innerHTML=c,S()})),d.addEventListener("click",(function(e){let t=e.target.getAttribute("class");console.log(t);let n=e.target.getAttribute("id");console.log(n),"send-inprogress"==t&&(d.innerHTML="",H.push(M[n]),M.splice(n,1),M.forEach(((e,t)=>{d.innerHTML+=$(e,t)})),y(),u.innerHTML="",H.forEach(((e,t)=>{u.innerHTML+=I(e,t)}))),S(),m.innerHTML=M.length,L.innerHTML=H.length})),d.addEventListener("click",(function(e){if(console.log(e.target),"delete"===e.target.dataset.action){let t=e.target.getAttribute("id");console.log(t),d.innerHTML="",M.splice(t,1),M.forEach(((e,t)=>{d.innerHTML+=$(e,t)})),y();let n=M.length;m.innerHTML=n}})),document.querySelector(".first-trash").addEventListener("click",(()=>{document.querySelector(".task-make").innerHTML="",M.length=0,console.log(M),m.innerHTML=M.length,y()})),u.addEventListener("click",(function(e){let t=e.target.getAttribute("class");console.log(t);let n=e.target.getAttribute("id");console.log(n),"sendback"==t&&(u.innerHTML="",M.push(H[n]),H.splice(n,1),H.forEach(((e,t)=>{u.innerHTML+=I(e,t)})),S(),d.innerHTML="",M.forEach(((e,t)=>{d.innerHTML+=$(e,t)}))),y(),m.innerHTML=M.length,"sendnext"==t&&(u.innerHTML="",f.push(H[n]),H.splice(n,1),H.forEach(((e,t)=>{u.innerHTML+=I(e,t)})),S(),g.innerHTML="",f.forEach(((e,t)=>{g.innerHTML+=N(e,t)})),b()),L.innerHTML=H.length,h.innerHTML=f.length})),u.addEventListener("click",(function(e){if(console.log(e.target),"delete"===e.target.dataset.action){let t=e.target.getAttribute("id");console.log(t),u.innerHTML="",H.splice(t,1),H.forEach(((e,t)=>{u.innerHTML+=I(e,t)})),S();let n=H.length;L.innerHTML=n}})),document.querySelector(".second-trash").addEventListener("click",(()=>{document.querySelector(".task-inprogress").innerHTML="",H.length=0,console.log(H),L.innerHTML=H.length,S()})),g.addEventListener("click",(function(e){let t=e.target.getAttribute("class");console.log(t);let n=e.target.getAttribute("id");console.log(n),"sendstart"==t&&(g.innerHTML="",M.push(f[n]),f.splice(n,1),f.forEach(((e,t)=>{g.innerHTML+=N(e,t)})),b(),d.innerHTML="",M.forEach(((e,t)=>{d.innerHTML+=$(e,t)})),y()),h.innerHTML=f.length,m.innerHTML=M.length})),g.addEventListener("click",(function(e){if(console.log(e.target),"delete"===e.target.dataset.action){let t=e.target.getAttribute("id");console.log(t),g.innerHTML="",f.splice(t,1),f.forEach(((e,t)=>{g.innerHTML+=N(e,t)})),b();let n=f.length;h.innerHTML=n}})),document.querySelector(".done-trash").addEventListener("click",(()=>{document.querySelector(".task-done").innerHTML="",f.length=0,console.log(f),h.innerHTML=f.length,b()}))}();