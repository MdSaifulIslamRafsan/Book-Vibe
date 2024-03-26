import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getWishlistData } from "../../Utilities/Wishlist";
import { getLocalStorageReadData } from "../../Utilities/Read";
import { useLoaderData } from "react-router-dom";


const ListedBooks = () => {
  const booksData = useLoaderData(); 
  const [tabIndex, setTabIndex] = useState(0);

    const getWishlists = getWishlistData();
    const getReadBooks = getLocalStorageReadData();


    const readBooks = booksData.filter((book)=> getReadBooks.includes(book?.bookId));
    const wishlists = booksData.filter((book) => getWishlists.includes(book?.bookId))


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
          {
            readBooks.map((book , index)=> <section key={index}>
            <h1>{book?.bookName}</h1>
            
            </section>)
          }
        </TabPanel>
        <TabPanel>
          {
            wishlists.map((book , index)=> <section key={index}>
            <h1>{book?.bookName}</h1>
            
            </section> )
          }
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ListedBooks;