import { createContext,useState, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TrackerContext = createContext([])

const initialTracker = []

const reduce = (state,action) =>{
   
    switch(action.type){
        case 'addTransaction':
            return [...state,{...action.payload,id:uuidv4()}]
        case 'deleteTransaction':
            return state.filter((element)=> element.id !== action.payload);
    }
}


export const TrackerProvider = ({children}) =>{

    const [formData,setFormData] = useState({type:"Income",value:0})
  
    const [transactions,dispacher] = useReducer(reduce,initialTracker)

    const data = {
         formData:formData,
         setFormData:setFormData,
         dispacher:dispacher,
         transactions:transactions
        }

    return(
        <TrackerContext.Provider value={data}>
        {children}
        </TrackerContext.Provider>
    )
}

