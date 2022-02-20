import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className='container mt-5 border border-2 rounded-1 border-dark shadow-lg container-center' >
      <h1 className='card-header header' >Todo List</h1>
      <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} uuidv4={uuidv4} />
      <TodoList todos={todos} setTodos={setTodos} />
      </div>
  )
}

export default App

