import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { deleteOne,handleCheckbox } from '../redux/todoapp/actions';



const Todos = ({handleEdit,editForm}) => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.operationsReducer);
    console.log(todos);
  return (
    todos.map((todo) => (

        <div key = {todo.id} className='todo-box'>
            <div className='content'>
                {editForm === false && (
                     <input type='checkbox' checked={todo.completed} onChange={() => dispatch(handleCheckbox(todo.id))}></input>
                )}
                {console.log(todo.completed)}
               
                <p className={todo.completed ? 'strike' : 'none'}>
                    {todo.todo}
                </p>

            </div>
            <div className='actions-box'>
            {editForm === false && <>
                <span onClick={() => handleEdit(todo)} ><FaEdit /></span>
                <span onClick={() => dispatch(deleteOne(todo.id))}><FaTrash /></span>
            
            </>}
               

            </div>
        </div>


    ))
  )
}

export default Todos