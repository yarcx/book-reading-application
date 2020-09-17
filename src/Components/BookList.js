import React, { useContext } from 'react'
import { BookContext } from '../BookContext/BookContext';
import BookDetails from '../Components/BookDetails'
import AddBook from './AddBooks';

const BookList = () => {
    const { Books } = useContext(BookContext) 
    return (
      <div className="BookList">
        {Books.length ? (
          <ul>
            <BookDetails />
          </ul>
        ) : (
          <p className="empty">You HAve No Books Left to read :) </p>
        )}

        <AddBook />
      </div>
    );
}

export default BookList