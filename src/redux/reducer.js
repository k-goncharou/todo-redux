const initialState = {
    todoList: [
        {
            id: 1,
            task: "learn Redux",
            isDone: false
        },
        {
            id: 2,
            task: "find job",
            isDone: false
        },
        {
            id: 3,
            task: "get next level",
            isDone: false
        },
    ],
    title: "Todo list"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "createTask":
            return state;
        case "updateTask":
            return state;
        case "finish":
            return state;
        case "deleteTask":
            const newTodo =
                state.todoList.filter((elem) => elem.id !== action.payload)

            return {...state, todoList: newTodo}
        default: return state
    }
}
export default reducer