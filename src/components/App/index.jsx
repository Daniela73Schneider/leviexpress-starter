import React from 'react';
import { Reservation } from '../Reservation';
import { Footer } from '../Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Router,
} from 'react-router-dom';
import { Header } from '../Header';
import { Home } from '../Home';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/reservation', element: <Reservation /> },
]);

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);
