import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Sidebar from "./components/common/Sidebar/index";
import Home from "./components/Pages/HomePage";
import About from "./components/Pages/AboutPage";
import Supplement from "./components/Pages/SupplementPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />

          <Route exact path="/supplement" component={Supplement} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
