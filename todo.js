let input = document.querySelector("#target");
let button = document.querySelector("#btn");
let list = document.querySelector("ul");

const todoList = [];

function addTodo() {
  if (input.value === "") return;
  todoList.unshift(input.value);
  setTodo();
  console.log(todoList);
}

function setTodo() {
  let htmlArr = "";
  for (i = 0; i < todoList.length; i++) {
    let item = `<li>
    <div>${todoList[i]}</div>
  <div class="tds">
    <button id="bttn">Edit</button>
    <button  id="bttn">Delete</button>
  </div>
</li>`;
    htmlArr += item;
  }
  list.innerHTML = htmlArr;
  input.value = "";
}

button.addEventListener("click", addTodo);

const arr = ["ghana", "togo"];
console.log(arr[1]);

// 0 1 < todoList.length
