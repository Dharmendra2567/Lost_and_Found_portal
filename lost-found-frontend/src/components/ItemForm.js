import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, submitItem } from "../services/api";

export default function ItemForm() {
  const [form, setForm] = useState({ title: "", description: "",location:"", category: "Lost" , user:isAuthenticated().user._id});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitItem(form);
    if (window.confirm("✅ Submitted successfully! Click OK to go back to Home.")) {
      navigate("/");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow-lg p-4 border-0" style={{ maxWidth: "500px", width: "100%", borderRadius: "20px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary animate__animated animate__fadeInDown">
          Submit Lost / Found Item
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              placeholder="Enter title..."
              style={{ borderRadius: "12px", transition: "0.3s" }}
              onFocus={(e) => (e.target.style.border = "2px solid #0d6efd")}
              onBlur={(e) => (e.target.style.border = "1px solid #ced4da")}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control shadow-sm"
              placeholder="Enter description..."
              rows="3"
              style={{ borderRadius: "12px", transition: "0.3s" }}
              onFocus={(e) => (e.target.style.border = "2px solid #0d6efd")}
              onBlur={(e) => (e.target.style.border = "1px solid #ced4da")}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            ></textarea>
          </div>

          {/* //location */}
        <div className="mb-3">
            <label className="form-label fw-semibold">Location</label>
             <input
              type="text"
              className="form-control form-control-lg shadow-sm"
              placeholder="Enter location"
              style={{ borderRadius: "12px", transition: "0.3s" }}
              onFocus={(e) => (e.target.style.border = "2px solid #0d6efd")}
              onBlur={(e) => (e.target.style.border = "1px solid #ced4da")}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
        </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select
              className="form-select shadow-sm"
              style={{ borderRadius: "12px" }}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option>Lost</option>
              <option>Found</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold shadow"
            style={{ borderRadius: "12px", transition: "0.3s", fontSize: "1.1rem" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            🚀 Submit
          </button>
        </form>
      </div>
    </div>
  );
}
