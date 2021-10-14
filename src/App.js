import React,{useState} from "react"
import './App.css';
import Form from './Components/form';
import ToDoList from './Components/ToDoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
      <h1>My Todo List </h1>
<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
<ToDoList todos={todos}setTodos={setTodos}/>
      
      </header>
    </div>
  );
}

export default App;
