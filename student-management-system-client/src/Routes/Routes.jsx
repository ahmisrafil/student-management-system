
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import StudentLogin from "../Pages/Login/StudentLogin";
import TeacherLogin from "../Pages/Login/TeacherLogin";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement :  <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/student-login",
            element: <StudentLogin></StudentLogin>
        },
        {
            path: "/teacher-login",
            element: <TeacherLogin></TeacherLogin>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);