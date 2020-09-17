import React, { useContext } from 'react';
import { BookContext } from '../BookContext/BookContext';

const BookDetails = () => {
  const {Books, dispatch} = useContext(BookContext)
  console.log(Books);
    return Books.map(Book => {
        return (
            <div
              onClick={() => dispatch({type:"Delete_Book", id: Book.id})}
              key={Book.id}
              className="Book"
            >
              <li className="Book-title">{Book.title}</li>
              <li className="Book-author">{Book.author}</li>
            </div>
        )
        })
}

export default BookDetails