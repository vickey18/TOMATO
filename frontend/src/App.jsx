import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import React, { useContext,useState } from "react";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from "./context/StoreContext"

function App() {

  const [showLoginPopup, setshowLoginPopup] = useState(false);
  const {nightMode} = useContext(StoreContext) 


  return (

    <>
    <ToastContainer/>
    {showLoginPopup&&<LoginPopup setshowLoginPopup={setshowLoginPopup}/>}
    <div className={nightMode?"app nightactive":"app"}>
      <Navbar setshowLoginPopup={setshowLoginPopup}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/order" element={<PlaceOrder></PlaceOrder>} />
      </Routes>
    </div>
    <Footer/>
    </>

  
  )
}

export default App
