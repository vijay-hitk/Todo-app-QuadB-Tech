
export const ADD_TODO = 'ADD_TODO'
export const DELETE_ALL = 'DELETE_ALL'
export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'
export const TOGGLE = 'TOGGLE'

export const addTodo = (payload) => {
    return {
        type : ADD_TODO,
        payload
    }
}

export const deleteAll = () => {
    return {
        type : DELETE_ALL,
       
    }

}

export const deleteOne = (payload) => {
    return {
        type : DELETE,
        payload

    }
}

export const handleEditSubmit = (payload) => {
    return {type : UPDATE , payload}
}

export const handleCheckbox = (payload) => {
    return {type : TOGGLE , payload}
}