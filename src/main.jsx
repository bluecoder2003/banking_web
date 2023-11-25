import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Landing, Login, Login1, Signup, Signup1, Signup2, Signup3 } from './component/index.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/login1",
    element: <Login1 />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signup/signup1",
    element: <Signup1 />,
  },
  {
    path: "/signup/signup1/signup2",
    element: <Signup2 />,
  },
  {
    path: "/signup/signup1/signup2/signup3",
    element: <Signup3 />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
