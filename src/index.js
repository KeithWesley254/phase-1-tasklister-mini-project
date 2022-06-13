document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  const description  = document.querySelector("#new-task-description")
  const tasks = document.querySelector("#tasks")
//Prevents the page from automatically refreshing after pressing submit.
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    
    const list =  description.value
//The alert lets the user know they need to input something in the field.    
    if(!list){
      alert("Get serious Soldier and Input something!")
    }
//This will create div elements in the html when someone adds a description.
    const mainDiv = document.createElement('div');
    mainDiv.classList.add("task");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const inputElement = document.createElement("input");
    inputElement.classList.add("text")
    inputElement.type = "text";
    inputElement.setAttribute("readonly", "readonly")
    inputElement.value = list;
//This was linking my different containers to parent containers desired. mainDiv being highest child of tasks.    
    mainDiv.appendChild(inputElement)
    mainDiv.appendChild(contentDiv)
    tasks.appendChild(mainDiv)

    const actionsElement = document.createElement("div");
    actionsElement.classList.add("actions");

    const editElement =  document.createElement("button");
    editElement.classList.add("edit");
    editElement.innerHTML = "Edit";

    const deleteElement = document.createElement("button");
    deleteElement.classList.add("delete");
    deleteElement.innerHTML = "Delete";
    
    actionsElement.appendChild(editElement);
    actionsElement.appendChild(deleteElement);
    mainDiv.appendChild(actionsElement);
//All of the edit elements, delete, actions form a new container for the description
//of the user to do list.

//Event listeners here react to clicks on the buttons that let the user edit or delete the list.
    editElement.addEventListener('click', ()  => {
      if(editElement.innerText.toLowerCase() == "edit"){
        inputElement.removeAttribute("readonly");
        inputElement.focus();
        editElement.innerText = "Save";
      }else{
        inputElement.setAttribute("readonly", "readonly");
        editElement.innerText = "Edit";
      }
    });
    deleteElement.addEventListener('click', () => {
      tasks.removeChild(mainDiv)
    });
  });
});
//Ran out of brain power to link date with the task description.