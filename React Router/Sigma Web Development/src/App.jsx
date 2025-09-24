import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/user'
function App() {
  const router=createBrowserRouter([
    {path:"/",
      element:<><Navbar/><Home/></>
    },
    {path:"/Home",
      element:<><Navbar/><Home/></>
    },
    {path:'/Login',
      element:<><Navbar/><Login/></>
    },
    {path:'/About',
      element:<><Navbar/><About/></>
    },
    {path:'/user/:username',
      element:<><Navbar/><User/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
     </>
  )
}

export default App
