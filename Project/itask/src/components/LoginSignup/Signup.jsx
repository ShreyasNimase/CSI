import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Registration</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name" className="signup-label">Name: </label>
            <input type="text" name="name" id="name" />
          </div>
         <div className="form-group">
            <label htmlFor="email" className="signup-label" >Email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="signup-label" >Password: </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="signup-label">Confirm Password: </label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
          </div>
        </form>
        <div className="policy">
              <input type="checkbox" id="terms"/>
              <label htmlFor="terms">I accept all terms & conditions</label>
        </div>
        <Link to='/login'>
       <button className="signup-button">Register Now</button>
      </Link>
      </div>
    </div>
  );
}

export default Signup;
