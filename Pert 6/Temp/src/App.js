import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import Ref from "./Ref";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}>
        Login
      </button>
    ));

    const LogoutButton = withRouter(({ history }) => (
      <button
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/login");
        }}>
        Logout
      </button>
    ));

    const routes = [
      {
        path: "/",
        exact: true,
        render: () => <div>Ini adalah halaman Home</div>,
      },
      {
        path: "/news",
        render: () => <div>Ini adalah halaman News</div>,
      },
      {
        path: "/login",
        render: () => (
          <div>
            <LoginButton />
          </div>
        ),
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div>
              Ini adalah halaman Profile <br /> <LogoutButton />
            </div>
          ) : (
            <Redirect to='/login' />
          ),
      },
      {
        path: "/ref",
        render: () => (
          <div>
            <Ref />
          </div>
        ),
      },
    ];
    return (
      <Router>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to='/'> Home</Link>
            </li>
            <li>
              <Link to='/news'> News</Link>
            </li>
            <li>
              <Link to='/profile'> Profile</Link>
            </li>
            <li>
              <Link to='/ref'> Ref</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
