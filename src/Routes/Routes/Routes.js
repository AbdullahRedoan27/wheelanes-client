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
import Categories from "../../Pages/Categories/Categories";
import AllProducts from "../../Pages/Products/AllProducts/AllProducts";
import AllUsers from "../../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AllSeller from "../../Pages/Dashboard/AdminDashboard/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/AdminDashboard/AllBuyer/AllBuyer";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";

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
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/sellCar",
        element: <SellACar></SellACar>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dashboard/productDetails/${params.id}`),
      },
      {
        path: "/dashboard/productDetails/editProduct/:id",
        element: <EditProduct></EditProduct>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/dashboard/productDetails/editProduct/${params.id}`
          ),
      },
      {
        path: "/dashboard/alluser",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/allseller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyer></AllBuyer>,
      },
    ],
  },
]);

export default router;
