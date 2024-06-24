import { BrowserRouter, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Use element prop for rendering components */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardWithNavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

function DashboardWithNavbar() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
