import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  // useRouteMatch
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/private">LOGIN</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/private">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  // let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome To Chelsea FC Store !
      {/* {" "}
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
    >
      Sign Out
      </button> */}
    </p>
  ) : (
      <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>
}

function ProtectedPage() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      {" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
        </button>
    </p>
  ) : (
      <p>You are not logged in.</p>
    );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Home;