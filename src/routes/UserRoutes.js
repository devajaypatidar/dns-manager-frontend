import React from "react";
import { Route, Routes } from "react-router-dom";
import Domain from "../pages/domain";
import DNS from "../pages/DNS"


export default function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/domain"
          element={
              <Domain />
          }
        />
        <Route
          path="/dns"
          element={
            
              <DNS/>
            
          }
        />
        {/* <Route
          path="/signup"
          element={
            // <UserPublic>
              <SignUp />
            // </UserPublic>
          }
        /> */}
        {/* <Route
          path="/records"
          element={
            // <UserPublic>
              <Dashboard />
            // </UserPublic>
          }
        /> */}
      </Routes>
    </div>
  );
}