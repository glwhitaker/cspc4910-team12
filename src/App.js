import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';
import Register from './components/register';
import ForgotPass from './components/forgotPass'
import VerifyCode from './components/verifyCode'
import Catalog from './pages/catalog'
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/profile'
import SponsorDashboard from './pages/SponsorDashboard'
import Update from './pages/update'
import { AuthContext } from './components/AuthContext';

import Cart from './pages/cart';
import Addpoints from './pages/addpoints';
import Checkout from './pages/checkout';
import Orders from './pages/orders';


function App() {  
    const { user, dbUser,signOut } = useContext(AuthContext);
    return (
        <Router>
        <Navbar user={user} onSignOut={signOut}/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<VerifyCode />} />
            <Route path="/about" element={<About />} />
            <Route path="/forgot" element={<ForgotPass />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addpoints" element={<Addpoints />} />

            /* Anything below this is protected. It cannot be accessed unless the user is logged in. */
            <Route path="/profile" element={<ProtectedRoute user={user} target={<Profile />} alternativeContent={<Login />}/>}/>
            <Route path="/catalog" element={<ProtectedRoute user={user} target={<Catalog />} alternativeContent={<Login />} />} />
            <Route path="/sponsor" element={<ProtectedRoute user={user} target={<Addpoints />} alternativeContent={<Login />} />} />
            <Route path="/update" element={<ProtectedRoute user={ user } target={<Update  user={user}/>} alternativeContent={<Login />} />} />
            <Route path="/checkout" element={<ProtectedRoute user={ user } target={<Checkout  user={user}/>} alternativeContent={<Login />} />} />
            <Route path="/orders" element={<ProtectedRoute user={ user } target={<Orders  user={user}/>} alternativeContent={<Login />} />} />
        </Routes>
    </Router>
    );
  } export default App;


              