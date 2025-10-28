import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import StoreContextProvider from "./Context/Context";
import Layout from "./Layout/Layout";

// Pages
import Home from "./Pages/Home/Home";
import Advertisements from "./Pages/Advertisements/Advertisements";
import SpecificCategory from "./Pages/SpecificCategory/SpecificCategory";
//  Lazy Loading
const DetailsLayout = lazy(() => import("./Pages/DetailsLayout/DetailsLayout"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const AboutUS = lazy(() => import("./Pages/AboutUs/AboutUS"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));

// Auth pages
import Login from "./Pages/Auth/Login/Login";
import ShowAnyUser from "./Pages/ShowAnyUser/ShowAnyUser";
import UserProfile from "./Pages/UserProfile/UserProfile";
import AccountUser from "./Pages/UserProfile/AccountUser/AccountUser";
const Register = lazy(() => import("./Pages/Auth/Register/Register"));
const ResetPassword = lazy(() => import("./Pages/Auth/ResetPassword/ResetPassword"));
const ForgotPassword = lazy(() => import("./Pages/Auth/ForgotPassword/ForgotPassword"));

const router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/aboutUs", element: <AboutUS /> },
      { path: "/blog", element: <Blog /> },
      { path: "/advertisements", element: <Advertisements /> },
      { path: "/:category", element: <SpecificCategory /> },
      { path: "/:details/:id", element: <DetailsLayout /> },
      { path: "/user/:name/:userID", element: <ShowAnyUser /> },
    ],
  },
  
  { path: "/userProfile", element: <UserProfile />, children: [
    { index: true, element: <AccountUser /> },
  ] },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  { path: "/resetPassword", element: <ResetPassword /> },

]);

const App = () => {
  return (
    <StoreContextProvider>
      <Suspense fallback={<div className="loader">جارٍ تحميل الصفحة...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StoreContextProvider>
  );
};

export default App;