import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layouts/LayoutLogin";
import LayoutDashboard from "./layouts/LayoutDashboard";
import Navbar from "./layouts/Navbar";
import AppLayout from "./layouts/App/AppLayout";
import { ModalContextProvider } from "./utils/modalContext";
import ModalImgCard from "./components/Modal/ModalImgCard";

function App() {
  return (
    <ModalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <LayoutDashboard />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/app/*" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  );
}

export default App;
