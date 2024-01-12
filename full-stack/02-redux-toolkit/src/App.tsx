import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {
  const { count } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className='p-10 m-30 border-red-500'>

      <div className="flex items-center gap-5 justify-center mt-20">
        <button
          className="bg-green-600 px-5 py-3 shadow-md hover:bg-green-500 rounded-md text-white"
          onClick={() => dispatch(decrement(1))}
        >
          decrement
        </button>

        <p>{count}</p>

        <button
          className="bg-green-600 px-5 py-3 shadow-md hover:bg-green-500 rounded-md text-white"
          onClick={() => dispatch(increment(2))}
        >
          increment
        </button>
      </div>

    </div>
  )
}


export default App
