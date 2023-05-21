import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import AllToys from "../../pages/allToys/AllToys";
import AddToys from "../../pages/addToys/AddToys";
import ToyDetails from "../../pages/toyDetails/ToyDetails";
import MyToys from "../../pages/myToys/MyToys";
import UpdateToy from "../../components/updateToy/UpdateToy";
import PrivateRoute from './../privateRoute/PrivateRoute';
import Blog from "../../pages/blog/Blog";
import ErrorPage from "../../pages/errorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "all-toys",
                element: <AllToys></AllToys>,
                loader: () => fetch('https://cars-king-server.vercel.app/getToyCars')
            },
            {
                path: "my-toys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "toy-details/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cars-king-server.vercel.app/getToyCarsById/${params.id}`)
            },
            {
                path: "add-toys",
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "update-toy/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://cars-king-server.vercel.app/getToyCarsById/${params.id}`)
            }
        ]
    },
]);

export default router