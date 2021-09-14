import "./nav.css";
import { Link, withRouter } from "react-router-dom";
import PropsTypes from "prop-types";
import Button from "react-bootstrap/Button";

function Nav(props) {
  let button;
  function logout() {
    props.setUser(null);
    props.history.push("/");
  }
  if (!props.user) {
    button = (
      <Link to="/login">
        <Button variant="success" className="signin-button">
          Log in
        </Button>
      </Link>
    );
  } else {
    button = (
      <Button variant="success" className="signin-button" onClick={logout}>
        Log out
      </Button>
    );
  }

  return (
    <header>
      <nav>
        <button className="burger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <div className="search">
          <button className="search__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>
        <div>{button}</div>
      </nav>
    </header>
  );
}

Nav.propTypes = {
  user: PropsTypes.string.isRequired,
  setUser: PropsTypes.func.isRequired,
};

export default withRouter(Nav);
