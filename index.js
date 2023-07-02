const inputArea = document.querySelector('.enter-area');
 const listContainer = document.getElementById('list-container');

  function addTask(){

    if(inputArea.value === ""){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li');
        let priority = document.createElement('select');
        priority.innerHTML = `
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    `;
        li.innerHTML = `${inputArea.value}  - Priority: `;
        li.appendChild(priority);
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputArea.value = '';
    saveData();
 }
 listContainer.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }

 },false);

 function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
 }
 // display save data whenever we open website again.
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();