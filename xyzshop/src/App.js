import React from 'react'
import TopMenu from './components/TopMenu'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import LandingPage from './components/products/LandingPage'
import Products from './components/products/products'
import ContactUs from './components/products/ContactUs'
import NotFound from './components/products/NotFound'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import Login from './components/Login'
import AddToCart from './components/AddToCart'
import AdminPanel from './components/AdminPanel'
function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/addtocart" element={<AddToCart />} />
          <Route exact path="/adminpanel" element={<AdminPanel />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/notfound" element={<NotFound />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/homepage" element={<HomePage />}></Route>

          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
