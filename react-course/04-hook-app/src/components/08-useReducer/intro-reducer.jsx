
const initialState = [{
    id: 1,
    todo: 'Finish work',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') return [...state, action.payload];
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Clean bed',
    done: false
};

const addTodoAction = {
    type: 'add',
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);