import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import PageToRead from "../Pages/PageToRead/PageToRead";
import BookDetails from "./BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBook/ListedBook";
import Category from "../Pages/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/FakeData.json'),
      },
      {
        path: "/listedBook",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch("/FakeData.json")

      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>,
        loader: ()=> fetch("/FakeData.json")

      },
      {
        path: "/category",
        element: <Category></Category>,
        loader: ()=> fetch("/FakeData.json")
      },
      
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch("/FakeData.json")

      }
      
    ]
  },
]);

export default router;