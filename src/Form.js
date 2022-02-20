import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Form({input, setInput, todos, setTodos, uuidv4}) {

    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
        setInput("")
    }

  return (
    <form onSubmit={handleSubmit} className="input-group card-body" >
        <input type="text" value={input} onChange={handleChange} placeholder="Enter your Todo" className='ps-2 rounded-2 border-0  w-75' />
        <button type='submit' className='btn btn-color' >Submit</button>
    </form>
  )
}

export default Form