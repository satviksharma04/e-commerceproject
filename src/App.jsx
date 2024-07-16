import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Contact from './pages/Contact'
import Footer from './components/Footer'


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
    path: "/kids",
    element: <><Navbar /><Kids /><Footer /></>
  },
  {
    path: "/contact",
    element: <><Navbar /><Contact /><Footer /></>
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

