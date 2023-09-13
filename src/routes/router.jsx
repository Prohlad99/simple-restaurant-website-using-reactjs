import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/signUp/SignUp";
import Cart from './../pages/cart/Cart';
import Contact from './../pages/contact/Contact';
import Dashboard from './../pages/dashboard/Dashboard';
import Home from './../pages/home/Home';
import Menu from './../pages/menu/Menu';
import Shop from './../pages/shop/Shop';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);