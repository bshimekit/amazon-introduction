import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe('pk_test_51OkAG3AuhD8kE2zNi9I3Q7QQVaKLzxw1eXFxFzQLRcniKZx4ZggRD6QSq1wGVuFC3M438YKgcA6bXgQL6V89RDZE00S7yG9V8s');
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={
          <ProtectedRoute msg={"You must login to pay"} redirect={"/payments"}>

          <Elements stripe={stripePromise}>

            <Payment />

          </Elements>

          </ProtectedRoute>
        } />
          
        <Route path="/orders" element={
          
          <ProtectedRoute msg={"You must login to access your orders"} redirect={"/orders"}>
          <Orders />
          </ProtectedRoute>
        } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
