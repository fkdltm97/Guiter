const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  // console.log(event.target.parentNode)
  toDos = cleanToDos;
  saveToDos();
}

// toDos를 가져와서 로컬에 저장하는 일
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON.stringify()는 js의 object를 string으로 바꿔준다.
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "삭제";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span); // appendChild : 상위폴더에 넣는다. 즉..li에 span을 넣는다.
  li.appendChild(delBtn); // li에 delBtn을 넣는다.
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos(); // push 이후에 호출
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();