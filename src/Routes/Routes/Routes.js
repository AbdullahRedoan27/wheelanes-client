import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import SellACar from "../../Pages/Dashboard/SellACar/SellACar";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import EditProduct from "../../Pages/EditProduct/EditProduct";
import Products from "../../Pages/Products/Products/Products";
import Categories from "../../Pages/Products/Categories/Categories";
import AllProducts from "../../Pages/Products/AllProducts/AllProducts";
import AllUsers from "../../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AllSeller from "../../Pages/Dashboard/AdminDashboard/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/AdminDashboard/AllBuyer/AllBuyer";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import ReportedItems from "../../Pages/Dashboard/AdminDashboard/ReportedItems/ReportedItems";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import Blogs from "../../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products",
        element: <Categories></Categories>,
      },
      {
        path: "/products/:category",
        element: <Products></Products>,
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/products/${params.category}`),
      },
      {
        path: "/products/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/dashboard/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dashboard/productDetails/${params.id}`),
      },
      {
        path: "/dashboard/alluser",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "/dashboard/allseller",
        element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
      },
      {
        path: "/dashboard/allbuyer",
        element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
      },
      {
        path:'/dashboard/reportedItems',
        element:<AdminRoute><ReportedItems></ReportedItems></AdminRoute>
      },
      {
        path:'/dashboard/mybuyers',
        element:<SellerRoute><MyBuyers></MyBuyers></SellerRoute>
      },
      {
        path:'/dashboard/myorders',
        element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
      },
      {
        path: "/dashboard/productDetails/editProduct/:id",
        element: <SellerRoute><EditProduct></EditProduct></SellerRoute>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/dashboard/productDetails/editProduct/${params.id}`
          ),
      },
      {
        path: "/dashboard/sellCar",
        element: <SellerRoute><SellACar></SellACar></SellerRoute>
      },
      {
        path: "/dashboard/myProducts",
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      }
    ]
  }
]);

export default router;
