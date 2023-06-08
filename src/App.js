import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Works from "./Component/Works";
import List from "./Component/List";
import Error from "./Component/Error";
import CustomCursor from "./Component/CustomCursor";
import "./Css/App.css";
import ScrollToTop from "./Component/ScrollToTop";
import { CSSTransition } from "react-transition-group";
import { Power3, gsap } from "gsap";
import LoadingScreen from "./Component/LoadingScreen";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

ReactGA.initialize("G-PXNJ9MTLPS");

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the task is completed
    }, 5000); // Adjust the duration as per your requirement
  }, []);

  return (
    <Router>
      <div className="App">
        <Helmet>
          <meta name="description" content="UI/UX Engineer PortFolio" />
          <meta
            name="keywords"
            content="Heshan Tharindu kalubowila, ui designer, Ui developer, Frond-end developer, uiux, Ui/Ux designer, Heshan, tharindu, kalubowila"
          />
        </Helmet>

        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <ScrollToTop />
            <List />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/works" component={Works} />
              <Route path="*" component={Error} />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
