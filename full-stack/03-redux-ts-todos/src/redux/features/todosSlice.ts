import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state) => {
            return state
        }
    }
});

export const { addTodo } = todoSlice.actions; 

export default todoSlice.reducer;