import { ReactNode, createContext, useReducer } from "react";

export const TodoContext = createContext<{ state: TInitialState[], dispatch: React.Dispatch<TPayload> } | undefined>(undefined);

// types
type TChildren = {
    children: ReactNode;
}

export type TInitialState = {
    id: string;
    title: string;
    isCompleted: boolean;
}

type TPayload = {
    type: string;
    payload: TInitialState;
}

const typeConstants = {
    ADD: 'add',
    IS_COMPLETED: 'isCompleted'
}

// useReducer's initial data and function
const initialState: TInitialState[] = [];

const reducer = (currentState: TInitialState[], action: TPayload) => {
    switch (action.type) {
        case typeConstants.ADD:
            return [...currentState, action.payload]
        case typeConstants.IS_COMPLETED:
            return currentState?.map((item) => item?.id === action?.payload?.id ? {...item, isCompleted: true} : item )
        default:
            return currentState;
    }
}


const TodoProvider = ({ children }: TChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const values = {
        state,
        dispatch
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;