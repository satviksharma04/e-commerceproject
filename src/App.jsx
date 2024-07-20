import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import CategoryPage from './pages/CategoryPage'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /><Footer /></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /><Footer /></>
  },
  {
    path: "/men",
    element: <><Navbar /><Men /><Footer /></>
  },
  {
    path: "/women",
    element: <><Navbar /><Women /><Footer /></>
  },
  {
    path: "/product/:section/:category/:productId",
    element: <><Navbar /><ProductDetail  /><Footer /></>
  },
  {
    path: "/:section/:categoryName",
    element: <><Navbar /><CategoryPage /><Footer /></>
  },
  {
    path: "/contact",
    element: <><Navbar /><Contact /><Footer /></>
  },
  { 
    path: "/cart",
    element: <><Navbar /><Cart /><Footer /></> 
  },
  { 
    path: "/checkout",
    element: <><Navbar /><Checkout /><Footer /></> 
  }

])

const App = () => {
  return (
    <div>

        <RouterProvider router={router} />

    </div>
  )
}

export default App

