import React, { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';


import './App.css';

import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Edit from './components/Edit/Edit';

function App() {

  const [todos, setTodos] = useState([
    {
        title: "Маугли",
        author:'Ричард Киплинг',
        id:1
    },
    {
        title: "Таинственный остров",
        author:'Жюль Верн',
        id:2
    },
    
])
const [edit, setEdit] = useState(false)
const [addTodo, setAddTod] = useState(false)

  useEffect(() => {
    const result = localStorage.getItem("Todos")
    setTodos(JSON.parse(result))
  }, [])

  const pickUpValues=(title, author, id)=>{

    setTodos((prevState)=>[
      ...prevState,{
        title,
        author,      
        completed:false,
        id: nanoid()
      }
    ] )
    localStorage.setItem("Todos", JSON.stringify(todos) )
  }
  
const saveEditTodo=(todo)=>{
  setEdit(todo)
}

const onAddTodoBtn=()=>{
  setAddTod(true)
}

  return (
    <div className="App">
        <h1> #hELlo@ </h1>

        
        {!addTodo &&  <Header onAddTodoBtn={onAddTodoBtn} /> }
         <TodoForm onAddTodos={pickUpValues} />

        {edit ? <Edit todos={todos} todo={edit} />  :   <TodoList saveEditTodo={saveEditTodo} todos={todos} setTodos={setTodos} /> }
      
    </div>
  );
}

export default App;
