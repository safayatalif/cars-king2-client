import {createBrowserRouter} from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import AllToys from "../../pages/allToys/AllToys";
import AddToys from "../../pages/addToys/AddToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"all-toys",
                element:<AllToys></AllToys>,
                loader: ()=> fetch('http://localhost:5000/getToyCars')
            },
            {
                path:"add-toys",
                element:<AddToys></AddToys>
            }
        ]
    },
]);

export default router