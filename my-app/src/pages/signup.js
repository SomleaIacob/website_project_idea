import { withRouter } from "react-router";

function Signup(props) {
    
    const API_PATH = "http://localhost/myapp/api/signup.php"
    let userName ="";
    let email ="";
    let password ="";
    let retypePasword ="";

    const userNameChangeHandler = (event) => {
        userName = event.target.value;
    }

    const emailChangeHandler = (event) => {
        email = event.target.value;
    }

    const passwordChangeHandler = (event) => {
        password = event.target.value;
    }

    const retypePaswordChangeHandler = (event) => {
        retypePasword = event.target.value;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetch(API_PATH,{
          method: 'post',
          //mode: 'no-cors', // no-cors, *cors, same-origin
          headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
          body: JSON.stringify({
            userName: userName,
            email: email,
            password: password
           })
        })
        .then(response => {
          if (!response.ok) {
            debugger
            throw new Error("something went wrong");

          }
          return response.json();
        })
        .then(data => {
          //alert("Ai reusit!");
          props.history.push('/');
        })
        .catch(error => {
          console.error(error);
        });
    }

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
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          name="userEmail"
          id="email"
          aria-describedby="emailHelp"
          onChange={emailChangeHandler}
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
      <div className="mb-3">
        <label htmlFor="inputPassword1" className="form-label">
          Re-type password:
        </label>
        <input
          type="password"
          name="userPassSignUp2"
          className="form-control"
          id="signupPass2"
          onChange={retypePaswordChangeHandler}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default withRouter(Signup);
