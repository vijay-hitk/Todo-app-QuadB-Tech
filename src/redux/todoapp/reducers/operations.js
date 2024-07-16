import { ADD_TODO, DELETE_ALL , DELETE, UPDATE, TOGGLE } from "../actions";



const initialState = [
    {id : 1 , todo : 'Buy camera ', completed : false},
    {id : 2 , todo : 'Master Redux' , completed:true },
    {id : 3 , todo : 'Get a job' , completed: true}
];

export const operationsReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO : 
            return [...state , action.payload];

        case DELETE_ALL:
            return [];
        case DELETE : 
            return state.filter((item) => item.id !== action.payload)

        case UPDATE : 
             const updateArray = [];
             state.map((item) => {
                if(item.id === action.payload.id){
                    item.todo = action.payload.todo;
                    item.completed = action.payload.completed;

                }
                updateArray.push(item);
             })
             return updateArray;

        case TOGGLE : 
             const todoArray = [];
             state.map((item) => {
                if(item.id === action.payload){
                    item.completed = !item.completed;
                }
                todoArray.push(item);
             })
             return todoArray;
             
        default : 
            return state;
    }


}
