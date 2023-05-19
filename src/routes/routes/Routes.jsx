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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                loader: () => fetch('http://localhost:5000/getToyCars')
            },
            {
                path: "my-toys",
                element: <MyToys></MyToys>
            },
            {
                path: "toy-details/:id",
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/getToyCarsById/${params.id}`)
            },
            {
                path: "add-toys",
                element: <AddToys></AddToys>
            },
            {
                path: "update-toy/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/getToyCarsById/${params.id}`)
            }
        ]
    },
]);

export default router