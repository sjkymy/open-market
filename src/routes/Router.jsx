import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Loading = lazy(() => import("../components/loading/Loading"));
const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import('../pages/account/login/LoginMain'));
const Join = lazy(() => import('../pages/account/join/JoinMain'));
const ProductDetail = lazy(() => import("../pages/productDetail/ProductDetail"))
const Order = lazy(() => import("../pages/pay/ProductPay"))
const Cart = lazy(() => import("../pages/cart/Cart"));
const MyPage = lazy(() => import("../pages/myPage/MyPage"));

export default function Router() {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
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
        <Route path="/order" element = {<Order/>} />
        <Route path="/mypage" element = {<MyPage/>} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}
