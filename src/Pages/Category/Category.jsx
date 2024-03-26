import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const bookData = useLoaderData();
  const Fictions = bookData.filter((book) => book?.category === "Fiction");
  const Fantasys = bookData.filter((book) => book?.category === "Fantasy");
  const Thrillers = bookData.filter((book) => book?.category === "Thriller");
  const YoungAdults = bookData.filter(
    (book) => book?.category === "Young Adult"
  );

  return (
   
      <Tabs className="my-10" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Fiction</Tab>
          <Tab>Fantasy</Tab>
          <Tab>Thriller</Tab>
          <Tab>YoungAdult</Tab>
        </TabList>
        <TabPanel>
         <section className="grid lg:grid-cols-2 gap-5">
         {Fictions.map((book) => (
            <div key={book?.bookId}>
              <Link
                to={`/book/${book?.bookId}`}
                className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md "
              >
                <div>
                  <div className="bg-gray-500">
                    <img
                      src={book?.image}
                      alt=""
                      className="mx-auto py-4 bg-cover mb-4 h-52"
                    />
                  </div>
                  <ul className="flex gap-2">{book?.tag}</ul>
                  <h2 className="mb-1 text-xl font-semibold">{book?.bookName}</h2>
                  <p className="text-sm font-semibold text-gray-600">
                    By : {book?.author}
                  </p>
                </div>
                <div className="flex flex-wrap border-t-2 border-dashed border-gray-200 pt-4 justify-between">
                  <div className="space-x-2">{book?.category}</div>
                  <div className="flex space-x-2 text-gray-600">
                    <button
                      type="button"
                      className="flex gap-3 items-center p-1 space-x-1.5"
                    >
                      {book?.rating}
                      <span>
                        <FaRegStar></FaRegStar>
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
         </section>
        </TabPanel>
        <TabPanel>
         <section className="grid lg:grid-cols-2 gap-5">
         {Fantasys.map((book) => (
            <div key={book?.bookId}>
              <Link
                to={`/book/${book?.bookId}`}
                className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md "
              >
                <div>
                  <div className="bg-gray-500">
                    <img
                      src={book?.image}
                      alt=""
                      className="mx-auto py-4 bg-cover mb-4 h-52"
                    />
                  </div>
                  <ul className="flex gap-2">{book?.tag}</ul>
                  <h2 className="mb-1 text-xl font-semibold">{book?.bookName}</h2>
                  <p className="text-sm font-semibold text-gray-600">
                    By : {book?.author}
                  </p>
                </div>
                <div className="flex flex-wrap border-t-2 border-dashed border-gray-200 pt-4 justify-between">
                  <div className="space-x-2">{book?.category}</div>
                  <div className="flex space-x-2 text-gray-600">
                    <button
                      type="button"
                      className="flex gap-3 items-center p-1 space-x-1.5"
                    >
                      {book?.rating}
                      <span>
                        <FaRegStar></FaRegStar>
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
         </section>
        </TabPanel>
        <TabPanel>
         <section className="grid lg:grid-cols-2 gap-5">
         {Thrillers.map((book) => (
            <div key={book?.bookId}>
              <Link
                to={`/book/${book?.bookId}`}
                className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md "
              >
                <div>
                  <div className="bg-gray-500">
                    <img
                      src={book?.image}
                      alt=""
                      className="mx-auto py-4 bg-cover mb-4 h-52"
                    />
                  </div>
                  <ul className="flex gap-2">{book?.tag}</ul>
                  <h2 className="mb-1 text-xl font-semibold">{book?.bookName}</h2>
                  <p className="text-sm font-semibold text-gray-600">
                    By : {book?.author}
                  </p>
                </div>
                <div className="flex flex-wrap border-t-2 border-dashed border-gray-200 pt-4 justify-between">
                  <div className="space-x-2">{book?.category}</div>
                  <div className="flex space-x-2 text-gray-600">
                    <button
                      type="button"
                      className="flex gap-3 items-center p-1 space-x-1.5"
                    >
                      {book?.rating}
                      <span>
                        <FaRegStar></FaRegStar>
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
         </section>
        </TabPanel>
        <TabPanel>
         <section className="grid lg:grid-cols-2 gap-5">
         {YoungAdults.map((book) => (
            <div key={book?.bookId}>
              <Link
                to={`/book/${book?.bookId}`}
                className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md "
              >
                <div>
                  <div className="bg-gray-500">
                    <img
                      src={book?.image}
                      alt=""
                      className="mx-auto py-4 bg-cover mb-4 h-52"
                    />
                  </div>
                  <ul className="flex gap-2">{book?.tag}</ul>
                  <h2 className="mb-1 text-xl font-semibold">{book?.bookName}</h2>
                  <p className="text-sm font-semibold text-gray-600">
                    By : {book?.author}
                  </p>
                </div>
                <div className="flex flex-wrap border-t-2 border-dashed border-gray-200 pt-4 justify-between">
                  <div className="space-x-2">{book?.category}</div>
                  <div className="flex space-x-2 text-gray-600">
                    <button
                      type="button"
                      className="flex gap-3 items-center p-1 space-x-1.5"
                    >
                      {book?.rating}
                      <span>
                        <FaRegStar></FaRegStar>
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
         </section>
        </TabPanel>
      </Tabs>
  );
};

export default Category;
