
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
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
              
              <input placeholder="Password" className="loginInput" />
              
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
               <Link className="Link" to="/register">Create Account</Link>
              </button>
            </div>
            <span className="bottomText">
          <b className="bottomTextBold">Create a page </b>  for a celebrity, brand or business.
          </span>
          </div>
         
        </div>
        
      </div>
    );
  }
  