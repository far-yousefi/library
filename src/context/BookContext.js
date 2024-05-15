import React,{createContext,useState, useReducer,useEffect} from 'react';
import { BookRedecer } from '../reducers/BookReducers';


export const Bookcontext = createContext();
const BookContextProvider = (props) => {
    const [books,dispatch] = useReducer(BookRedecer , [], ()=> {
        const data = localStorage.getItem('books');
        return data ? JSON.parse(data): []
    })
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])

    return ( 
        <Bookcontext.Provider value={{books,dispatch}}>
            {props.children}   
        </Bookcontext.Provider>
     );
}
 
export default BookContextProvider;