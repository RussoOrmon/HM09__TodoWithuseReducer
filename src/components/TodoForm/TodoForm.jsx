import React, { useReducer, useState, useEffect,useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../store/AuthContext";

const actionTypes = {
  TITLE_VALUE: "TITLE_VALUE",
  TITLE_ISVALID: "TITLE_ISVALID",
  AUTHOR_VALUE: "AUTHOR_VALUE",
  AUTHOR_ISVALID: "AUTHOR_ISVALID",
};

const titleReducer = (state, action) => {

  if (action.type === actionTypes.TITLE_VALUE) {
    return {
      ...state,
      value: action.payload,
    };
  }

  if (action.type === actionTypes.TITLE_ISVALID) {
    return {
      ...state,
      isValid: state.value.trim().length > 2,
    };
  }
};

const auThorReducer = (state, action) => {

  if (action.type === actionTypes.AUTHOR_VALUE) {
    return {
      ...state,
      value: action.payload,
    };
  }

  

  if (action.type === actionTypes.AUTHOR_ISVALID) {
    return {
      ...state,
      isValid: state.value.trim().length > 2,
    };
  }
};

const TodoForm = () => {

  const context = useContext(AuthContext)
  

  const [isFormValid, setIsFormValid] = useState(false)

  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: false,
  });

  const [authorState, dispatchAuthor] = useReducer(auThorReducer, {
    value: "",
    isValid: false,
  });


  useEffect(()=>{
    setIsFormValid(titleState.value.trim().length > 0 && authorState.value.trim().length > 0 )
  }, [titleState.value, authorState.value])

  const getValueTitle = (e) => {
    dispatchTitle({ type: actionTypes.TITLE_VALUE, payload: e.target.value });
  };



  const getIsValidTitle = () => {
    dispatchTitle({
      type: actionTypes.TITLE_ISVALID  });
  };

  const getValueAuthor = (e) => {
    dispatchAuthor({ type: actionTypes.AUTHOR_VALUE, payload: e.target.value });
  };

  const getIsValidAuthor = () => {
    dispatchAuthor({ type: actionTypes.AUTHOR_ISVALID });
  };

  const sendValues=(e)=>{
    e.preventDefault()
    { isFormValid &&  context.onAddTodos( titleState.value , authorState.value )}
    titleState.value=''
    authorState.value=''
  }

  return (
    <Container  >
      <div className={`${titleState.isValid === false ? "invalid" : ""}`}>
        <label htmlFor="title">
          Литература :
          <input
            type="text"
            id="title"
            value={titleState.value}
            onChange={getValueTitle}
            onBlur={getIsValidTitle}
          />
        </label>
      </div>
      <div className={`${authorState.isValid === false ? "invalidAuth" : ""}`}>
      <label htmlFor="author">
        Автор :
        <input
          type="text"
          id="author"
          value={authorState.value}
          onChange={getValueAuthor}
          onBlur={getIsValidAuthor}
        />
      </label>
      </div>
      <div>
        <button onClick={sendValues} > Добавить </button>
      </div>
    </Container>
  );
};

export default TodoForm;

const Container = styled.form`
  width: 700px;
  height: 250px;
  background-color: #7f03b9;
  font-size: 20px;
  font-weight: 600;
  color: white;
  display: flex;
  margin: 20px auto;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;

  & label input {
    width: 400px;
    font-size: 20px;
    background-color: #c3f8cd;
  }

  & .invalidAuth input{
    background-color: #f9cec7d5;
  }

  & label {
    font-size: 22px;
    font-weight: 700;
  }
  & .invalid input {
    background-color: #f9cec7d5;
  }



  & div button {
    width: 120px;
    height: 40px;
    background-color: #0ef739;
    color: white;
    font-size: 20px;
    /*box-sizing: border-box;
        padding: 5px;
        margin: auto 30px;*/
    border-radius: 8px;
    cursor: pointer;
  }
`;
