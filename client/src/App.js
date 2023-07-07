import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import useAPI from "./Components/useAPI";
import Navbar from "./Components/Navbar";
import AuthImages from "./pages/AuthImages";
import Footer from "./Components/Footer";
import AuthContext from "./Context/AuthContext/AuthContext";
import React from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { fetchDataFromDB, setResponseData, responseData } = useAPI();
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, fetchDataFromDB, responseData, setResponseData }}>
      <div className="flex flex-col w-screen min-h-screen bg-richblack-900">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/authimages/:source" element={<AuthImages />}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
