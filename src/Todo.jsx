import { ACTIONS } from "./Todos";

export default function Todo({ todo, dispatch }) {
  
  return (
    <div className={`${todo.complete ? "bg-green-800" : "bg-red-800"} text-white w-3/6 my-1 rounded-xl flex justify-between relative overflow-x-auto shadow-md sm:rounded-lg`}>
        <span className={`p-2`}>
            {todo.name}
        </span>
        <div className="flex gap-3">
          <input type="checkbox" checked={todo.complete} onChange={() => dispatch({ type: ACTIONS.TOOGLE_TODO, payload: { id: todo.id } })} />
          <button className="bg-blue-700 p-2" onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    </div>
  )
}
