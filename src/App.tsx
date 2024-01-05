import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import Login from "./layouts/login";

/*  */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
