import { useRef, useState } from "react";
import "../index.css";

export default function Login() {
  //Admin Login
  const [adminEmail, setadminEmail] = useState("");
  const [adminPassword, setadminPassword] = useState("");

  //User Login
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const containerRef = useRef(null);

  const activateRegister = () => {
    containerRef.current?.classList.add("active");
  };

  const activateLogin = () => {
    containerRef.current?.classList.remove("active");
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include",
        body: JSON.stringify({ email: adminEmail, password: adminPassword }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Admin Login Successful");
      } else {
        alert(data.err || data);
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application.json" },
        // credentials: "include",
        body: JSON.stringify({ email: userEmail, password: userPassword }),
      });
      const data = await res.json();
      if (data.success) {
        alert("User Login Successful");
      } else {
        alert(data.err || data);
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up">
        <form onSubmit={handleUserLogin}>
          <h1>User Login</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registeration</span>
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setuserEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
          />
          <button>Sign In</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleAdminLogin}>
          <h1>Admin Login</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            value={adminEmail}
            onChange={(e) => setadminEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setadminPassword(e.target.value)}
          />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome User!</h1>
            <p>Enter your details to use all of site features</p>
            <button className="togglebtn" id="login" onClick={activateLogin}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Admin!</h1>
            <p>Enter details to access all details</p>
            <button
              className="togglebtn"
              id="register"
              onClick={activateRegister}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
