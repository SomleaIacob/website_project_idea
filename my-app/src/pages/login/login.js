import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
//import {browserHistory} from 'react'

function Login(props) {
  const API_PATH = "http://localhost/myapp/api/login.php";
  let userName = "";
  let password = "";

  const userNameChangeHandler = (event) => {
    console.log(props.history)
    userName = event.target.value;
  };

  const passwordChangeHandler = (event) => {
    password = event.target.value;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(API_PATH, {
      method: "post",
      //mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          debugger;
          throw new Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        props.setUser(userName)
        //alert("Ai reusit!");
        props.history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputUserName" className="form-label">
          User name:
        </label>
        <input
          type="text"
          className="form-control"
          name="userNameSignUp"
          id="userName"
          aria-describedby="emailHelp"
          onChange={userNameChangeHandler}
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="inputPassword1" className="form-label">
          Password:
        </label>
        <input
          type="password"
          name="userPassSignUp1"
          className="form-control"
          id="signupPass1"
          onChange={passwordChangeHandler}
        ></input>
      </div>
      <div>
        <Link to="/signup">Create an account!</Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
};

export default withRouter(Login);
