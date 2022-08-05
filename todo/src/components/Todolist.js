import React from 'react'
// importing components
import Todo from './Todo'
const Todolist = ({todos,setTodos}) => {

  return (
    <div className="todo-container">
        <ul className="todo-list">
            {todos.map((todo)=>(
                <Todo todo={todo} key={todo.id} text={todo.text} todos={todos} setTodos={setTodos}/>
            ))}
        </ul>
    </div>
  )
}

export default Todolist