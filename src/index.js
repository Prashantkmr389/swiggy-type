import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './app';

import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import About from "./components/About";
// import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Profile from "./components/Profile";
import { lazy, Suspense } from 'react';

const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact')); // lazy loading
// import Instamart from './components/Instamart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About Page is loading</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Contact Page is loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantsMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>This is loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

