import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import PageToRead from "../Pages/PageToRead/PageToRead";
import BookDetails from "./BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBook/ListedBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/FakeData.json'),
      },
      {
        path: "/listedBook",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch("/public/FakeData.json")

      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>

      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch("/public/FakeData.json")

      }
      
    ]
  },
]);

export default router;