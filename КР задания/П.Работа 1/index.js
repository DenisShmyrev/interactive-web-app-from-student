let input = document.getElementById("input");
let addButton = document.getElementById("add-button");
let container = document.getElementById("list");

let todos= JSON.parse(localStorage.getItem("todos")) ?? []; 
// ?? = если слева undefined илии null, то он применит правую часть

render();

addButton.addEventListener("click", () => {
    let inputValue = input.value;
    if (inputValue===""){
      alert("Строка ввода не должна быть пустой!");
      return;
      }
    todos.push(inputValue);
    render();
    saveTolocalStorage();
  });
  
  container.addEventListener("click", (event) => {
    let todoId = Number(event.target.getAttribute("data-id"));
    todos.splice(todoId, 1);
    render();
    saveTolocalStorage();
  });
    
  function render() {
    let newInnerHtml = todos.reduce((prev, current, index) => {   //начало
      let newValue = `
  <div style="display: flex">
  <div>${current}</div>
  <button data-id="${index}">Удалить</button>
  </div>
  `;
      return prev + newValue;
    }, "");   //конец
    container.innerHTML = newInnerHtml;
  }
  
  function saveTolocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  