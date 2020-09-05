import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import PostDetails from './Component/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:id">
          <PostDetails></PostDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
