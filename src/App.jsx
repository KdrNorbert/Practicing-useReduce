import { useReducer } from "react";

const ACTIONS ={
  SETTOZERO: 'set-to-zero',
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  MULTIPLY: 'multiply',
  DIVISION: 'division'
}

function reducer(state, action){
  switch(action.type){
    case ACTIONS.SETTOZERO:
      return { count: 0 }
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 }
      case ACTIONS.MULTIPLY:
        return { count: state.count * 2 }
      case ACTIONS.DIVISION:
        return { count: state.count / 2 }
        default:
          return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function setToZero(){
    dispatch({ type: ACTIONS.SETTOZERO })
  }

  function increment(){
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement(){
    dispatch({ type: ACTIONS.DECREMENT })
  }

  function multiplyBYTwo(){
    dispatch({ type: ACTIONS.MULTIPLY })
  }

  function divisionByTwo(){
    dispatch({ type: ACTIONS.DIVISION })
  }

  return (
    <div className="mt-5 py-5 flex flex-col justify-center items-center border-y-2 border-black border-solid">
    <button className="py-1 px-4 border bg-black text-white rounded-xl" onClick={setToZero}>Set counter to 0</button>
    <div className="text-3xl mx-auto my-5 font-bold w-fit flex justify-center items-center gap-10">
      <button className="py-1 px-4 border bg-blue-700 text-white" onClick={divisionByTwo}>%2</button>
      <button className="py-1 px-4 border bg-blue-700 text-white" onClick={decrement}>-</button>
      <div className="text-4xl font-semibold">{state.count}</div>
      <button className="py-1 px-4 border bg-blue-700 text-white" onClick={increment}>+</button>
      <button className="py-1 px-4 border bg-blue-700 text-white" onClick={multiplyBYTwo}>*2</button>
    </div>
    </div>
  )
}

export default App
