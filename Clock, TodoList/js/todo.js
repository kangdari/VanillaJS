const todoContainer = document.querySelector('.todoContainer');
const todoForm = document.querySelector('.js-form');
const todoInput = todoContainer.querySelector('input');

let todos = []; // todo 저장 배열
// todo 작성
const printTodo = (input) => {
    const todo = document.createElement('div');
    const todoText = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const checkBtn = document.createElement('button');

    todo.classList.add('todo');
    todoText.innerText = input.length < 30 ?
        input :
        `${input.slice(0, 20)}...`;
    todo.id = todos.length + 1;

    deleteBtn.classList.add('btn');
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', deleteTodo)

    checkBtn.classList.add('btn');
    checkBtn.innerText = 'O';
    checkBtn.addEventListener('click', () => {
        // todo에 checkec 클래스 추가
        todo.classList.toggle('checked');
    })

    todo.appendChild(todoText);
    todo.appendChild(checkBtn);
    todo.appendChild(deleteBtn);
    todoContainer.appendChild(todo);
    // local 저장소에 저장하기 위한 todo 객체
    const todoObj = {
        input: input,
        id: todos.length + 1,
    }
    todos.push(todoObj);
    saveTodos();
}

// local 저장소에 저장, 새로고침 시 todos 유지
const saveTodos = () =>{
    localStorage.setItem('TODOS_LS', JSON.stringify(todos));
};

// local 저장소에서 저장된 todo가 있으면 load
const loadTodo = () => {
    const loadedTodos = localStorage.getItem('TODOS_LS')
    if(loadedTodos){
        const parseTodos = JSON.parse(loadedTodos)
        // parseTodos.forEach(todo => console.log(todo))
        for(let todo of parseTodos){
            printTodo(todo.input);
        }
    }
};

const deleteTodo = (e) => {
    const btn = e.target; // 삭제 버튼을 누른 요소
    const todo = btn.parentNode;
    todoContainer.removeChild(todo);
    // local 저장소에서도 제거한 todo 삭제
    const filteredTodos = todos.filter(t => t.id !== parseInt(todo.id));
    todos = filteredTodos;
    saveTodos(); // 저장
}

const onSubmit = (e) => {
    e.preventDefault();
    const input = todoInput.value;
    todoInput.value = "";
    printTodo(input);
};

const init = () => {
    loadTodo();
    todoForm.addEventListener('submit', onSubmit);
};

init();