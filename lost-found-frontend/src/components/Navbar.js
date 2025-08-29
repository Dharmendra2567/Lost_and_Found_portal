
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../services/api";

export default function Navbar() {
  const {user} = isAuthenticated();

    const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    console.log("The current logged in user is",user);
    
      setUsername(isAuthenticated() ? isAuthenticated().user.username : "");
    
  }, [{user}]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-4 text-uppercase">
          Lost & Found
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
            
            {/* Home Link */}
            <Link
              to="/"
              className="nav-link text-white fw-semibold px-3 py-2 rounded hover-effect"
            >
              Home
            </Link>

            {/* Submit Item Link */}
            <Link
            to={isAuthenticated().user ? "/submit" : "/user-login"}

             onClick={(e) => {
        if (!isAuthenticated()?.user) {
          e.preventDefault(); // stop navigation
          const goLogin = window.confirm("⚠️ You need to log in before submitting an item. Click OK to go to login page.");
          if (goLogin) {
            navigate("/user-login"); // redirect programmatically
          }
        }
      }}

              className="nav-link text-white fw-semibold px-3 py-2 rounded hover-effect"
            >
              Submit Item
            </Link>

            {/* Moderator Dashboard */}
            <Link
              to="/moderator"
              className="nav-link text-white fw-semibold px-3 py-2 rounded hover-effect"
            >
              Moderator
            </Link>

                 {username && (
              <div className="d-flex align-items-center ms-3">
                <span className="text-white me-2">
                  Hello, <strong>{username}</strong>
                </span>
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => {
                    sessionStorage.removeItem("user");
                    setUsername("");
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
            {!username && (
              <Link
                to="/user-login"
                className="btn btn-sm btn-outline-light fw-semibold px-3 py-2 rounded hover-effect"
              >
                Login
              </Link>
            ) }
          </div>
        </div>
      </div>
    </nav>
  );
}


