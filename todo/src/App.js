import React,{useState,useEffect} from 'react';
import './App.css';
// import components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {

  const[inputText,setInputText] = useState("");
  const[todos,setTodos] = useState([]);
  const[status,setStatus] = useState("");
  const[filterTodos,setFilterTodos] = useState([]);

  useEffect(()=>{
    filterHandler();
  },[todos,status])

  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter((item)=> item.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Kavindu's Todo List</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <Todolist todos={filterTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
