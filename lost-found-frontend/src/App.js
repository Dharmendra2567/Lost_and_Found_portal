import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import ModeratorDashboard from "./components/ModeratorDashboard";
import Login from "./pages/Login";
import { useState } from "react";
import Register from "./pages/Register";
import UserLogin from "./pages/UserLogin";
import { isAuthenticated } from "./services/api";

function App() {
  const [user, setUser] = useState(null); // store logged-in user

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemList />} />

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/submit" element={<ItemForm />} />
        <Route path="/user-login" element={<UserLogin setUser={setUser} />} /> 
        console.log("The currect logged in user is",user);
        {/* Protected Route for Moderator */}
        <Route
          path="/moderator"
          element={
            user?.role === "admin" ? (
              <ModeratorDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
