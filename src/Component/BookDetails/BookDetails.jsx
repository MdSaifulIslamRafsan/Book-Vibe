import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const bookDetailsData = useLoaderData();
  const currentBookDetailsID = useParams();
  const currentBookDetailsData = bookDetailsData.find(
    (book) => book.bookId === currentBookDetailsID.id
  );

  const { image, bookName, author, category, review, tags, totalPages,publisher, yearOfPublishing , rating } =
    currentBookDetailsData;
  const tag = tags.map((tag) => (
    <li
      className="rounded-full bg-slate-100 text-[#23BE0A] px-5 whitespace-nowrap py-1"
      key={tag}
    >
      {`#${tag}`}
    </li>
  ));

  console.log(currentBookDetailsData);
  return (
    <section className="my-10">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex w-full bg-gray-100 items-center justify-center p-6 mt-8 lg:mt-0  flex-1">
          <img src={image} alt="" className="object-contain w-4/5" />
        </div>
        <div className="flex space-y-4 flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="font-bold leading-none text-4xl">{bookName}</h1>
          <p className="font-medium">By : {author}</p>
          <div className="divider"></div>
          <p>{category}</p>

          <div className="divider"></div>
          <p><span className="font-medium ">Review :</span> <span className="text-[#131313B2]">{review}</span></p>
          <ul className="flex gap-2"><span className="font-medium">Tag :</span> {tag}</ul>
          <div className="divider"></div>

          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <tbody>
      {/* row 1 */}
      <tr>
        <td>Number of Pages :</td>
        <th>{totalPages}</th>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Publisher :</td>
        <th>{publisher}</th>
      </tr>
      {/* row 3 */}
      <tr>
        <td>Year of Publishing :</td>
        <th>{yearOfPublishing}</th>
      </tr>
      <tr>
        <td>Rating :</td>
        <th>{rating}</th>
      </tr>
    </tbody>
  </table>
</div>




          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            
            <button
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-800"
            >
              Read
            </button>
            <button
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#50B1C9] text-gray-50"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
