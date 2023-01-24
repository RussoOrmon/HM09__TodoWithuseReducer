import React from "react";
import styled from "styled-components";
import Edit from "../Edit/Edit";

const TodoItem = ({ todo, todos, setTodos, saveEditTodo }) => {
  // перебор с помощью map и отмечаем выполненным
  const onCompleted = () => {
    const checkedTodos = todos.map((item) => {
      if (todo.id === item.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTodos(checkedTodos);
  };
  // перебор с помощью filter  и удаляем
  const onDeleteTodo = () => {
    const filteredTodos = todos.filter((elem) => elem.id !== todo.id);

    setTodos(filteredTodos);
  };

  const editTodos = (e) => {
    e.preventDefault();

    console.log("EEEDIT");
    const editTodo = todos.filter((elem) => elem.id === todo.id);
    saveEditTodo(editTodo);
  };

  return (
    <Container>
      <p className={todo.completed ? "completed" : ""}>
        {" "}
        {todo.title} {todo.author}{" "}
      </p>
      <div>
        <button onClick={onCompleted}> Completed </button>
        <button onClick={editTodos}>
          {" "}
          <a href={<Edit />}> Edit </a>{" "}
        </button>
        <button onClick={onDeleteTodo}> Delete </button>
      </div>
    </Container>
  );
};

export default TodoItem;

const Container = styled.li`
  & .completed {
    background-color: #027a02;
    text-decoration: line-through;
    opacity: 0.5;
  }

  & button a {
    margin: 10px 20px;
    background-color: #0707aa;
    padding: 5px;
    font-size: 16px;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
  }
`;
