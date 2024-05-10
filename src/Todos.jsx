import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS ={
  ADD_TODO: 'add-todo',
  TOOGLE_TODO: 'toogle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOOGLE_TODO:
        return todos.map(todo => {
          if (todo.id === action.payload.id){
            return {...todo, complete: !todo.complete}
          }
          return todo
        })
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)
  }
}

function newTodo(name){
    return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('');
  }

  console.log(todos);

  return (
    <div className="mb-5 pb-5 flex flex-col justify-center items-center border-b-2 border-solid border-black">
    <h1 className="text-center my-5 text-3xl font-semibold">Todos</h1>
    <form className="flex justify-center" onSubmit={handleSubmit}>
        <input className="p-1 mb-3 border-2 border-black rounded-xl" placeholder="Write a todo..." type="text" value={name} onChange={e => setName(e.target.value)} />
    </form>
    {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
    })}
    </div>
  )
}

export default App
