import React, { useEffect, createContext, useReducer } from "react";
import bookReducer from "../reducers/BookReducer";

export const BookContext = createContext()

export const BookContextProvider = (props) => {
    const [Books, dispatch] = useReducer(bookReducer, [], () => {
        let getBooks = localStorage.getItem('Books');
        return getBooks ? JSON.parse(getBooks) : []
        });
    
    
    
    useEffect(() => {
        localStorage.setItem('Books', JSON.stringify(Books))
        console.log(Books)
    }, [Books])

    return (
        <BookContext.Provider value={{ Books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

