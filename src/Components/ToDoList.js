import React from "react";
import Todo from "./todo";
const ToDoList=({todos,setTodos})=>{
    return( 
        <div className="todo-container">
        <ul className="todo-list">
        {todos.map((todo)=>(<Todo todo={todo}text={todo.text} key={todo.id} todos={todos}
        setTodos={setTodos}/>))}
            
        </ul>
      </div>
    );
};
export default ToDoList;