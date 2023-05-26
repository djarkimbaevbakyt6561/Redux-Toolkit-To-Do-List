import { createSlice } from "@reduxjs/toolkit"
const todosFromLocal = localStorage.getItem("Todos")
const todos = todosFromLocal ? JSON.parse(todosFromLocal) : []
const initialState = {
    todos: todos,
    inputTitle: "",
    inputDate: "",
}
export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        getInputTitle: (state, action) => {
            state.inputTitle = action.payload
        },
        getInputDate: (state, action) => {
            state.inputDate = action.payload
        },
        resetHandler: (state, action) => {
            state.inputDate = ""
            state.inputTitle = ""
        },
        completedTodo: (state, action) => {
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            state.todos = updatedTodos
        },
        deleteHandler: (state, action) => {
            const filteredTodos = state.todos.filter((el) => el.id !== action.payload)
            state.todos = filteredTodos
        },
        openModalHandler: (state, action) => {
            const openModalTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, openModal: !todo.openModal };
                }
                return todo;
            });
            state.todos = openModalTodos
        },
        editTodo: (state, action) => {
            const updatedFilterTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title, date: action.payload.date };
                }
                return todo;
            });
            state.todos = updatedFilterTodos
        }
    }
    
})
export const todosReducer = todosSlice.reducer
export const todosActions = todosSlice.actions