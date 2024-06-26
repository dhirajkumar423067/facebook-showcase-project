import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">facebook</h3>
            <span className="loginDesc">
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password Again" className="loginInput" />
              
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">
                <Link className="Link" to="/login">Log into Account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  