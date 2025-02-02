import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

const App = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <BrowserRouter>
      <div
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          showNavBar ? "translate-y-0" : "-translate-y-full "
        } `}
      >
        <Nav />
      </div>
      <Routes>
        <Route path='/' element={<HomePage /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App