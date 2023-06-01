import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Works from "./Component/Works";
import List from "./Component/List";
import Error from "./Component/Error";
import CustomCursor from "./Component/CustomCursor";
import "./Css/App.css";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <List />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
