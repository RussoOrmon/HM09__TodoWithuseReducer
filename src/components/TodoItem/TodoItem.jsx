import React, {useContext} from "react";
import styled from "styled-components";
import { AuthContext } from "../../store/AuthContext";
import Edit from "../Edit/Edit";

const TodoItem = ({ todo }) => {

  const context = useContext(AuthContext)

  // перебор с помощью map и отмечаем выполненным
  const onCompleted = () => {
    const checkedTodos = context.todos.map((item) => {
      if (todo.id === item.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    context.setTodos(checkedTodos);
  };
  // перебор с помощью filter  и удаляем
  const onDeleteTodo = () => {
    const filteredTodos = context.todos.filter((elem) => elem.id !== todo.id);

    context.setTodos(filteredTodos);
  };

  const editTodos = (e) => {
    e.preventDefault();
    const editTodo = context.todos.filter((elem) => elem.id === todo.id);
    context.saveEditTodo(editTodo);
  };

  return (
    <Container>
      <p className={todo.completed ? "completed" : ""}>
    
        {todo.title} {todo.author}
      </p>
      <div>
        <button onClick={onCompleted}> Completed </button>
        <button onClick={editTodos}>

          <a href={<Edit />}> Edit </a>
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
