import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";
import PageToRead from "../Pages/PageToRead/PageToRead";
import BookDetails from "./BookDetails/BookDetails";

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
        element: <ListedBook></ListedBook>

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