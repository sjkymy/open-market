import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Login = lazy(() => import('../pages/account/login/LoginMain'));
const Join = lazy(() => import('../pages/account/join/Join'));
const Home = lazy(() => import("../pages/home/Home"));
// const Product = lazy(() => import("../pages/product/Product"))

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
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
