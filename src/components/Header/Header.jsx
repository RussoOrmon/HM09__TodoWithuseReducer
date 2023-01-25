import React, {useContext} from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../store/AuthContext'

const Header = () => {

  const context  = useContext(AuthContext)
  

  const addTodos=(e)=>{
    //e.preventDefault()
    context.onAddTodoBtn(true)

  }

  return (
    <Container>
        <h1>Todo with useReducer </h1>
        <div> 
            <button onClick={addTodos} > Add Todo </button>
            {/*<button> Edit Todo </button>*/}
         </div>
    </Container>
  )
}

export default Header;

const Container= styled.div`
    width: 1200px;
    height: 100px;
    background-color: #5bb0f6;
    font-size: 20px;
    font-weight: 700;
    color: black;
    display: flex;
    margin: 20px auto;
    /*flex-direction: row ;*/
    justify-content: space-around;


    & div{
        width: 400px;
        margin: 30px;
    }

    & div button{
        width: 120px;
        height: 40px;
        background-color: #a303a3;
        color: white;
        font-size: 20px;
        box-sizing: border-box;
        padding: 5px;
        margin: auto 30px;
        border-radius: 8px;
        cursor: pointer;
    }


`