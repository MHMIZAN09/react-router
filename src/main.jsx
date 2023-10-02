import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import PostDetail from './component/PostDetail/PostDetail';
import Posts from './component/Posts/Posts';
import Users from './component/Users/Users';
import './index.css';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/posts",
        loader:() =>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/post/:postId",
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetail></PostDetail>
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
