import React, {useContext} from 'react'
import { BookContext } from '../BookContext/BookContext'

const Navbar = () => {
    const {Books} = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Yarcx Book Reading Application</h1>
            <p>You have {Books.length} books to read</p>
        </div>
    )
}

export default Navbar