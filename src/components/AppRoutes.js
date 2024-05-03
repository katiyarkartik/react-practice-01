import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Employee from "./Employee";
import Parent from "./Parent";
import Page404 from "./Page404";
import Home from "./Home";
import Menubar from "./Menubar";
import AddEmp from "./AddEmp";
const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Menubar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {isLoggedIn && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEmp />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/employee" element={<Employee/>}/>
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route
              path="/login"
              element={
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route
              path="*"
              element={
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
          </>
        )}
      </Routes>
    </>
  );
};

export default AppRoutes;


 {/* <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/employee"
          element={isLoggedIn ? <Employee /> : <Login />}
        />
        <Route path="/parent" element={isLoggedIn ? <Parent /> : <Login />} />
        <Route path="*" element={isLoggedIn ? <Page404 /> : <Login />} />
        <Route path="/add" element={isLoggedIn ? <AddEmp /> : <Login />} />
      </Routes> */}