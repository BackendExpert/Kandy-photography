import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App