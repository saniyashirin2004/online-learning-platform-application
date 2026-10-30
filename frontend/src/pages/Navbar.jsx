import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

 // ✅ Auth check ONLY using token
  const token = localStorage.getItem("isLoggedIn") === "true";
  console.log(token);

  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  

  // ✅ Safe user parsing
  let user = null;
  try {
    const storedUser = localStorage.getItem("userDetails");
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    user = null;
  }

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    // navigate("/login");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbarContainer">
      <aside className="logo">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.H_SU-8bZPrsc1v0AMn7uuAHaHd?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="logo"
        />
      </aside>

      <aside className="menu">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/trainer">Trainers</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>

          {!token ? (
            <>
              <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li id="username">
                👤 Hi, {user?.username}
              </li>
              <li>
                <button id="logoutBtn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ol>
      </aside>
    </nav>
  );
};

export default Navbar;
