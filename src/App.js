import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Home from './Home';
import Fav from './Fav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
        <Navigation/>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/fav">
              <Fav/>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;