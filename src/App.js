import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import FavPage from './component/FavPage';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path='/fav'>
              <FavPage />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;