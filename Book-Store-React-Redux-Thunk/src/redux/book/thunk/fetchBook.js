import { fetchBook } from "../actions";

const fetchBooks = async(dispatch) =>{
    const response = await fetch('http://localhost:9000/books')
    const books = await response.json();
    dispatch(fetchBook(books))
}
export default fetchBooks;