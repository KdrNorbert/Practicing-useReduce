import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Todos from './Todos.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1 className='text-center mb-20 mt-10 text-5xl font-bold'>Practicing useReducer</h1>
    <App />
    <Todos />
  </>
)
