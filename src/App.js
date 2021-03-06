import React from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import itemDetail from "./itemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={itemDetail} />
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
