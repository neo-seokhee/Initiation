const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEYS = 'todos';
let toDos = []; //Reload 시 불러온 정보를 update 하기 위해 let으로 설정

function saveToDos() {
  //Todo Array를 localstorage에 저장
  localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
}
// localstorage에 Todo를 Array 형태로 저장하기 위해 JSON.stringfy 사용해 변환하여 저장
// JSON.stringfy 사용하지 않으면 같은 Text를 중복으로 저장할 수 없음.
// JSON.stringfy는 JSON.parse를 통해 Array로 다시 변환 가능

function deleteToDo(event) {
  // Button으로 parentNode 삭제하기
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement('li'); // li 생성
  li.id = newToDo.id;
  const span = document.createElement('span'); // span 생성
  span.innerText = newToDo.text; // span에 ToDo 넣기
  const button = document.createElement('button'); // button 생성
  button.innerText = '✅'; // button에 X 넣기
  button.addEventListener('click', deleteToDo); // button에 함수 달기
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); // li에 span, button 넣고 -> li를 HTML에 넣기
}

function onToDoSubmit(event) {
  event.preventDefault(); // Submit Refresh 방지

  const newToDo = toDoInput.value; //Input 값 저장
  toDoInput.value = ''; // Input field 초기화
  const objToDo = {
    //Todo를 specify 하기 위해 난수를 id로 설정
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(objToDo); // Todo를 Array에 추가하기
  paintToDo(objToDo); // HTML에 Todo 넣기
  saveToDos(); // Todo Array를 Localstorage에 업데이트
}

toDoForm.addEventListener('submit', onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEYS);
if (savedToDos !== null) {
  //localstorage에 저장 된 값이 있으면, 불러와서 Array, HTML에 update 해주기
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
