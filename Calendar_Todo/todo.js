const todoBox = document.querySelector(".todo_box");
const input = todoBox.querySelector("input");
const submitBtn = todoBox.querySelector("button");
const today = new Date();

const todo_init = {
  // 기본 값은 today
  FullDate: `${today.getFullYear()}.${today.getMonth()}.${today.getDate()}`,
  todos: []
};

const onChange = e => {
  input.value = e.target.value;
};

const onDelete = e => {
  const btn_parentNode = e.target.parentNode;
  btn_parentNode.remove();
  // 삭제한 todo, todos 배열에 반영
  const cleanTodos = todos.filter(todo => {
    return todo.id !== btn_parentNode.id;
  });
  todos = cleanTodos;
  saveTodos();
};

const onSubmit = e => {
  e.preventDefault();
  const value = input.value;
  if (value) {
    renderTodo(value);
  }
  input.value = "";
};

const renderTodo = value => {
  const todo = document.createElement("div");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  todo.classList.add("todo");
  todo.id = todo_init.todos.length + 1;

  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", onDelete);

  span.append(value);
  todo.append(span);
  todo.append(deleteBtn);
  todoBox.append(todo);

  const todoObj = {
    text: value,
    id: todo.id
  };

  todo_init.todos.push(todoObj);
  saveTodos(todo_init.FullDate);
};

const saveTodos = date => {
  // 선택된 날짜를 key값으로 local 저장소에 저장
  localStorage.setItem(`${date}`, JSON.stringify(todo_init.todos));
};
// 기존에 렌더링 되어 있던 요소들을 삭제
const reset = () => {
  const todos = [...document.querySelectorAll(".todo")];
  if (todos.length > 0) {
    todos.map(todo => todo.remove());
  }
};

const load_todos = () => {
  // 선택한 날짜로 todos 조회
  const todos = JSON.parse(localStorage.getItem(`${todo_init.FullDate}`));
  if (todos) {
    reset(); // 기존 렌더링 내용 초기화
    // 렌더링
    todos.map(todo => renderTodo(todo.text));
  } else {
    reset(); // 기존 렌더링 내용 초기화
  }
};

const _init = () => {
  //   load_todos(); // local 저장소 data 불러오기
  input.addEventListener("keydown", onChange);
  submitBtn.addEventListener("click", onSubmit);
};

_init();
