import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Books from "../../Component/Books/Books";

const Home = () => {
  const booksData = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <Books booksData={booksData}></Books>
    </>
  );
};

export default Home;
