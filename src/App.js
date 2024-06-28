import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUp';
import LogIn from './pages/LogIn';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import ViewProduct from './pages/productDetails';
import NotFound from './pages/notFound';
import Cart from './pages/cart';
import ProductCategory from './pages/Category';
import CheckOut from './pages/checkOut';
import AllProducts from "./pages/products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop";
import YourOrders from "./pages/orders";

function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<SignUpPage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/productDetails/:id' element={<ViewProduct/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/Category/:category' element={<ProductCategory/>} />
          <Route path='/checkOut' element={<CheckOut/>} />
          <Route path='/orders' element={<YourOrders/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
          <Footer/>
          <ScrollToTop/>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
