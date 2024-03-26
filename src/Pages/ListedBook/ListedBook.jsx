import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getWishlistData } from "../../Utilities/Wishlist";
import { getLocalStorageReadData } from "../../Utilities/Read";
import { Link, useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";

const ListedBooks = () => {
  const booksData = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);

  const getWishlists = getWishlistData();
  const getReadBooks = getLocalStorageReadData();

  const readBooks = booksData.filter((book) =>
    getReadBooks.includes(book?.bookId)
  );
  const wishlists = booksData.filter((book) =>
    getWishlists.includes(book?.bookId)
  );


  return (
    <section className="my-10">
      <div className="p-10 mb-10 bg-slate-200 rounded-lg">
        <h1 className="text-4xl text-center font-bold">Books </h1>
      </div>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          {readBooks.map((book, index) => (
            <section
              className="my-10 border-2 rounded-lg p-3 lg:flex lg:gap-8"
              key={index}
            >
              <div className="lg:w-2/6 rounded-xl p-4 bg-gray-100">
                <img className="mx-auto" src={book?.image} alt="" />
              </div>
              <div className="space-y-3 lg:flex-1">
                <h1 className="text-2xl font-bold">{book?.bookName}</h1>
                <p className="font-medium">By : {book?.author}</p>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <ul className="flex gap-2">
                    <span className="font-medium">Tag</span>
                    {book.tags.map((tag) => (
                      <li
                        className="rounded-full bg-slate-100 text-[#23BE0A] px-4 whitespace-nowrap py-1"
                        key={tag}
                      >
                        {`#${tag}`}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2">
                    <FaLocationDot /> Year of Publishing:{" "}
                    {book?.yearOfPublishing}
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <FaUserFriends></FaUserFriends>
                    <p className="text-[#13131399]">
                      Publisher : {book?.publisher}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiNewspaperLine></RiNewspaperLine>
                    <p className="text-[#13131399]">
                      Page : {book?.totalPages}
                    </p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="flex lg:items-center flex-col lg:flex-row gap-4">
                  <div className="text-[#328EFF] w-fit rounded-full py-2 px-4 bg-[rgba(50,142,255,0.15)]">
                    Category: {book?.category}
                  </div>
                  <div className="text-[#FFAC33] w-fit rounded-full py-2 px-4 bg-[rgba(255,172,51,0.15)]">
                    Rating: {book?.rating}
                  </div>
                  <div>
                    <Link to={`/book/${book?.bookId}`} className="relative cursor-pointer inline-flex items-center justify-center px-2 lg:px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#23BE0A] rounded-full group">
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56" />
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#22be0a4b]" />
                      <span className="relative whitespace-nowrap">
                      View Details
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </TabPanel>
        <TabPanel>
          {wishlists.map((book, index) => (
            <section
            className="my-10 border-2 rounded-lg p-3 lg:flex lg:gap-8"
            key={index}
          >
            <div className="lg:w-2/6 rounded-xl p-4 bg-gray-100">
              <img className="mx-auto" src={book?.image} alt="" />
            </div>
            <div className="space-y-3 lg:flex-1">
              <h1 className="text-2xl font-bold">{book?.bookName}</h1>
              <p className="font-medium">By : {book?.author}</p>
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <ul className="flex gap-2">
                  <span className="font-medium">Tag</span>
                  {book.tags.map((tag) => (
                    <li
                      className="rounded-full bg-slate-100 text-[#23BE0A] px-4 whitespace-nowrap py-1"
                      key={tag}
                    >
                      {`#${tag}`}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2">
                  <FaLocationDot /> Year of Publishing:{" "}
                  {book?.yearOfPublishing}
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <FaUserFriends></FaUserFriends>
                  <p className="text-[#13131399]">
                    Publisher : {book?.publisher}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <RiNewspaperLine></RiNewspaperLine>
                  <p className="text-[#13131399]">
                    Page : {book?.totalPages}
                  </p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex lg:items-center flex-col lg:flex-row gap-4">
                <div className="text-[#328EFF] w-fit rounded-full py-2 px-4 bg-[rgba(50,142,255,0.15)]">
                  Category: {book?.category}
                </div>
                <div className="text-[#FFAC33] w-fit rounded-full py-2 px-4 bg-[rgba(255,172,51,0.15)]">
                  Rating: {book?.rating}
                </div>
                <div>
                  <Link to={`/book/${book?.bookId}`} className="relative cursor-pointer inline-flex items-center justify-center px-2 lg:px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#23BE0A] rounded-full group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56" />
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#22be0a4b]" />
                    <span className="relative whitespace-nowrap">
                    View Details
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          ))}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ListedBooks;
