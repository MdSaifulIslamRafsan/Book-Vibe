import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, rating, category, tags } = book;
  

  const tag = tags.map((tag) => <li className="rounded-full bg-slate-100 text-[#23BE0A] px-5 whitespace-nowrap py-1" key={tag}>{tag}</li>)
  return (
    <Link
      to={`/book/${bookId}`}
      className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md "
    >
      <div>
        <div className="bg-gray-500">
          <img src={image} alt="" className="mx-auto py-4 bg-cover mb-4 h-52" />
        </div>
        <ul className="flex gap-2">
            {
                tag
            }
        </ul>
        <h2 className="mb-1 text-xl font-semibold">{bookName}</h2>
        <p className="text-sm font-semibold text-gray-600">By : {author}</p>
      </div>
      <div className="flex flex-wrap border-t-2 border-dashed border-gray-200 pt-4 justify-between">
        <div className="space-x-2">{category}</div>
        <div className="flex space-x-2 text-gray-600">
          <button
            type="button"
            className="flex gap-3 items-center p-1 space-x-1.5"
          >
            {rating}
            <span>
              <FaRegStar></FaRegStar>
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
