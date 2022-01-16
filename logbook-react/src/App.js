import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

// Components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

// Pages
import { Home } from './pages/Home'
import { Login } from './pages/Login'

// Check Token
const tokenDefault = localStorage.getItem("accessToken")

if(tokenDefault) {
  const decodeToken = jwt_decode(tokenDefault)

  if(decodeToken.exp*1000 < Date.now()) {
    window.location.href = "/"
  }
}

const App = () => {
  return (
    <div className="App flex flex-col h-screen justify-between bg-myrose-100">
      <BrowserRouter>
          <Navbar user={"Ruangyot"}/>
              <Routes>
                  <Route>
                      <Route path="/" element={<Login />} />
                      <Route path="/logbook" element={<Home />} />
                  </Route>
              </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
