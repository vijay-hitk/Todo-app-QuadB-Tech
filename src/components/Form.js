import React , {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo  , handleEditSubmit} from '../redux/todoapp/actions';

const Form = ({editForm , editTodo , setEditTodo , cancelUpdate}) => {
    const dispatch = useDispatch();
    const [todoValue , setTodoValue] = useState('');
    const [value , setValue] = useState('');

    useEffect(() => {
        setValue(editTodo.todo);
    },[editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        //creating id 
        let date = new Date();
        let time = date.getTime();

        //creating todo Object 
        let todoObj = {
            id: time,
            todo : todoValue,
            completed : false
        }

        setTodoValue('');
        dispatch(addTodo(todoObj));
}

    const editSubmit = (e) => {
            e.preventDefault();

            let editedObj = {
                id : editTodo.id,
                todo : value,
                completed: false
            }

            dispatch(handleEditSubmit(editedObj));
    }

  return (
    <>
    {editForm === false ? (
        //Edit Form
        <div>
        <form className='form-group custom-form' onSubmit={handleSubmit}>
            <label>Add your todo items</label>
            <div className='input-and-btn'>
                <input type='text' className='form-control' required value={todoValue} onChange={(e) => setTodoValue(e.target.value)}/>
                <button type='submit' className='btn btn-secondary btn-md'>ADD</button>
            </div>

        </form>
    </div>



    ):
    //update form
    (
        <div>
        <form className='form-group custom-form' onSubmit={editSubmit}>
            <label>Update your todo items</label>
            <div className='input-and-btn'>
              
                <input type='text' className='form-control' required value={value} onChange={(e) => setValue(e.target.value)} />
                <button type='submit' className='btn btn-secondary btn-md'>UPDATE</button>
            </div>
            <button type='button' className='btn btn-primary btn-md back-btn' onClick={cancelUpdate}>BACK</button>

        </form>
    </div>





    )
    
    
    
    
    }
    
    
    
    
    </>
    
  )
}

export default Form