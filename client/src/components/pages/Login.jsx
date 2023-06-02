import React, { useEffect, useState } from "react";
import { signin } from "../../api/auth";
import { Link } from "react-router-dom";
import { showErrorMsg } from "../../helpers/message";
import { useNavigate } from "react-router-dom";
import bgblockchain from "../../images/bgblockchain.jpg"
import {
  setAuthentication,
  isAuthenticated,
} from "../../helpers/authentication";

const Signin = () => {
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

  const [formData, setFormData] = useState({
    email_username: "",
    password: "",
    errorMsg: false,
    loading: false,
  });
  const { email_username, password, errorMsg, loading } = formData;

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    // const navigate = useNavigate();
    // alert("Signin successfull");

    evt.preventDefault();
    if (!email_username || !password) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else {
      const { email_username, password } = formData;
      const data = { email_username, password };
      setFormData({ ...formData, loading: true });

      signin(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);
          if (isAuthenticated() && isAuthenticated().role === 1) {
            //role 1 = admin and role 0 = user
            navigate("/nrb/dashboard");
          } else {
            navigate("/user/dashboard");
          }
        })
        
        .catch((err) => {
          console.log("Axios signup error: ", err);
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
    backgroundRepeat: 'no-repeat',
  };

  const showSignInForm = () => (
    <div className="  m-5 card  shadow border-light text-light bg-transparent form-box">
      <h5 className="card-header">Decentralized KYC Sharing System</h5>
      <div className="card-body">

        <form className="form-Container" onSubmit={handleSubmit}>
          <div>
            <div className="form-group mb-3">
              <label htmlFor="email_username">Email or Username</label>
              <input
                type="text"
                name="email_username"
                value={email_username}
                id="email_username"
                className="form-control"
                placeholder="Email or Username"
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group d-flex justify-content-center mb-3">
              <button
                type="submit"
                className=" form-control btn btn-primary btn-block"
              >
                SignIn
              </button>
            </div>
            <p className="text-end ">
              Don't Have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>

  );

  return (
    <div style={myStyle} className="">
      <div className="  row   ">
        <div className=" login col-md-5 mx-auto ">
          <div className="text-center">
            {/* <h1>Nepal Rastra Bank</h1> */}
            {/* {successMsg && showSuccessMsg(successMsg)} */}
            {errorMsg && showErrorMsg(errorMsg)}
            {loading && <div className="text-center">Loading...</div>}
          </div>

          {showSignInForm()}
        </div>
      </div>
    </div>
  );
};

export default Signin;
