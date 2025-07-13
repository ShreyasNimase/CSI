import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css"; // CSS file

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (
    storedUser &&
    values.username === storedUser.username &&
    values.password === storedUser.password
  ) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", true);
    navigate("/home");
  } else {
    alert("Invalid credentials");
  }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="username" className="login-label">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="login-label">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button className="login-btn" type="submit">Log In</button>

            <p className="signup-text">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
