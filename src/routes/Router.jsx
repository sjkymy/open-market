import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import('../pages/account/login/LoginMain'));
const Join = lazy(() => import('../pages/account/join/JoinMain'));
const ProductDetail = lazy(() => import("../pages/productDetail/ProductDetail"))
const Cart = lazy(() => import("../pages/cart/Cart"));

export default function Router() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/account/" element = {<Outlet />}>
          <Route path="login/" element = {<Login />}/>
          <Route path="join/" element = {<Join />}/>
        </Route>
        <Route path="/products/" element = {<Outlet />}>
          <Route path=":product_id" element = {<ProductDetail />}/>
        </Route>
        <Route path="/cart" element = {<Cart />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}
