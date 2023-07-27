import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'
function App() {


  return (
    <div className='main-app flex-col min-h-screen s' >
      <div className="flex-1">
      <Navbar />
      <MainContent />
      </div>
        <Footer />
    </div>
  )
}

export default App
