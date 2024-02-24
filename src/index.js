import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "./Component/Signin";
import SignUp from "./Component/Signup";
import ProductPage from "./Component/ProductPage";
import ProductInfo from "./Component/ProductInfo";
import Carts from "./Component/Carts";
import { Provider } from "react-redux";
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/products/*" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
