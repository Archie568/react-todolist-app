import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs' 

function TodoList({todos, setTodos}) {

  const handleDelete = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo)
  }

  const handleComplete = (td) => {
    setTodos(
      todos.map((todo) =>{
        if(todo.id === td.id){
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    )
  }

  return (
    <div className='list-group card-body' >
        {todos.map((todo) => (
            <li key={todo.id} className="list-group-item text-light list-group-item-action card-text list-color text-capitalize text-wrap mt-1" >
              <span style={{textDecoration: todo.completed ? "line-through 2px" : "none"}} >
              {todo.title}
              </span>
                <BsFillFileEarmarkCheckFill onClick={()=> handleComplete(todo)} className='position-absolute end-0 me-5 icon-mark' />
                <FaTrashAlt onClick={()=> handleDelete(todo.id)} className=' position-absolute end-0 me-2 icon-trash' />
            </li>
        ))}
    </div>
  )
}

export default TodoList