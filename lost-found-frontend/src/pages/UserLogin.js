import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated, loginUser } from "../services/api";


export default function UserLogin({ setUser }) {
    let {user} = isAuthenticated();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await loginUser(form);

  if (res) {
    // check if user object exists or take directly from response
    const userData = res;

    if (!userData.user.username) {
      alert("❌ User data not found in response!");
      return;
    }

    // store in state
    setUser(userData);

    // store in session storage
    sessionStorage.setItem("user", JSON.stringify(userData));

    console.log("✅ Current logged in user:", user);

    if (window.confirm("✅ Logged in successfully! Click OK to go Home.")) {
      navigate("/");
    }
  } else {
    alert("❌ Invalid email or password!");
  }
};


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div
        className="card shadow-lg p-4 border-0 animate__animated animate__fadeInUp"
        style={{ maxWidth: "500px", width: "100%", borderRadius: "20px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">🔑 Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control shadow-sm"
              placeholder="Enter email"
              style={{ borderRadius: "12px" }}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control shadow-sm"
              placeholder="Enter password"
              style={{ borderRadius: "12px" }}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold shadow"
            style={{ borderRadius: "12px", fontSize: "1.1rem", transition: "0.3s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}>
            🔓 Sign In
          </button>
        </form>
        <p className="mt-3 text-center">
          Don’t have an account? <Link to="/register" className="text-success fw-bold">Register</Link>
        </p>
      </div>
    </div>
  );
}
