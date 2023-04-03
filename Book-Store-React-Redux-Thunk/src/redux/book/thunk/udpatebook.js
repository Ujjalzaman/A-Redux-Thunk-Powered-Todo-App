import { editBook } from "../actions";

const updateBookMiddlware = (bookId, BookInfo) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: bookInfo.name,
                author: bookInfo.author,
                thumbnail: bookInfo.thumbnail,
                price: bookInfo.price,
                rating: bookInfo.rating,
                featured: bookInfo.featured,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const book = await response.json();
        dispatch(editBook(bookId, book))
    }
}
export default updateBookMiddlware;