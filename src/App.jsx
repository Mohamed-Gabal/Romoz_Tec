import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import StoreContextProvider from "./Context/Context";
import Layout from "./Layout/Layout";

// Pages
import Home from "./Pages/Home/Home";
import Advertisements from "./Pages/Advertisements/Advertisements";

// Auth pages
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import AboutUS from "./Pages/AboutUs/AboutUS";

const router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "/aboutUs", element: <AboutUS /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  { path: "/resetPassword", element: <ResetPassword /> },

  // ✅ صفحة "أضف إعلانك"
  { path: "/category", element: <Advertisements /> },
]);

const App = () => {
  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
    );
};

export default App;