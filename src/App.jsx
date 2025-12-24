import React from 'react'
import './index.css';

import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
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
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import OrderCompletion from './pages/OrderCompletion';
import CheckoutDetail from './components/CheckoutDetail/CheckoutDetail';
import MyAccount from './pages/MyAccount';
import Error404 from './pages/Error404';
import Faqs from './pages/Faqs';
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './pages/AdminProducts';
import AdminProductForm from './pages/AdminProductForm';
import AdminOrders from './pages/AdminOrders';
import AdminCustomers from './pages/AdminCustomers';
import AdminReports from './pages/AdminReports';






const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin routes - no navbar/footer */}
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/products' element={<AdminProducts />} />
        <Route path='/admin/products/new' element={<AdminProductForm />} />
        <Route path='/admin/products/:id/edit' element={<AdminProductForm />} />
        <Route path='/admin/orders' element={<AdminOrders />} />
        <Route path='/admin/customers' element={<AdminCustomers />} />
        <Route path='/admin/reports' element={<AdminReports />} />

        {/* Public routes - with navbar/footer */}
        <Route element={<LayoutWithNavFooter />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productDetail/:id' element={<ProductDetail />} />
          <Route path='/singleBlog' element={<SingleBlog />} />
          <Route path='/singleBlog/:id' element={<SingleBlogSection />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orderCompletion' element={<OrderCompletion />} />
          <Route path='/checkoutDetail' element={<CheckoutDetail />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/404' element={<Error404 />} />
          <Route path='/faqs' element={<Faqs />} />
        </Route>
      </Routes>
    </Router>
  )
}

const LayoutWithNavFooter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App