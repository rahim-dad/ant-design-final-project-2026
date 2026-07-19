import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./containers/MainLayout";
import HomePage from "./containers/HomePage";
import Profile from "./containers/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          path="/profile/:id"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;