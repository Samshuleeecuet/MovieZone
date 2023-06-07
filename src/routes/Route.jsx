import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Details from '../pages/Home/Details';
import BookMovie from '../pages/Home/BookMovie';

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/details/:id',
            element: <Details/>
        },
        {
          path: '/book/:id',
          element: <BookMovie/>
        }
      ]
    },
  ]);
export default router;