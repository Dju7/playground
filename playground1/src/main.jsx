import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Todo from './pages/todo/index.jsx';
import Calendar from './pages/calendar/index.jsx';
import Home from './pages/home/index.jsx';
import Mastermind from './pages/mastermind/index.jsx';


// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/>},
      { path: "/todo", element: <Todo/>},
      { path: "/calendar", element: <Calendar/>},
      { path: "/mastermind", element: <Mastermind/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={Router} />
  </React.StrictMode>,
)
