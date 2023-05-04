import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoutes from "./PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoutes>
            <ChefDetails></ChefDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-pi.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blog></Blog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
