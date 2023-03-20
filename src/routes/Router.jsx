import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Login = lazy(() => import('../pages/account/login/Login'));
const Signin = lazy(() => import('../pages/account/signin/Signin'));
const Product = lazy(() => import("../pages/product/Product"))

export default function Router() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element = {<Product />}/>
            <Route path="/account/" element = {<Outlet />}>
              <Route path="login/" element = {<Login />}/>
              <Route path="signin/" element = {<Signin />}/>
            </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
