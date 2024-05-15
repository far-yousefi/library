import React , {useContext} from 'react';
import { Bookcontext } from '../context/BookContext';
import BookDeteils from './BookDeteils';
const BookList = () => {
  const{books}=  useContext(Bookcontext)
    return books.length? ( 
        <div className="book-list"> 
            <ul>
                {books.map(book=>{
                    return (
                        <BookDeteils key={book.id} book={book}/>
                    )
                })}
            </ul>
        </div>
     ): ( <div>No books found</div>);
}
 
export default BookList;