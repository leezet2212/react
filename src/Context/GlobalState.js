import React, { useReducer } from 'react';
import AddReduce from './AddReduce';

//initail State

const initialState ={
    users:[
        {id:1,name:'nhât linh', email:'linh@gmail.com'},
        {id:2,name:'khắc huy', email:'huy@gmail.com'},
        {id:3,name:'ĐOAN', email:'doan@gmail.com'},
    ]
}
//create context 
export const GlobalState = React.createContext(initialState)

//Provider component 
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AddReduce, initialState)

    //action 
    const removeUser =(id)=>{
        dispatch({
            type: 'REMOVE-USER',
            payload:id
        })
    }

    return(
        <GlobalState.Provider value={{
            users:state.users,
            removeUser:removeUser
        }}>
            {children}
        </GlobalState.Provider>
    )
}