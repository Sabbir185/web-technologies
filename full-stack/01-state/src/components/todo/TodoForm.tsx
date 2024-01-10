import { FormEvent, useContext, useState } from "react";
import { TInitialState, TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
    const [task, setTask] = useState('');
    const {state, dispatch} = useContext(TodoContext);
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data: TInitialState = {
            id: Math.random().toString(36).substring(2, 7),
            title: task,
            isCompleted: false

        }

        dispatch({type: 'add', payload: data})
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="todo">Todo title</label>
                <input type="text" name="todo" id="todo" onChange={(e)=> setTask(e.target.value)} />

                <button>Submit</button>

            </form>
        </div>
    );
};

export default TodoForm;