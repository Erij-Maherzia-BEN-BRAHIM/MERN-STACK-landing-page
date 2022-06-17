import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {useHistory} from "react-router";

export default function Register() {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  //handleInputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  //handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = user;
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,email,    password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Already used details");
      } else {
        window.alert("Registration Successfully!!");
        history.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div
            className="col-md-5 d-flex flex-column align-items-center 
    text-white justify-content-center form order-2 bg-dark"
          >
            <h1 className="display-4 fw-bolder">Hello</h1>
            <div className="lead text-center">
              Enter Your Details to Register{" "}
            </div>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  placeholder="Enter username..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter email..."
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
                  onChange={handleInput}
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
                  I agree Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-dark w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
