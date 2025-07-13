import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import the CSS file


const Signup = () => {
 const navigate = useNavigate();

  const signupSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="signup-container">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(values) => {
          localStorage.setItem("registeredUser", JSON.stringify(values));
          alert("Signup successful!");
          navigate('/login')
        }}
      >
        {() => (
          <Form className="signup-form">
            <h2 className="form-title">Registration Form</h2>{" "}
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field name="confirmPassword" type="password" />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            <button type="submit" className="submit-btn">
              Register Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
