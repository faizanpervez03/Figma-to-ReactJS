import React from 'react'
import './index.css';

import Home from './pages/Home'
// import { Route, Router, Routes } from 'react-router';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import SingleBlog from './pages/SingleBlog';
import SingleBlogSection from './components/Blog/SingleBlogSection';
import Cart from './pages/Cart';
import OrderCompletion from './pages/OrderCompletion';
import OrderSummery from './components/CheckoutDetail/CheckoutDetail';
import CheckoutDetail from './components/CheckoutDetail/CheckoutDetail';
import MyAccount from './pages/MyAccount';
import Error404 from './pages/Error404';
import Faqs from './pages/Faqs';






const App = () => {
  return (
    <>
   

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/productDetail/:id' element={<ProductDetail />} ></Route>
        <Route path='/singleBlog' element={<SingleBlog />}></Route>
        <Route path='/singleBlog/:id' element={<SingleBlogSection />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/orderCompletion' element={<OrderCompletion />}></Route>
        <Route path='/checkoutDetail' element={<CheckoutDetail />}></Route>
        <Route path='/myaccount' element={<MyAccount />}></Route>
        <Route path='/404' element={<Error404 />}></Route>
        <Route path='/faqs' element={<Faqs />}></Route>

      
      </Routes>
      <Footer />
    </Router>


    </>
  )
}

export default App