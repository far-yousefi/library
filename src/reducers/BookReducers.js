import { v4 as uuid } from 'uuid';
export const BookRedecer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
             ...state, 
             {
                title: action.book.title,
                author: action.book.author,
                id: uuid(),

            }]
        case 'REMOVE_BOOK':
            return   state.filter(book => book.id !== action.id)
        default:
            return state
    }


}