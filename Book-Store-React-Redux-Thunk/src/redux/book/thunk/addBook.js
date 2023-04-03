import { addedBook } from "../actions";

const addBookMiddleware = (bookInfo) => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:9000/books', {
            method: 'POST',
            body: JSON.stringify({
                name: bookInfo.name,
                author: bookInfo.author,
                thumbnail: bookInfo.thumbnail,
                price: bookInfo.price,
                rating: bookInfo.rating,
                featured: bookInfo.featured,
              }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const book = await response.json();
        dispatch(addedBook(book))
    }
}
export default addBookMiddleware;