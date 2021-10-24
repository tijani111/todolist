import React from "react";
const Todo =({text,todos,setTodos,todo})=>{
    const deleteHandler=()=>{
setTodos(todos.filter((e)=>e.id !==todo.id));
    };
    
    return(

    
<div className="todo">
   <li className="todo-item">
{text}
   </li>
   <button className="done-btn">
 Done
       </button> 
       <button onClick={deleteHandler} className="trash-btn">
Delete
         </button> 
</div>
);
}
export default Todo;