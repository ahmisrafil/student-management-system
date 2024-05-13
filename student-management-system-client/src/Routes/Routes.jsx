
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import StudentLogin from "../Pages/Login/StudentLogin";
import TeacherLogin from "../Pages/Login/TeacherLogin";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Registration from "../Pages/Dashboard/Registration";
import Profile from "../Pages/Dashboard/Profile";
import Courses from "../Pages/Dashboard/Courses";
import Results from "../Pages/Dashboard/Results";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile";

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
            path: "student-login",
            element: <StudentLogin></StudentLogin>
        },
        {
            path: "teacher-login",
            element: <TeacherLogin></TeacherLogin>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        },
        
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "profile",
          loader: () => fetch('/data.json'),
          element: <Profile></Profile>
        },
        {
          path: "courses",
          loader: () => fetch('/data.json'),
          element: <Courses></Courses>
        },
        {
          path: "results",
          element: <Results></Results>
        },
        {
          path: "update-profile/:id",
          element: <UpdateProfile></UpdateProfile>,
          // loader: ({params}) => fetch(`https://localhost:5000/user/${params?.id}`)
          loader: ({params}) => fetch(`http://localhost:5000/users/${params?.id}`)
        },
        {
          path: "registration/:id",
          element: <Registration></Registration>,
          loader: ({params}) => fetch(`http://localhost:5000/users/${params?.id}`)
        },
      ]
    },
  ]);