
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ErrorPage from './Components/Home'
import Participate from './Components/Participate'
import NavbarWrapper from './Components/NavbarWrapper'
import About from './Components/About'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      errorElement: <ErrorPage />,
      children :[{
          path: "/",
          element: <Home />,

      },
      {
        path: "/about",
        element: <About/>,
      }
    ]
    },
  ])

  return (
    <>
            <RouterProvider router={router} />
    </>
  )
}

export default App;
