import React, { useState ,useContext} from 'react';
import { Bookcontext } from '../context/BookContext';
import { CheckboxContext } from '../context/CheckboxContext';
const BookForm = () => {
   const [title,setTitle]= useState(''); 
   const [author,setAuthor]= useState('');
   const { checkedItems } = useContext(CheckboxContext);

   const {dispatch} = useContext(Bookcontext);

    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch({type: 'ADD_BOOK' , book: {title,author}})

        setAuthor('');
        setTitle('');
    }
    const handleRemoveSelected = () => {
      for (const id in checkedItems) {
          if (checkedItems[id]) {
            dispatch({ type: 'REMOVE_BOOK', id });
            
          }
      }
     
  };

  
   return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={"Book name"} value={title} required
            onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder={"َAuthor name"} value={author} required
            onChange={(e)=>setAuthor(e.target.value)}/>
            <input type="submit"  value="Add book"/>
            <button type="button" onClick={handleRemoveSelected }>Delete books</button>
        </form>
     );
}
 
export default BookForm;