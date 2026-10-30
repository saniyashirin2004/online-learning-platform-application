import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import Courses from './pages/courseComponent/Courses'
import ContactUs from './pages/authComponent/ContactUs'
import Trainers from './pages/trainerComponent/Trainers'
import Login from './pages/authComponent/Login'
import Register from './pages/authComponent/Register'
import PageNotFound from './pages/PageNotFound'
import CreateCourse from './pages/courseComponent/CreateCourse'
import EditCourse from './pages/courseComponent/EditCourse'
import ProtectedRouting from './pages/authComponent/ProtectedRouting'

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          element: <ProtectedRouting />,
          children: [
            {
              path: "/createCourse",
              element: <CreateCourse />,
            },
            {
              path: "/editCourse/:id",
              element: <EditCourse />,
            },
            {
              path: "/trainer",
              element: <Trainers />,
            },
          ]
        },

        {
          path: "*",
          element: <PageNotFound />,
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
