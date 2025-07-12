import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="login-label">
              Username:
            </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="login-label">
              Password:
            </label>
            <input type="password" id="password" name="password" />
          </div>
          <Link to="/home">
            <button className="login-btn" type="submit">
              Log in
            </button>
          </Link>
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
