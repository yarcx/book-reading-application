import React, { useContext, useState } from 'react'
import { BookContext } from '../BookContext/BookContext'

const AddBook = () => {
    const {dispatch} = useContext(BookContext)
    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
      dispatch({ type: "Add_Book", book: { title: Title, author: Author } })
        setTitle('')
        setAuthor('')
    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
                    placeholder="Title"
                    value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            required
                    placeholder="Author" 
            value={Author}        
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <button type="submit">Add Books</button>
        </form>
      </div>
    );
}


export default AddBook