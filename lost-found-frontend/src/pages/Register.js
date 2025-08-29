import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ username: "", phone: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(form);
    if (window.confirm("🎉 Registered successfully! Click OK to Sign In.")) {
      navigate("/login");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div
        className="card shadow-lg p-4 border-0 animate__animated animate__fadeInUp"
        style={{ maxWidth: "500px", width: "100%", borderRadius: "20px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
      >
        <h2 className="text-center mb-4 fw-bold text-success">📝 Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Enter username"
              style={{ borderRadius: "12px" }}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Enter phone number"
              style={{ borderRadius: "12px" }}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>

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
            className="btn btn-success w-100 py-2 fw-bold shadow"
            style={{ borderRadius: "12px", fontSize: "1.1rem", transition: "0.3s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}>
            🚀 Register
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login" className="text-primary fw-bold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
