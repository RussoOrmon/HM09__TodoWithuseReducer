import React, {useContext} from "react";
import styled from "styled-components";
import { AuthContext } from "../../store/AuthContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const context= useContext(AuthContext);

  return (
    <Container>
      <ul>
        {context.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          
        
          />
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
const Container = styled.div`
  width: 700px;
  background-color: #7f03b9c5;
  font-size: 16px;
  font-weight: 600;
  color: white;
  display: block;
  margin: 20px auto;
  border: 2px solid black;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;

  & ul {
    width: 650px;
  }
  & ul div {
    margin-left: 20px;
  }

  & li {
    list-style: none;
    margin-left: -40px;
    align-items: center;
    display: flex;
    justify-content: end;
    flex-direction: row;
  }

  & li button {
    margin: 10px 10px 10px auto;
    background-color: #0707aa;
    padding: 5px;
    font-size: 16px;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
  }
`;
