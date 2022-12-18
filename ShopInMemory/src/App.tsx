import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage";
import UserPage from "./pages/users/UserPage";
import SignupPage from "./pages/users/SignupPage";
import LoginPage from "./pages/users/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/users" element={<UserPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;