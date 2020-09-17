// import uuid from 'react-uuid'


const bookReducer = (state, action) => {
    switch (action.type) {
        case "Add_Book":
            const id = Math.floor(Math.random() * 1000);
            return [...state, { title: action.book.title, author: action.book.author, id: id }];
        case "Delete_Book": 
            return state.filter(book => {
                return book.id !== action.id
            })
        default:
            return state;
    }

}

export default bookReducer

