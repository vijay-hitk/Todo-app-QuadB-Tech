
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';
import { useDispatch , useSelector} from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  const [editForm , setEditForm] = useState(false);
  const [editTodo , setEditTodo] = useState('');
 
  const handleEdit = (todo) => {
    setEditForm(true);
    setEditTodo(todo);


  }

  const cancelUpdate = () => {
    setEditForm(false);
  }

  return (
    <div className="wrapper">
      <br></br>
      <h1 className='text-center'>TO-DO APP</h1>
        <Form editForm={editForm} editTodo={editTodo} setEditTodo={setEditTodo} cancelUpdate={cancelUpdate}/>
        <Todos handleEdit={handleEdit} editForm={editForm} />
        {todos.length > 1 &&
        (<button className='btn btn-danger btn-md delete-all' onClick={() => dispatch(deleteAll())}>DELETE ALL</button>)}
    </div>
  );
}


export default App;
