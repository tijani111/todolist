import React from "react";
const Form=({setInputText,todos,setTodos,inputText})=>{
    const inputTextHandler=(e)=>{

setInputText(e.target.value);
    };
    const addHandler=(e)=>{
  e.preventDefault();
        setTodos([...todos,{text:inputText,id:Math.random()*1000}]);
            };
      
    return( 
        <form> 
            <div>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={addHandler} className="todo-button" type="submit">
          +
        </button>
     
        </div>
      </form> 
    )
}
export default Form;