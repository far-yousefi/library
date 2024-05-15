import React, {useContext} from 'react';
import { Bookcontext } from '../context/BookContext';
import { CheckboxContext } from '../context/CheckboxContext';

const BookDeteils = ({book}) => {
  

    const{dispatch}=useContext(Bookcontext);

    const { toggleCheckbox } = useContext(CheckboxContext);

    const handleCheckboxChange = () => {
        toggleCheckbox(book.id);
    };

   if (!book) {
    // If book is undefined, return null or handle the case appropriately
    return null;
}

    return ( 
        <li> 
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
            <div key={book.id}>
               <input
               type="checkbox"
               onChange={handleCheckboxChange}
            />
            </div>
        </li>
     );
}
 
export default BookDeteils;