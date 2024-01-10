import { ChangeEvent, useReducer } from "react";


type TAction = {
    type: string;
    payload: string;
}

const initialState = {
    name: '',
    age: 0,
    hobbies: [] as string[]
}

const reducer = (currentState: typeof initialState, action: TAction) => {
    switch (action.type) {
        case 'addName':
            return {
                ...currentState,
                name: action.payload
            }
        case 'addAge':
            return {
                ...currentState,
                age: Number(action.payload)
            }
        case 'addHobbies':
            return {
                ...currentState,
                hobbies: [...currentState.hobbies, action.payload]
            }
        default:
            return currentState;
    }
}



const UserInformationReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleForm = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    console.log({state});
    

    return (
        <div style={{ margin: "50px", border: '2px solid red', padding: '50px' }}>
            <form onSubmit={handleForm}>

                <input type="text" placeholder="name" onBlur={(e) => dispatch({type: 'addName', payload: e.target.value})} />

                <input type="number" placeholder="age" onBlur={(e) => dispatch({type: 'addAge', payload: e.target.value})} />

                <input type="text" placeholder="name" onBlur={(e) => dispatch({type: 'addHobbies', payload: e.target.value})} />

                <button>Submit</button>

            </form>
        </div>
    );
};

export default UserInformationReducer;