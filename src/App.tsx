import "./App.css";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import AppDashboard from "./layouts/App/AppDashboard";
import Login from "./layouts/login";
import Profile from "./components/Profile";
import AppHeader from "./layouts/App/AppHeader";
import Dashboard from "./layouts/Dashboard";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
