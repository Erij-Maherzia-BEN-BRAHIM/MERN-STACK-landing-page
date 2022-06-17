import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory()

  const [user, setUser] = useState({
    email : '',
    password : ''
  });

  // Handle Input
  const handleChange = (event) =>{
    let name = event.target.name
    let value = event.target.value

    setUser({...user, [name]:value})
  }

  // Handle Login
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const {email, password} = user;
    try {
      const res = await fetch('/login', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email, password
        })
      });

      if(res.status === 400 || !res){
        window.alert("Invalid Credentials")
      }else{
        window.alert("Login Successfull");
        window.location.reload();
        history.push('/')
        // Token is generated When we Logged In.
  
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column align-items-center 
text-white justify-content-center form order-2 bg-dark"
          >
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <div className="lead text-center">
              Enter Your Credentials To Login
            </div>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-dark w-100 mt-4 rounded-pill"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
