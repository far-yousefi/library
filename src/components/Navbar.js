import React, { Component, useContext } from 'react';
import { Bookcontext } from '../context/BookContext';

const Navbar = () => {
  const{books} = useContext(Bookcontext)
    return ( 
        <div className="navbar">
            <h1>My Booklist </h1>
            <p>
                Now you have 
                {books && books.length ? ` ${books.length} ` : '0'} 
                books to read
            </p>
        </div>
     );
}
 
export default Navbar;
