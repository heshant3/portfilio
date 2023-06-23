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
import "./Css/App.css";
import ScrollToTop from "./Component/ScrollToTop";
import LoadingScreen from "./Component/LoadingScreen";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  useEffect(() => {}, [location]);
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
