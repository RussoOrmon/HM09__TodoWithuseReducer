import React, { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Edit from "./components/Edit/Edit";
import { AuthContext } from "./store/AuthContext";

const initState = [
  {
    title: "Маугли",
    author: "Ричард Киплинг",
    id: 1,
  },
  {
    title: "Таинственный остров",
    author: "Жюль Верн",
    id: 2,
  },
];

const TodoContext = createContext();

//export const TodoProvider =({children})=>{

//}

function App() {
  const [todos, setTodos] = useState(initState);
  const [edit, setEdit] = useState(false);
  const [addTodo, setAddTod] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem("Todos");
    setTodos(JSON.parse(result));
  }, []);

  const onAddTodos = (title, author, id) => {
    setTodos((prevState) => [
      ...prevState,
      {
        title,
        author,
        completed: false,
        id: nanoid(),
      },
    ]);
    localStorage.setItem("Todos", JSON.stringify(todos));
  };

  const saveEditTodo = (todo) => {
    setEdit(todo);
  };

  const onAddTodoBtn = () => {
    setAddTod(true);
  };

  return (
    <div className="App">
      <h1> #hELlo@ </h1>
      <AuthContext.Provider value={{ todos, setTodos, saveEditTodo, onAddTodos }}>
        {!addTodo && <Header />}
        <TodoForm  />

        {edit ? (
          <Edit todos={todos} todo={edit} />
        ) : (
          <TodoList  />
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
