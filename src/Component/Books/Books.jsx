


import PropTypes from 'prop-types';
import Book from '../Book/Book';

const Books = ({booksData}) => {
    return (
        <section>
            <h1 className="text-3xl font-bold text-center">Books</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    booksData.map((book)=> <Book book={book} key={book?.bookId}></Book> )
                }
            </div>
        </section>
    );
};

Books.propTypes = {
    booksData: PropTypes.array.isRequired,
};

export default Books;

