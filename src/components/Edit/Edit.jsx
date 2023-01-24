import React from "react";
import styled from "styled-components";

const Edit = ({ todo, todos }) => {
  console.log(todo)
  return (
    <Container>
      {todos.map((item) => 
         item.id === todo.id &&
         (
           <li key={item.id}>
        
          <h3>{todo.title}</h3> <h3>{todo.author}</h3>
          </li>
          )
        
          )}
      <button>Сохранить</button>
    </Container>
  );
};

export default Edit;

const Container = styled.form`
  width: 700px;
  height: 250px;
  background-color: #7f03b9;
  font-size: 20px;
  font-weight: 600;
  color: #0f0101;
  /*display: flex;*/
  margin: 20px auto;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;

  & h3 {
    background-color: yellow;
  }
  & button {
    margin: 50px 20px;
    background-color: #0707aa;
    padding: 5px;
    font-size: 16px;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
  }
`;
