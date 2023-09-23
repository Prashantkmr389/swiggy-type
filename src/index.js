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
import Processing from './cards/Processing';
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
          <Suspense fallback=<Processing />>
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
          <Suspense fallback=<Processing />>
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
          <Suspense fallback=<Processing />>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

