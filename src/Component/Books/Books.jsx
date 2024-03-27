


import PropTypes from 'prop-types';
import Book from '../Book/Book';
import { useState } from 'react';

const Books = ({booksData}) => {


    const [btnData , setBtnData] = useState(6);

    const handelBtnData = (bookDataLength) => {
        setBtnData(bookDataLength);
    }
    return (
        <section>
            <h1 className="text-3xl my-10 font-bold text-center">Books</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    booksData.slice(0, btnData).map((book)=> <Book book={book} key={book?.bookId}></Book> )
                }
            </div>
           {
            booksData.length !== btnData &&
             <button onClick={() => handelBtnData(booksData.length)} className='btn bg-[#23BE0A] text-white my-10 mx-auto block'>Show All</button>
           }
        </section>
    );
};

Books.propTypes = {
    booksData: PropTypes.array.isRequired,
};

export default Books;

