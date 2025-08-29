import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const submitItem = (data) => API.post("/items", data);
export const getApprovedItems = () => API.get("/items/approved");
export const getPendingItems = () => API.get("/items/pending");
export const updateStatus = (id, status) => API.put(`/items/status/${id}`, { status });
export const claimItem = (id, claimantId) => API.put(`/items/claim/${id}`, { claimantId });
//get user by id
export const getUserById = (id) => API.get(`/users/${id}`);

//user api
export const registerUser = (data) => API.post("/users/register", data);
// services/api.js
export const loginUser = async (formData) => {
  try {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const data = await res.json();
    console.log("🔍 Login API Response:", data);
    return data;  // ⚡ return the entire response
  } catch (err) {
    console.error("Login Error:", err);
    return null;
  }
};

export const isAuthenticated = () => {
    const user = sessionStorage.getItem("user");
    if (!user) return false;
    return JSON.parse(user); //
}