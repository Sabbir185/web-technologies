import { useContext } from "react";
import { TInitialState, TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);

    return (
        <div style={{ margin: '20px', border: '1px solid red', padding: '10px' }}>
            {
                state?.map((item: TInitialState, i: number) =>
                    <p
                        key={i}
                        style={{ textDecoration: item?.isCompleted === true ? "line-through" : 'none' }}
                        onClick={() => dispatch({type: "isCompleted", payload: {id: item?.id}})}
                    >
                        {item?.title}
                    </p>
                )
            }
        </div>
    );
};

export default TodoList;