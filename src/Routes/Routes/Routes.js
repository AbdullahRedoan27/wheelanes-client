import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout"
import Main from "../../Layout/Main/Main"
import SellACar from "../../Pages/Dashboard/SellACar/SellACar"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login"
import Register from "../../Pages/Register/Register"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/addproduct',
                element:<SellACar></SellACar>
            }
        ]
    }
])

export default router;