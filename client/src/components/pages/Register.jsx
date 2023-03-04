import React, { useEffect, useState } from "react";
import { signup } from "../../api/auth";
import { showSuccessMsg, showErrorMsg } from "../../helpers/message";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../helpers/authentication";
import bgblockchain from "../../images/blockchain.jpg"

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //role 1 = admin and role 0 = user
    if (isAuthenticated() && isAuthenticated().role === 1) {
      navigate("/nrb/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      console.log("here?");
      navigate("/user/dashboard");
    }
  }, [navigate]);
  //form Data
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirm_password: "",
    successMsg: "",
    errorMsg: "",
    loading: false,
  });
  //destructuring form data
  const {
    full_name,
    username,
    email,
    phonenumber,
    password,
    confirm_password,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  //on change in text field of form
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
      successMsg: "",
    });
  };

  //on submit of form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //check if all fields are filled
    if (
      !full_name ||
      !username ||
      !email ||
      !phonenumber ||
      !password ||
      !confirm_password
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required", //if not all fields are filled then set error message
      });
    } else if (password !== confirm_password) {
      setFormData({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      const { full_name, username, email, phonenumber, password } = formData;
      const data = { full_name, username, email, phonenumber, password }; //form data ma dherai fields xa so we are creating a new object with only required fields
      setFormData({ ...formData, loading: true });
      signup(data) //calling signup function from api/auth.js (axios post request)
        .then((response) => {
          //submit bhaye paxe success message set gareko baki lai empty gareko
          setFormData({
            full_name: "",
            username: "",
            email: "",
            phonenumber: "",
            password: "",
            confirm_password: "",
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        //sucessful bhayena bhane text field ko value same rakhyo ani error message set gareko
        .catch((err) => {
          console.log("Error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };
  const myStyle = {
    backgroundImage: `url(${bgblockchain})`,
    height: '100vh',

    // marginTop: '-70px',
    // fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
  };

  const showSignUpForm = () => (
    <div className="  m-5 card  shadow border-light text-light bg-transparent form-box">
      <h5 className="card-header">Decentralized KYC Sharing System</h5>
      <div className="card-body">
        <form className="form-Container" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              name="full_name"
              value={full_name}
              className="form-control"
              id="full_name"
              placeholder="Enter Full Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              className="form-control"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phnumber">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              value={phonenumber}
              className="form-control"
              id="phnumber"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirm_password"> Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value={confirm_password}
              className="form-control"
              id="confirm_password"
              placeholder="Re-Enter Password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="form-control btn btn-primary btn-block"
            >
              Sign Up
            </button>
          </div>
          <p className=" text-end">
            Have an account? <Link to="/signin">Log In</Link>
          </p>
        </form>
      </div>
    </div>

  );

  return (
    <div style={myStyle} >
      <div className="row px-3 vh-50">
        <div className="register col-md-5 mx-auto align-self-center">
          <div className="text-center">
            <h1>Register</h1>
            {successMsg && showSuccessMsg(successMsg)}
            {errorMsg && showErrorMsg(errorMsg)}
            {loading && <div className="text-center">Loading...</div>}
          </div>
          {showSignUpForm()}
        </div>
      </div>
    </div>
  );
};

export default Signup;
