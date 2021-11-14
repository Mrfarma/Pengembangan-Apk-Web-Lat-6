import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
          </ul>

          <Switch>
            <Route path='/' exact render={() => <div>Ini Halaman Home</div>} />
            <Route
              path='/news'
              exact
              render={() => <div>Ini Halaman News</div>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
